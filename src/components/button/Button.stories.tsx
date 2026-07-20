import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { SxProps, Theme } from '@mui/material/styles';
import { ArrowRight, Plus } from 'lucide-react';
import {
  COLOR_SCALE_STEPS,
  primitiveColors,
  PRIMITIVE_HUES,
  type ColorScaleStep,
  type PrimitiveHue,
} from '../../tokens/colors/primitives/primitive-colors';
import { controlDensityPairing } from '../../tokens/ui-sizes/ui-sizes-tokens';
import type { ComponentHeightToken } from '../../tokens/ui-sizes/ui-sizes-tokens';
import { typeScale } from '../../tokens/typography/typography-tokens';
import {
  ICON_TONE,
  sxContained,
  sxOutlined,
  sxText,
} from './button-primitive-sx';
import { Button } from './Button';

const pc = primitiveColors;

/** Same pairing as buttons: icon box matches body text step (ui-sizes). */
function iconPx(density: ComponentHeightToken): number {
  const body = controlDensityPairing[density].body;
  return typeScale[body].pxEquivalent;
}

const shell: React.CSSProperties = {
  fontFamily: 'system-ui, sans-serif',
  maxWidth: '100%',
};

const iconRowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  alignItems: 'center',
};

const VARIANT_ROWS = [
  { title: 'Contained', variant: 'contained' as const, sx: sxContained },
  { title: 'Outlined', variant: 'outlined' as const, sx: sxOutlined },
  { title: 'Text', variant: 'text' as const, sx: sxText },
];

const DENSITY_KEYS = ['sm', 'md', 'lg', 'xl'] as const satisfies readonly ComponentHeightToken[];

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Visible label (required — icon-only is not supported)',
    },
    density: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
        'info',
        'inherit',
      ],
    },
    loading: { control: 'boolean' },
    loadingText: { control: 'text' },
    loadingPosition: { control: 'inline-radio', options: ['start'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    startIcon: { control: false },
    endIcon: { control: false },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Continue',
    variant: 'contained',
    color: 'primary',
    density: 'md',
    loading: false,
    disabled: false,
    fullWidth: false,
    loadingPosition: 'start',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

function MatrixTable({
  variant,
  sxFn,
}: {
  variant: 'contained' | 'outlined' | 'text';
  sxFn: (hue: PrimitiveHue, step: ColorScaleStep) => SxProps<Theme>;
}) {
  return (
    <div style={{ overflow: 'auto', maxHeight: 'min(72vh, 720px)' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          fontSize: 11,
          width: '100%',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                position: 'sticky',
                left: 0,
                background: '#f8fafc',
                zIndex: 1,
                padding: 6,
                textAlign: 'left',
              }}
            >
              hue \ step
            </th>
            {COLOR_SCALE_STEPS.map((step) => (
              <th key={step} style={{ padding: 6, minWidth: 52 }}>
                {step}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PRIMITIVE_HUES.map((hue) => (
            <tr key={hue}>
              <td
                style={{
                  position: 'sticky',
                  left: 0,
                  background: '#f8fafc',
                  fontWeight: 600,
                  padding: 6,
                  textTransform: 'capitalize',
                }}
              >
                {hue}
              </td>
              {COLOR_SCALE_STEPS.map((step) => (
                <td key={step} style={{ padding: 4, textAlign: 'center' }}>
                  <Button
                    variant={variant}
                    color="inherit"
                    density="md"
                    sx={sxFn(hue, step)}
                  >
                    {String(step)}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** All primitive hues × all scale steps × contained | outlined | text. Spinner sizes follow `spinnerDiameterForComponent` in the component. */
export const Playground: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <h3 style={{ margin: '0 0 12px', fontSize: 18 }}>Contained</h3>
      <MatrixTable variant="contained" sxFn={sxContained} />
      <h3 style={{ margin: '24px 0 12px', fontSize: 18 }}>Outlined</h3>
      <MatrixTable variant="outlined" sxFn={sxOutlined} />
      <h3 style={{ margin: '24px 0 12px', fontSize: 18 }}>Text</h3>
      <MatrixTable variant="text" sxFn={sxText} />
    </div>
  ),
};

/** Every primitive hue × sm–xl × contained | outlined | text (tone {ICON_TONE}). */
export const Densities: Story = {
  name: 'Densities',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={{ margin: '0 0 16px', fontSize: 14, color: pc.gray[500], maxWidth: 520 }}>
        Each row is one hue: buttons are <strong>sm → xl</strong> densities. All three variants
        below use primitive fills at tone <strong>{ICON_TONE}</strong>.
      </p>
      {VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 28 }}>
          <h4
            style={{
              margin: '0 0 12px',
              fontSize: 15,
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h4>
          {PRIMITIVE_HUES.map((hue) => (
            <div
              key={hue}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  width: 64,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  color: pc.gray[600],
                }}
              >
                {hue}
              </span>
              {DENSITY_KEYS.map((d) => (
                <Button
                  key={d}
                  density={d}
                  variant={variant}
                  color="inherit"
                  sx={sx(hue, ICON_TONE)}
                >
                  {d}
                </Button>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

/** Icon + label — every primitive hue at tone {ICON_TONE}, all variants */
export const IconPlusLabel: Story = {
  name: 'Icon + label (start)',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      {VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 24 }}>
          <h4
            style={{
              margin: '0 0 10px',
              fontSize: 15,
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h4>
          <div style={iconRowStyle}>
            {PRIMITIVE_HUES.map((hue) => (
              <Button
                key={hue}
                variant={variant}
                color="inherit"
                density="md"
                sx={sx(hue, ICON_TONE)}
                startIcon={
                  <Plus
                    size={iconPx('md')}
                    strokeWidth={2}
                    aria-hidden
                    color="currentColor"
                  />
                }
              >
                {hue}
              </Button>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

/** Label + icon — every primitive hue at tone {ICON_TONE}, all variants */
export const LabelPlusIcon: Story = {
  name: 'Label + icon (end)',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      {VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 24 }}>
          <h4
            style={{
              margin: '0 0 10px',
              fontSize: 15,
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h4>
          <div style={iconRowStyle}>
            {PRIMITIVE_HUES.map((hue) => (
              <Button
                key={hue}
                variant={variant}
                color="inherit"
                density="md"
                sx={sx(hue, ICON_TONE)}
                endIcon={
                  <ArrowRight
                    size={iconPx('md')}
                    strokeWidth={2}
                    aria-hidden
                    color="currentColor"
                  />
                }
              >
                {hue}
              </Button>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

function LoadingSpinnerDemoCell({
  variant,
  sx,
}: {
  variant: 'contained' | 'outlined' | 'text';
  sx: SxProps<Theme>;
}) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) return;
    const t = window.setTimeout(() => setLoading(false), 2500);
    return () => window.clearTimeout(t);
  }, [loading]);
  return (
    <Button
      variant={variant}
      color="inherit"
      density="md"
      sx={sx}
      loading={loading}
      loadingPosition="start"
      onClick={() => setLoading(true)}
    >
      Save
    </Button>
  );
}

function LoadingReplaceDemoCell({
  variant,
  sx,
}: {
  variant: 'contained' | 'outlined' | 'text';
  sx: SxProps<Theme>;
}) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) return;
    const t = window.setTimeout(() => setLoading(false), 2500);
    return () => window.clearTimeout(t);
  }, [loading]);
  return (
    <Button
      variant={variant}
      color="inherit"
      density="md"
      sx={sx}
      loading={loading}
      loadingPosition="start"
      loadingText="Saving…"
      onClick={() => setLoading(true)}
    >
      Save
    </Button>
  );
}

export const LoadingSpinnerPlusLabel: Story = {
  name: 'Loading · spinner + label',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={{ margin: '0 0 16px', fontSize: 14, color: pc.gray[500], maxWidth: 560 }}>
        Click any button: spinner stays beside the label, then resets after a simulated delay.
        All primitive hues at tone <strong>{ICON_TONE}</strong>, every variant.
      </p>
      {VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 24 }}>
          <h4
            style={{
              margin: '0 0 10px',
              fontSize: 15,
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h4>
          {PRIMITIVE_HUES.map((hue) => (
            <div
              key={hue}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 8,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  width: 64,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  color: pc.gray[600],
                }}
              >
                {hue}
              </span>
              <LoadingSpinnerDemoCell variant={variant} sx={sx(hue, ICON_TONE)} />
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

export const LoadingReplaceLabel: Story = {
  name: 'Loading · replace label',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={{ margin: '0 0 16px', fontSize: 14, color: pc.gray[500], maxWidth: 560 }}>
        Click any button: label becomes &quot;Saving…&quot;, spinner shows, control disables,
        then resets. Same primitive matrix as above.
      </p>
      {VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 24 }}>
          <h4
            style={{
              margin: '0 0 10px',
              fontSize: 15,
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h4>
          {PRIMITIVE_HUES.map((hue) => (
            <div
              key={hue}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 8,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  width: 64,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  color: pc.gray[600],
                }}
              >
                {hue}
              </span>
              <LoadingReplaceDemoCell variant={variant} sx={sx(hue, ICON_TONE)} />
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Unavailable',
    variant: 'contained',
    color: 'primary',
  },
};

export const FullWidth: Story = {
  name: 'Full width',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxWidth: 440 }}>
      <p style={{ margin: '0 0 16px', fontSize: 14, color: pc.gray[500] }}>
        Narrow column so <code>fullWidth</code> is visible — every hue and variant at tone{' '}
        <strong>{ICON_TONE}</strong>.
      </p>
      {VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 24 }}>
          <h4
            style={{
              margin: '0 0 10px',
              fontSize: 15,
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h4>
          {PRIMITIVE_HUES.map((hue) => (
            <div key={hue} style={{ marginBottom: 10 }}>
              <div
                style={{
                  fontSize: 11,
                  marginBottom: 4,
                  textTransform: 'capitalize',
                  color: pc.gray[600],
                  fontWeight: 600,
                }}
              >
                {hue}
              </div>
              <Button
                fullWidth
                variant={variant}
                color="inherit"
                density="md"
                sx={sx(hue, ICON_TONE)}
              >
                Continue
              </Button>
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};
