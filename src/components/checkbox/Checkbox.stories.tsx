import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography } from '@mui/material';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Checkbox, CheckboxGroup, type CheckboxDensity, type CheckboxVariant } from './Checkbox';

const VARIANTS = ['default', 'soft', 'outlined'] as const satisfies readonly CheckboxVariant[];
const DENSITIES = ['sm', 'md', 'lg'] as const satisfies readonly CheckboxDensity[];

function VariantLabels() {
  return (
    <Box sx={{ display: 'flex', gap: spacing[2], pl: 14 }}>
      {VARIANTS.map((v) => (
        <Box
          key={v}
          sx={{
            width: 200,
            fontSize: typeScale.xs.fontSize,
            fontWeight: 600,
            color: textStateColors.secondary,
            textTransform: 'capitalize',
          }}
        >
          {v}
        </Box>
      ))}
    </Box>
  );
}

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

const meta: Meta<typeof Checkbox> = {
  title: 'Shared/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Token-based checkbox for multiple selection, explicit consent, or “choose any” lists. Not a substitute for an on/off setting control — use a Switch for that pattern.',
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
    indeterminate: { control: 'boolean' },
    variant: { control: 'inline-radio', options: VARIANTS },
    density: { control: 'inline-radio', options: DENSITIES },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'I agree to the terms',
    description: 'You can change this later in settings.',
    helperText: '',
    invalid: false,
    disabled: false,
    checked: false,
    indeterminate: false,
    variant: 'default',
    density: 'md',
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const RoleAndStructure: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]} sx={{ maxWidth: 720 }}>
      <Typography variant="body2" color="text.secondary">
        Native <code>role=&quot;checkbox&quot;</code> with a binary or tri-state value (including{' '}
        <code>indeterminate</code>). The visible label is associated with the control; optional
        description and helper text are wired with <code>aria-describedby</code>.
      </Typography>
      <Checkbox label="Subscribe to product updates" description="We send at most one email per week." />
    </Stack>
  ),
};

export const AllVariantsUnchecked: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[2] }}>
      <VariantLabels />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
        <Box sx={{ width: 120, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary }}>
          Unchecked
        </Box>
        <Box sx={{ display: 'flex', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Box key={variant} sx={{ width: 200 }}>
              <Checkbox variant={variant} label={`${variant} · off`} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  ),
};

export const AllVariantsChecked: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[2] }}>
      <VariantLabels />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
        <Box sx={{ width: 120, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary }}>
          Checked
        </Box>
        <Box sx={{ display: 'flex', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Box key={variant} sx={{ width: 200 }}>
              <Checkbox variant={variant} label={`${variant} · on`} checked />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  ),
};

function IndeterminateRow() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
      <Box sx={{ width: 120, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary }}>
        Indeterminate
      </Box>
      <Box sx={{ display: 'flex', gap: spacing[2] }}>
        {VARIANTS.map((variant) => (
          <Box key={variant} sx={{ width: 200 }}>
            <Checkbox variant={variant} label={`${variant} · mixed`} indeterminate />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export const AllVariantsIndeterminate: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[2] }}>
      <VariantLabels />
      <IndeterminateRow />
      <Typography variant="caption" color="text.secondary" sx={{ maxWidth: 640 }}>
        Use <code>indeterminate</code> for parent rows when children are only partially selected.
        Clicking behavior should be implemented in app logic (select all / clear).
      </Typography>
    </Box>
  ),
};

export const AllVariantsDisabled: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3] }}>
      <VariantLabels />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
        <Box sx={{ width: 120, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary }}>
          Disabled off
        </Box>
        <Box sx={{ display: 'flex', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Box key={variant} sx={{ width: 200 }}>
              <Checkbox variant={variant} label={`${variant}`} disabled />
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
        <Box sx={{ width: 120, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary }}>
          Disabled on
        </Box>
        <Box sx={{ display: 'flex', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Box key={variant} sx={{ width: 200 }}>
              <Checkbox variant={variant} label={`${variant}`} disabled checked />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  ),
};

export const AllVariantsValidation: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[2] }}>
      <VariantLabels />
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: spacing[2] }}>
        <Box sx={{ width: 120, fontSize: typeScale.xs.fontSize, fontWeight: 600, color: textStateColors.secondary, pt: 1 }}>
          Invalid
        </Box>
        <Box sx={{ display: 'flex', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Box key={variant} sx={{ width: 200 }}>
              <Checkbox
                variant={variant}
                label={`${variant} · required`}
                invalid
                helperText="You must accept to continue."
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  ),
};

export const AllVariantsDensities: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      {DENSITIES.map((density) => (
        <StorySection key={density} title={`Density · ${density}`}>
          <Box sx={{ display: 'flex', gap: spacing[2], flexWrap: 'wrap' }}>
            {VARIANTS.map((variant) => (
              <Checkbox
                key={`${density}-${variant}`}
                density={density}
                variant={variant}
                label={`${variant} (${density})`}
                checked={variant === 'soft'}
              />
            ))}
          </Box>
        </StorySection>
      ))}
    </Box>
  ),
};

export const BehaviorControlled: Story = {
  parameters: { controls: { disable: true } },
  render: function Controlled() {
    const [checked, setChecked] = useState(false);
    return (
      <Stack spacing={spacing[2]} alignItems="flex-start">
        <Typography variant="body2" color="text.secondary">
          Standard controlled pattern with <code>checked</code> and <code>onChange</code>.
        </Typography>
        <Checkbox
          label="Enable beta features"
          checked={checked}
          onChange={(_, v) => setChecked(v)}
        />
      </Stack>
    );
  },
};

export const GroupAllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <CheckboxGroup legend="One option per visual variant (same fieldset)">
        <Checkbox variant="default" label="Default variant" defaultChecked />
        <Checkbox variant="soft" label="Soft variant" />
        <Checkbox variant="outlined" label="Outlined variant" />
      </CheckboxGroup>
    </Box>
  ),
};

export const GroupRealistic: Story = {
  parameters: { controls: { disable: true } },
  render: function RealisticGroup() {
    const [email, setEmail] = useState(false);
    const [sms, setSms] = useState(false);
    const [push, setPush] = useState(true);
    const none = !email && !sms && !push;
    return (
      <Box sx={{ maxWidth: 400 }}>
        <CheckboxGroup
          legend="How should we reach you?"
          {...(none ? { helperText: 'Select at least one option.', error: true } : { error: false })}
        >
          <Checkbox variant="default" label="Email" checked={email} onChange={(_, v) => setEmail(v)} />
          <Checkbox variant="default" label="SMS" checked={sms} onChange={(_, v) => setSms(v)} />
          <Checkbox variant="default" label="Push notifications" checked={push} onChange={(_, v) => setPush(v)} />
        </CheckboxGroup>
      </Box>
    );
  },
};

export const TouchTargetAndLabel: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]} sx={{ maxWidth: 640 }}>
      <Typography variant="body2" color="text.secondary">
        Padding on the control increases the clickable area; the whole <code>FormControlLabel</code> row
        activates the checkbox. Avoid icon-only checkboxes without an <code>aria-label</code>.
      </Typography>
      <Checkbox density="lg" variant="default" label="Large density — bigger hit target" />
    </Stack>
  ),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[2]} sx={{ maxWidth: 720 }}>
      <Typography variant="body2" color="text.secondary" component="ul" sx={{ m: 0, pl: 3 }}>
        <li>Keyboard: Space toggles when focused.</li>
        <li>
          Screen readers: label is read with the control; description and helper use{' '}
          <code>aria-describedby</code>.
        </li>
        <li>
          Validation: <code>aria-invalid</code> when <code>invalid</code> is true.
        </li>
        <li>Contrast: checked and focus ring use token colors on light backgrounds.</li>
      </Typography>
      <Checkbox
        label="Accessible example"
        description="Secondary text is announced after the label."
        helperText="Helper is also linked via aria-describedby."
        invalid
      />
    </Stack>
  ),
};
