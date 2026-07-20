import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { User } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  componentHeightKeysInOrder,
  type ComponentHeightToken,
} from '../../tokens/ui-sizes/ui-sizes-tokens';
import { fontWeights, textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Input, type InputFieldVariant } from './Input';
import { NumberField } from './InputNumber';
import { PasswordField } from './InputPassword';
import { SearchField } from './InputSearch';

const pc = primitiveColors;

/** Toutes les variantes de champ — stories en grille ou sections répétées */
const INPUT_VARIANTS = ['outline', 'filled', 'soft'] as const satisfies readonly InputFieldVariant[];

const VARIANT_LABEL: Record<InputFieldVariant, string> = {
  outline: 'Outline',
  filled: 'Filled',
  soft: 'Soft',
};

const variantGridScrollWrapSx = {
  overflowX: 'auto' as const,
  maxWidth: '100%',
  pb: 0.5,
};

const variantGridSx = {
  display: 'grid',
  gridTemplateColumns: '88px repeat(3, minmax(0, 1fr))',
  gap: spacing[2],
  alignItems: 'start',
  minWidth: 560,
  maxWidth: 880,
} as const;

const variantColHeaderSx = {
  fontSize: typeScale.xs.fontSize,
  fontWeight: fontWeights.semibold,
  textTransform: 'capitalize' as const,
  color: pc.gray[600],
  pb: spacing[1],
};

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['outline', 'filled', 'soft'],
    },
    density: {
      control: 'select',
      options: componentHeightKeysInOrder(),
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
    clearable: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    startAdornment: { control: false },
    endAdornment: { control: false },
    sx: { control: false },
  },
  args: {
    label: 'Nom',
    placeholder: 'Jean Dupont',
    variant: 'outline',
    density: 'md',
    fullWidth: true,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        gap: spacing[4],
        maxWidth: 960,
      }}
    >
      {INPUT_VARIANTS.map((v) => (
        <Input
          key={v}
          label={VARIANT_LABEL[v]}
          variant={v}
          placeholder={v}
          fullWidth
        />
      ))}
    </Box>
  ),
};

export const Densities: Story = {
  name: 'Tailles (density)',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, minmax(0, 1fr))' },
        gap: spacing[4],
        maxWidth: 960,
        maxHeight: '85vh',
        overflow: 'auto',
        pr: 1,
      }}
    >
      {INPUT_VARIANTS.map((v) => (
        <Box key={v}>
          <Box
            component="h4"
            sx={{
              m: 0,
              mb: spacing[2],
              fontSize: typeScale.sm.fontSize,
              fontWeight: fontWeights.semibold,
              color: pc.gray[800],
            }}
          >
            {VARIANT_LABEL[v]}
          </Box>
          <Box sx={{ display: 'grid', gap: spacing[2] }}>
            {(['sm', 'md', 'lg', 'xl'] satisfies ComponentHeightToken[]).map((d) => (
              <Input
                key={`${v}-${d}`}
                variant={v}
                label={`Density · ${d}`}
                density={d}
                placeholder={d}
                fullWidth
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const States: Story = {
  name: 'États visuels',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      <Box sx={variantGridScrollWrapSx}>
        <Box sx={variantGridSx}>
        <Box />
        {INPUT_VARIANTS.map((v) => (
          <Box key={v} sx={variantColHeaderSx}>
            {VARIANT_LABEL[v]}
          </Box>
        ))}
        <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
          Défaut
        </Box>
        {INPUT_VARIANTS.map((v) => (
          <Input key={`def-${v}`} variant={v} placeholder="Saisie" fullWidth />
        ))}
        <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
          Disabled
        </Box>
        {INPUT_VARIANTS.map((v) => (
          <Input key={`dis-${v}`} variant={v} placeholder="—" disabled fullWidth />
        ))}
        <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
          Read-only
        </Box>
        {INPUT_VARIANTS.map((v) => (
          <Input key={`ro-${v}`} variant={v} value="Non modifiable" readOnly fullWidth />
        ))}
        <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
          Chargement
        </Box>
        {INPUT_VARIANTS.map((v) => (
          <Input key={`load-${v}`} variant={v} placeholder="…" loading fullWidth />
        ))}
        </Box>
      </Box>
    </Box>
  ),
};

export const Validation: Story = {
  name: 'Validation',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={variantGridScrollWrapSx}>
      <Box sx={variantGridSx}>
      <Box />
      {INPUT_VARIANTS.map((v) => (
        <Box key={v} sx={variantColHeaderSx}>
          {VARIANT_LABEL[v]}
        </Box>
      ))}
      <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
        Erreur
      </Box>
      {INPUT_VARIANTS.map((v) => (
        <Input
          key={v}
          variant={v}
          label="Email"
          placeholder="vous@exemple.com"
          invalid
          errorMessage="Adresse e-mail invalide."
          defaultValue="bad"
          fullWidth
        />
      ))}
      </Box>
    </Box>
  ),
};

export const HelperAndError: Story = {
  name: 'Texte d’aide et erreur',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing[5] }}>
      <Box sx={variantGridScrollWrapSx}>
        <Box sx={variantGridSx}>
        <Box />
        {INPUT_VARIANTS.map((v) => (
          <Box key={v} sx={variantColHeaderSx}>
            {VARIANT_LABEL[v]}
          </Box>
        ))}
        <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
          Aide seule
        </Box>
        {INPUT_VARIANTS.map((v) => (
          <Input
            key={`h-${v}`}
            variant={v}
            label="Code postal"
            placeholder="75001"
            helperText="5 chiffres pour la France métropolitaine."
            fullWidth
          />
        ))}
        </Box>
      </Box>
      <Box sx={variantGridScrollWrapSx}>
        <Box sx={variantGridSx}>
        <Box />
        {INPUT_VARIANTS.map((v) => (
          <Box key={`h2-${v}`} sx={variantColHeaderSx}>
            {VARIANT_LABEL[v]}
          </Box>
        ))}
        <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
          Aide + erreur
        </Box>
        {INPUT_VARIANTS.map((v) => (
          <Input
            key={`e-${v}`}
            variant={v}
            label="Téléphone"
            placeholder="06 …"
            invalid
            helperText="Format international accepté."
            errorMessage="Numéro incomplet : vérifiez l’indicatif et le nombre de chiffres."
            fullWidth
          />
        ))}
        </Box>
      </Box>
    </Box>
  ),
};

function IconClearCell({ variant }: { variant: InputFieldVariant }) {
  const [v, setV] = useState('alice');
  return (
    <Input
      variant={variant}
      label={`Utilisateur · ${VARIANT_LABEL[variant]}`}
      placeholder="nom"
      startAdornment={<User aria-hidden strokeWidth={2.25} />}
      value={v}
      onChange={(e) => setV(e.target.value)}
      clearable
      fullWidth
    />
  );
}

export const IconAndClear: Story = {
  name: 'Icône et clear',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={variantGridScrollWrapSx}>
      <Box sx={variantGridSx}>
      <Box />
      {INPUT_VARIANTS.map((v) => (
        <Box key={v} sx={variantColHeaderSx}>
          {VARIANT_LABEL[v]}
        </Box>
      ))}
      <Box sx={{ fontSize: typeScale.xs.fontSize, fontWeight: fontWeights.semibold, color: pc.gray[700], pt: 1.25 }}>
        Icône + clear
      </Box>
      {INPUT_VARIANTS.map((v) => (
        <IconClearCell key={v} variant={v} />
      ))}
      </Box>
    </Box>
  ),
};

export const Password: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4], maxWidth: 960 }}>
      {INPUT_VARIANTS.map((v) => (
        <PasswordField
          key={v}
          variant={v}
          label={`Mot de passe · ${VARIANT_LABEL[v]}`}
          placeholder="••••••••"
          fullWidth
          helperText="Afficher / masquer avec le bouton œil (Lucide)."
        />
      ))}
    </Box>
  ),
};

export const Search: Story = {
  render: function SearchStory() {
    const [queries, setQueries] = useState<Record<InputFieldVariant, string>>({
      outline: '',
      filled: '',
      soft: '',
    });
    return (
      <Box sx={{ display: 'grid', gap: spacing[4], maxWidth: 960 }}>
        {INPUT_VARIANTS.map((v) => (
          <SearchField
            key={v}
            variant={v}
            label={`Recherche · ${VARIANT_LABEL[v]}`}
            value={queries[v]}
            onChange={(e) =>
              setQueries((prev) => ({ ...prev, [v]: e.target.value }))
            }
            fullWidth
            helperText="Loupe à gauche, clear quand il y a du texte."
          />
        ))}
      </Box>
    );
  },
};

export const NumberWithStepper: Story = {
  name: 'Nombre · stepper',
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4], maxWidth: 960 }}>
      {INPUT_VARIANTS.map((v) => (
        <NumberField
          key={v}
          variant={v}
          label={`Quantité · ${VARIANT_LABEL[v]}`}
          defaultValue={0}
          min={0}
          max={99}
          step={1}
          fullWidth
          helperText="Stepper interne ; flèches natives masquées."
        />
      ))}
    </Box>
  ),
};

export const NumberWithoutStepper: Story = {
  name: 'Nombre · sans stepper',
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4], maxWidth: 960 }}>
      {INPUT_VARIANTS.map((v) => (
        <NumberField
          key={v}
          variant={v}
          label={`Pourcentage · ${VARIANT_LABEL[v]}`}
          defaultValue={50}
          min={0}
          max={100}
          showStepper={false}
          fullWidth
        />
      ))}
    </Box>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box sx={{ maxWidth: 960 }}>
      <Box sx={{ border: `1px dashed ${pc.gray[300]}`, p: 2, display: 'grid', gap: spacing[3] }}>
        {INPUT_VARIANTS.map((v) => (
          <Input
            key={v}
            variant={v}
            label={`Pleine largeur · ${VARIANT_LABEL[v]}`}
            placeholder="…"
            fullWidth
          />
        ))}
      </Box>
    </Box>
  ),
};

export const Accessibility: Story = {
  name: 'Accessibilité (résumé)',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box
      component="section"
      sx={{
        maxWidth: 520,
        fontSize: 14,
        color: textStateColors.secondary,
        lineHeight: 1.55,
        '& code': {
          fontSize: 13,
          background: pc.gray[100],
          padding: '2px 6px',
          borderRadius: 4,
        },
      }}
    >
      <p style={{ marginTop: 0 }}>
        Le composant associe <code>label</code> et <code>id</code>, expose{' '}
        <code>aria-invalid</code>, <code>aria-describedby</code> (aide + erreur),{' '}
        <code>aria-errormessage</code> si erreur, <code>aria-readonly</code>,{' '}
        <code>aria-busy</code> en chargement. Le contour au focus est visible sur le champ
        (anneau contrasté). Préférez des messages d’erreur explicites et un contraste suffisant
        (tokens <code>textStateColors</code>).
      </p>
      <Box sx={{ display: 'grid', gap: spacing[3] }}>
        {INPUT_VARIANTS.map((v) => (
          <Input
            key={v}
            id={`demo-a11y-email-${v}`}
            variant={v}
            label={`E-mail (id explicite) · ${VARIANT_LABEL[v]}`}
            placeholder="vous@exemple.com"
            helperText="Helper lié via aria-describedby."
            invalid
            errorMessage="Exemple d’erreur."
            defaultValue="x"
            fullWidth
          />
        ))}
      </Box>
    </Box>
  ),
};
