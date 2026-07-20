import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography } from '@mui/material';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Switch, type ToggleSwitchDensity, type ToggleSwitchVariant } from './Switch';

const VARIANTS = ['default', 'soft', 'outlined'] as const satisfies readonly ToggleSwitchVariant[];
const DENSITIES = ['sm', 'md', 'lg'] as const satisfies readonly ToggleSwitchDensity[];

function StorySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box component="section" sx={{ display: 'grid', gap: spacing[2] }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: textStateColors.primary }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function VariantLabels() {
  return (
    <Box sx={{ display: 'flex', gap: spacing[4], pl: 12 }}>
      <Box sx={{ width: 160, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary }}>
        Off
      </Box>
      <Box sx={{ width: 160, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary }}>
        On
      </Box>
    </Box>
  );
}

const meta: Meta<typeof Switch> = {
  title: 'Shared/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Binary toggle for settings that take effect immediately (e.g. dark mode, notifications). Uses `role="switch"` on the input for assistive technology.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    helperText: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    variant: { control: 'inline-radio', options: VARIANTS },
    density: { control: 'inline-radio', options: DENSITIES },
    labelPlacement: { control: 'inline-radio', options: ['end', 'start'] },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'Enable notifications',
    description: 'Applies as soon as you toggle.',
    helperText: '',
    invalid: false,
    disabled: false,
    defaultChecked: false,
    variant: 'default',
    density: 'md',
    labelPlacement: 'end',
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};

export const RoleAndStructure: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[2]} sx={{ maxWidth: 640 }}>
      <Typography variant="body2" color="text.secondary">
        The underlying input uses <code>role=&quot;switch&quot;</code> with <code>aria-checked</code>{' '}
        managed by MUI. Pair with a visible <code>label</code> (or <code>aria-label</code>) and optional
        description via <code>aria-describedby</code>.
      </Typography>
      <Switch label="Public profile" description="Anyone signed in can see your display name." />
    </Stack>
  ),
};

export const AllVariantsOffOn: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3] }}>
      <VariantLabels />
      {VARIANTS.map((variant) => (
        <Box key={variant} sx={{ display: 'flex', alignItems: 'center', gap: spacing[4] }}>
          <Box
            sx={{
              width: 100,
              fontSize: typeScale.xs.fontSize,
              fontWeight: 600,
              color: textStateColors.secondary,
              textTransform: 'capitalize',
            }}
          >
            {variant}
          </Box>
          <Box sx={{ width: 160 }}>
            <Switch variant={variant} label="Wi‑Fi" defaultChecked={false} />
          </Box>
          <Box sx={{ width: 160 }}>
            <Switch variant={variant} label="Wi‑Fi" defaultChecked />
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const AllDensities: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[4]}>
      {DENSITIES.map((density) => (
        <StorySection key={density} title={`Density · ${density}`}>
          <Stack direction="row" flexWrap="wrap" gap={spacing[3]} alignItems="center">
            {VARIANTS.map((variant) => (
              <Switch
                key={`${density}-${variant}`}
                density={density}
                variant={variant}
                label={`${variant}`}
                defaultChecked={variant === 'soft'}
              />
            ))}
          </Stack>
        </StorySection>
      ))}
    </Stack>
  ),
};

export const DisabledStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack direction="row" flexWrap="wrap" gap={spacing[4]}>
      {VARIANTS.map((variant) => (
        <Stack key={variant} spacing={spacing[2]}>
          <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
            {variant}
          </Typography>
          <Switch variant={variant} label="Off (disabled)" disabled defaultChecked={false} />
          <Switch variant={variant} label="On (disabled)" disabled defaultChecked />
        </Stack>
      ))}
    </Stack>
  ),
};

export const Validation: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]}>
      {VARIANTS.map((variant) => (
        <Switch
          key={variant}
          variant={variant}
          label={`${variant} · accept terms`}
          invalid
          helperText="Turn on to agree with the updated policy."
          defaultChecked={false}
        />
      ))}
    </Stack>
  ),
};

export const LabelPlacement: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]} sx={{ maxWidth: 420 }}>
      <Switch label="Label end (default)" labelPlacement="end" defaultChecked />
      <Switch label="Label start" labelPlacement="start" defaultChecked />
    </Stack>
  ),
};

export const BehaviorControlled: Story = {
  parameters: { controls: { disable: true } },
  render: function Controlled() {
    const [on, setOn] = useState(false);
    return (
      <Stack spacing={spacing[2]} alignItems="flex-start">
        <Typography variant="body2" color="text.secondary">
          Controlled <code>checked</code> and <code>onChange</code>.
        </Typography>
        <Switch
          label="Low power mode"
          checked={on}
          onChange={(e) => setOn(e.target.checked)}
        />
      </Stack>
    );
  },
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[2]} sx={{ maxWidth: 720 }}>
      <Typography variant="body2" color="text.secondary" component="ul" sx={{ m: 0, pl: 3 }}>
        <li>Keyboard: Space toggles when the switch is focused.</li>
        <li>
          Screen readers: state is exposed as a switch; descriptions use <code>aria-describedby</code>.
        </li>
        <li>
          Ensure on/off is clear from the label (e.g. “Enable …” rather than only “Notifications”).
        </li>
      </Typography>
      <Switch
        label="Screen reader demo"
        description="Secondary text is included in the accessible description."
        defaultChecked
      />
    </Stack>
  ),
};
