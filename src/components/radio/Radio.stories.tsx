import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography } from '@mui/material';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Radio, RadioFieldGroup, type RadioDensity, type RadioVariant } from './Radio';

const VARIANTS = ['default', 'soft', 'outlined'] as const satisfies readonly RadioVariant[];
const DENSITIES = ['sm', 'md', 'lg'] as const satisfies readonly RadioDensity[];

function VariantLabels() {
  return (
    <Box sx={{ display: 'flex', gap: spacing[2], pl: 14 }}>
      {VARIANTS.map((v) => (
        <Box
          key={v}
          sx={{
            width: 220,
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

function TwoOptionRow({ variant }: { variant: RadioVariant }) {
  const [value, setValue] = useState('b');
  return (
    <Box sx={{ display: 'grid', gap: spacing[2] }}>
      <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
        {variant}
      </Typography>
      <RadioFieldGroup
        legend={`${variant} · mode de paiement`}
        name={`radio-variant-${variant}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Radio variant={variant} value="a" label="Mobile Money" />
        <Radio variant={variant} value="b" label="Virement bancaire" />
      </RadioFieldGroup>
    </Box>
  );
}

function DisabledOptionsRow({ variant }: { variant: RadioVariant }) {
  const [v, setV] = useState('a');
  return (
    <RadioFieldGroup
      legend={`${variant} · one option disabled`}
      name={`dis-${variant}`}
      value={v}
      onChange={(e) => setV(e.target.value)}
    >
      <Radio variant={variant} value="a" label="Disponible" />
      <Radio variant={variant} value="b" label="Indisponible" disabled />
    </RadioFieldGroup>
  );
}

function ValidationRow({ variant }: { variant: RadioVariant }) {
  const [v, setV] = useState('');
  const invalid = v === '';
  return (
    <RadioFieldGroup
      legend={`${variant} · pick one`}
      name={`val-${variant}`}
      value={v}
      onChange={(e) => setV(e.target.value)}
      {...(invalid
        ? { error: true, helperText: 'Veuillez sélectionner un type de bien pour continuer.' }
        : { error: false })}
    >
      <Radio variant={variant} value="appartement" label="Appartement" invalid={invalid} />
      <Radio variant={variant} value="villa" label="Villa" invalid={invalid} />
    </RadioFieldGroup>
  );
}

const meta: Meta<typeof Radio> = {
  title: 'Shared/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Bouton radio stylé pour des choix mutuellement exclusifs. À utiliser dans `RadioFieldGroup` (ou `RadioGroup` MUI) pour garantir qu\'une seule option est sélectionnée.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    helperText: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    variant: { control: 'inline-radio', options: VARIANTS },
    density: { control: 'inline-radio', options: DENSITIES },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'Appartement',
    description: 'Logement idéal pour 1 à 3 personnes.',
    helperText: '',
    invalid: false,
    disabled: false,
    value: 'appartement',
    variant: 'default',
    density: 'md',
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  render: function PlaygroundRender(args) {
    const [value, setValue] = useState('appartement');
    return (
      <Box sx={{ maxWidth: 420 }}>
        <RadioFieldGroup
          legend="Type de bien"
          name="playground-type-bien"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <Radio
            value="appartement"
            label={args.label}
            description={args.description}
            helperText={args.helperText || undefined}
            variant={args.variant}
            density={args.density}
            invalid={args.invalid}
            disabled={args.disabled}
            fullWidth={args.fullWidth}
          />
          <Radio
            value="villa"
            label="Villa"
            description="Frais supplémentaires applicables."
            variant={args.variant}
            density={args.density}
          />
        </RadioFieldGroup>
      </Box>
    );
  },
};

export const RoleAndStructure: Story = {
  parameters: { controls: { disable: true } },
  render: function RoleStory() {
    const [v, setV] = useState('monthly');
    return (
      <Stack spacing={spacing[3]} sx={{ maxWidth: 720 }}>
        <Typography variant="body2" color="text.secondary">
          Chaque option expose <code>role=&quot;radio&quot;</code> et fait partie d'un groupe de sélection unique via <code>RadioFieldGroup</code>.
        </Typography>
        <RadioFieldGroup
          legend="Type de contrat"
          name="type-contrat"
          value={v}
          onChange={(e) => setV(e.target.value)}
        >
          <Radio value="monthly" label="Mensuel" description="Paiement chaque mois." />
          <Radio value="annual" label="Annuel" description="Une facture par an." />
        </RadioFieldGroup>
      </Stack>
    );
  },
};

export const AllVariantsTwoOptions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[4]}>
      <Typography variant="body2" color="text.secondary">
        Each block is one visual variant; groups use separate <code>name</code> attributes.
      </Typography>
      {VARIANTS.map((variant) => (
        <TwoOptionRow key={variant} variant={variant} />
      ))}
    </Stack>
  ),
};

export const AllVariantsSideBySide: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[2] }}>
      <VariantLabels />
      {(['a', 'b'] as const).map((selected) => (
        <Box key={selected} sx={{ display: 'flex', alignItems: 'flex-start', gap: spacing[2] }}>
          <Box
            sx={{
              width: 120,
              fontSize: typeScale.xs.fontSize,
              fontWeight: 600,
              color: textStateColors.secondary,
              pt: 1,
            }}
          >
            Selected: {selected.toUpperCase()}
          </Box>
          <Box sx={{ display: 'flex', gap: spacing[2] }}>
            {VARIANTS.map((variant) => (
              <Box key={`${selected}-${variant}`} sx={{ width: 220 }}>
                <RadioFieldGroup
                  legend={`${variant} · ${selected}`}
                  name={`side-${selected}-${variant}`}
                  value={selected}
                  onChange={() => undefined}
                >
                  <Radio variant={variant} value="a" label="Option A" />
                  <Radio variant={variant} value="b" label="Option B" />
                </RadioFieldGroup>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const AllVariantsDisabledOption: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]}>
      {VARIANTS.map((variant) => (
        <DisabledOptionsRow key={variant} variant={variant} />
      ))}
    </Stack>
  ),
};

export const AllVariantsValidation: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]}>
      {VARIANTS.map((variant) => (
        <ValidationRow key={variant} variant={variant} />
      ))}
    </Stack>
  ),
};

export const AllDensities: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[4]}>
      {DENSITIES.map((density) => (
        <StorySection key={density} title={`Density · ${density}`}>
          <RadioFieldGroup legend="Variant" name={`density-${density}`} defaultValue="default">
            {VARIANTS.map((variant) => (
              <Radio
                key={variant}
                density={density}
                variant={variant}
                value={variant}
                label={`${variant} (${density})`}
              />
            ))}
          </RadioFieldGroup>
        </StorySection>
      ))}
    </Stack>
  ),
};

export const RowLayout: Story = {
  parameters: { controls: { disable: true } },
  render: function RowStory() {
    const [v, setV] = useState('s');
    return (
      <RadioFieldGroup
        legend="Size (horizontal group)"
        name="size-row"
        value={v}
        onChange={(e) => setV(e.target.value)}
        row
      >
        <Radio value="s" label="S" variant="default" />
        <Radio value="m" label="M" variant="default" />
        <Radio value="l" label="L" variant="default" />
      </RadioFieldGroup>
    );
  },
};

export const BehaviorControlled: Story = {
  parameters: { controls: { disable: true } },
  render: function Controlled() {
    const [value, setValue] = useState('draft');
    return (
      <Stack spacing={spacing[2]} alignItems="flex-start">
        <Typography variant="body2" color="text.secondary">
          Controlled <code>value</code> + <code>onChange</code> on <code>RadioFieldGroup</code>.
        </Typography>
        <RadioFieldGroup
          legend="Status"
          name="status-controlled"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <Radio value="draft" label="Draft" />
          <Radio value="published" label="Published" />
        </RadioFieldGroup>
      </Stack>
    );
  },
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: function A11y() {
    const [v, setV] = useState('yes');
    return (
      <Stack spacing={spacing[2]} sx={{ maxWidth: 720 }}>
        <Typography variant="body2" color="text.secondary" component="ul" sx={{ m: 0, pl: 3 }}>
          <li>Arrow keys move between radios in the same group (MUI / browser behavior).</li>
          <li>Space selects the focused option.</li>
          <li>
            <code>fieldset</code> / <code>legend</code> expose the group name to assistive tech.
          </li>
          <li>
            Optional description text is linked with <code>aria-describedby</code> on the input.
          </li>
        </Typography>
        <RadioFieldGroup
          legend="Notifications"
          name="a11y-demo"
          value={v}
          onChange={(e) => setV(e.target.value)}
        >
          <Radio
            value="yes"
            label="Enable"
            description="You can change this in settings at any time."
          />
          <Radio value="no" label="Disable" />
        </RadioFieldGroup>
      </Stack>
    );
  },
};
