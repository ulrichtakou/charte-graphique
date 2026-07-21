import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Link2,
  Pencil,
  Plus,
  Share2,
  Trash2,
  Underline,
} from 'lucide-react';
import {
  PRIMITIVE_HUES,
  primitiveColors,
} from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { controlDensityPairing } from '../../tokens/ui-sizes/ui-sizes-tokens';
import { typeScale } from '../../tokens/typography/typography-tokens';
import {
  ICON_TONE,
  PATTERN_VARIANT_ROWS,
  fabPrimitiveSx,
  iconButtonPrimitiveSx,
  sxContained,
  sxOutlined,
  sxText,
  toggleButtonSx,
} from './button-primitive-sx';
import { Button } from './Button';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { SplitButton } from './SplitButton';
import { ToggleButton, ToggleButtonGroup } from './ToggleButton';

const pc = primitiveColors;

const shell: React.CSSProperties = {
  fontFamily: 'var(--yaoundelogis-font-family, Poppins, sans-serif)',
  maxWidth: '100%',
};

const sectionTitle = {
  m: 0,
  mb: spacing[2],
  fontSize: 15,
  fontWeight: 600,
} as const;

const intro = {
  m: '0 0 16px',
  fontSize: 14,
  color: pc.gray[600],
  maxWidth: 720,
  lineHeight: 1.5,
} as const;

const meta = {
  title: 'Shared/Button/Patterns',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

function iconPxMd(): number {
  const body = controlDensityPairing.md.body;
  return typeScale[body].pxEquivalent;
}

export const StandardButton: Story = {
  name: 'Button',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={intro}>
        Chaque section = variante MUI ; chaque ligne = teinte primitive au ton{' '}
        <strong>{ICON_TONE}</strong>. Icônes Lucide sur les stories qui en utilisent.
      </p>
      {PATTERN_VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 28 }}>
          <Typography component="h4" sx={sectionTitle}>
            {title}
          </Typography>
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
              <Button
                variant={variant}
                color="inherit"
                density="md"
                sx={sx(hue, ICON_TONE)}
              >
                {hue}
              </Button>
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

function ToggleTextRow({
  visualVariant,
  hue,
}: {
  visualVariant: 'contained' | 'outlined' | 'text';
  hue: (typeof PRIMITIVE_HUES)[number];
}) {
  const [align, setAlign] = useState('left');
  return (
    <ToggleButtonGroup
      exclusive
      value={align}
      onChange={(_, v) => v != null && setAlign(v)}
      aria-label={`Alignement ${hue}`}
      sx={{ flexWrap: 'wrap' }}
    >
      <ToggleButton
        value="left"
        density="md"
        color="standard"
        sx={toggleButtonSx(visualVariant, hue, ICON_TONE)}
      >
        <AlignLeft size={18} strokeWidth={2.25} aria-hidden style={{ marginRight: 6 }} />
        Gauche
      </ToggleButton>
      <ToggleButton
        value="center"
        density="md"
        color="standard"
        sx={toggleButtonSx(visualVariant, hue, ICON_TONE)}
      >
        <AlignCenter size={18} strokeWidth={2.25} aria-hidden style={{ marginRight: 6 }} />
        Centre
      </ToggleButton>
      <ToggleButton
        value="right"
        density="md"
        color="standard"
        sx={toggleButtonSx(visualVariant, hue, ICON_TONE)}
      >
        <AlignRight size={18} strokeWidth={2.25} aria-hidden style={{ marginRight: 6 }} />
        Droite
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export const ToggleButtonStory: Story = {
  name: 'Toggle button',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={intro}>
        Groupe exclusif ; Lucide pour les pictos d’alignement. Même matrice teintes × variantes
        visuelles (contained / outlined / text).
      </p>
      {PATTERN_VARIANT_ROWS.map(({ title, variant: visualVariant }) => (
        <section key={visualVariant} style={{ marginBottom: 28 }}>
          <Typography component="h4" sx={sectionTitle}>
            {title}
          </Typography>
          {PRIMITIVE_HUES.map((hue) => (
            <div
              key={hue}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
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
              <ToggleTextRow visualVariant={visualVariant} hue={hue} />
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

function ToggleIconRow({
  visualVariant,
  hue,
}: {
  visualVariant: 'contained' | 'outlined' | 'text';
  hue: (typeof PRIMITIVE_HUES)[number];
}) {
  const [formats, setFormats] = useState<string[]>(['bold']);
  const px = iconPxMd();
  return (
    <ToggleButtonGroup
      value={formats}
      onChange={(_, v) => setFormats(v)}
      aria-label={`Format ${hue}`}
      sx={{ flexWrap: 'wrap' }}
    >
      <ToggleButton
        value="bold"
        density="md"
        color="standard"
        aria-label="Gras"
        sx={toggleButtonSx(visualVariant, hue, ICON_TONE)}
      >
        <Bold size={px} strokeWidth={2.25} aria-hidden />
      </ToggleButton>
      <ToggleButton
        value="italic"
        density="md"
        color="standard"
        aria-label="Italique"
        sx={toggleButtonSx(visualVariant, hue, ICON_TONE)}
      >
        <Italic size={px} strokeWidth={2.25} aria-hidden />
      </ToggleButton>
      <ToggleButton
        value="underline"
        density="md"
        color="standard"
        aria-label="Souligné"
        sx={toggleButtonSx(visualVariant, hue, ICON_TONE)}
      >
        <Underline size={px} strokeWidth={2.25} aria-hidden />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export const ToggleIconButtonStory: Story = {
  name: 'Toggle icon button',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={intro}>Barre de formatage : uniquement des icônes Lucide.</p>
      {PATTERN_VARIANT_ROWS.map(({ title, variant: visualVariant }) => (
        <section key={visualVariant} style={{ marginBottom: 28 }}>
          <Typography component="h4" sx={sectionTitle}>
            {title}
          </Typography>
          {PRIMITIVE_HUES.map((hue) => (
            <div
              key={hue}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
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
              <ToggleIconRow visualVariant={visualVariant} hue={hue} />
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

export const IconButtonStory: Story = {
  name: 'Icon button',
  parameters: { controls: { disable: true } },
  render: () => {
    const px = iconPxMd();
    return (
      <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
        <p style={intro}>
          Trois pictos Lucide (éditer / partager / supprimer) — même grille teintes × variantes.
        </p>
        {PATTERN_VARIANT_ROWS.map(({ title, variant: visualVariant }) => (
          <section key={visualVariant} style={{ marginBottom: 28 }}>
            <Typography component="h4" sx={sectionTitle}>
              {title}
            </Typography>
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
                <Stack direction="row" gap={spacing[1]} flexWrap="wrap">
                  <IconButton
                    color="inherit"
                    aria-label="Éditer"
                    density="md"
                    sx={iconButtonPrimitiveSx(visualVariant, hue, ICON_TONE)}
                  >
                    <Pencil size={px} strokeWidth={2.25} />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="Partager"
                    density="md"
                    sx={iconButtonPrimitiveSx(visualVariant, hue, ICON_TONE)}
                  >
                    <Share2 size={px} strokeWidth={2.25} />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="Supprimer"
                    density="md"
                    sx={iconButtonPrimitiveSx(visualVariant, hue, ICON_TONE)}
                  >
                    <Trash2 size={px} strokeWidth={2.25} />
                  </IconButton>
                </Stack>
              </div>
            ))}
          </section>
        ))}
      </div>
    );
  },
};

export const SplitButtonStory: Story = {
  name: 'Split button',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={intro}>
        Chevron Lucide sur le déclencheur menu. <code>color=&quot;inherit&quot;</code> +{' '}
        <code>buttonSx</code> pour les teintes primitives.
      </p>
      {PATTERN_VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 28 }}>
          <Typography component="h4" sx={sectionTitle}>
            {title}
          </Typography>
          {PRIMITIVE_HUES.map((hue) => (
            <div
              key={hue}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
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
              <SplitButton
                variant={variant}
                color="inherit"
                mainLabel="Enregistrer"
                onMainClick={() => undefined}
                buttonSx={sx(hue, ICON_TONE)}
                options={[
                  { label: 'Publier', onClick: () => undefined },
                  { label: 'Brouillon', onClick: () => undefined },
                ]}
              />
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

export const StandardButtonGroup: Story = {
  name: 'Standard button group',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={intro}>
        Boutons espacés : sur chaque ligne, <strong>outlined</strong> + <strong>contained</strong> +{' '}
        <strong>text</strong> avec les <code>sx</code> primitifs correspondants (ton {ICON_TONE}).
      </p>
      {PRIMITIVE_HUES.map((hue) => (
        <div
          key={hue}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 10,
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
          <Stack direction="row" gap={spacing[2]} flexWrap="wrap" role="group" aria-label={hue}>
            <Button
              variant="outlined"
              color="inherit"
              density="md"
              sx={sxOutlined(hue, ICON_TONE)}
            >
              Annuler
            </Button>
            <Button
              variant="contained"
              color="inherit"
              density="md"
              sx={sxContained(hue, ICON_TONE)}
            >
              OK
            </Button>
            <Button variant="text" color="inherit" density="md" sx={sxText(hue, ICON_TONE)}>
              Aide
            </Button>
          </Stack>
        </div>
      ))}
    </div>
  ),
};

export const ConnectedButtonGroup: Story = {
  name: 'Connected button group',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={intro}>
        <code>ButtonGroup</code> relié — ici chaque segment reprend la même teinte (ton {ICON_TONE}
        ).
      </p>
      {PATTERN_VARIANT_ROWS.map(({ title, variant, sx }) => (
        <section key={variant} style={{ marginBottom: 28 }}>
          <Typography component="h4" sx={sectionTitle}>
            {title}
          </Typography>
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
              <ButtonGroup variant={variant === 'text' ? 'outlined' : variant} aria-label={hue}>
                <Button variant={variant} color="inherit" density="md" sx={sx(hue, ICON_TONE)}>
                  Un
                </Button>
                <Button variant={variant} color="inherit" density="md" sx={sx(hue, ICON_TONE)}>
                  Deux
                </Button>
                <Button variant={variant} color="inherit" density="md" sx={sx(hue, ICON_TONE)}>
                  Trois
                </Button>
              </ButtonGroup>
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

export const FabStory: Story = {
  name: 'Floating action button (FAB)',
  parameters: { controls: { disable: true } },
  render: () => {
    const px = Math.round(iconPxMd() * 1.1);
    return (
      <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
        <p style={intro}>FAB circulaire + Lucide <strong>Plus</strong>.</p>
        {PATTERN_VARIANT_ROWS.map(({ title, variant: visualVariant }) => (
          <section key={visualVariant} style={{ marginBottom: 28 }}>
            <Typography component="h4" sx={sectionTitle}>
              {title}
            </Typography>
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
                <Fab
                  color="inherit"
                  aria-label={`Créer ${hue}`}
                  fabSize="md"
                  sx={fabPrimitiveSx(visualVariant, hue, ICON_TONE)}
                >
                  <Plus size={px} strokeWidth={2.25} aria-hidden />
                </Fab>
              </div>
            ))}
          </section>
        ))}
      </div>
    );
  },
};

export const ExtendedFabStory: Story = {
  name: 'Extended FAB',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ ...shell, maxHeight: '85vh', overflow: 'auto', paddingRight: 8 }}>
      <p style={intro}>
        Variante <code>extended</code> : Lucide <strong>Link2</strong> + libellé court.
      </p>
      {PATTERN_VARIANT_ROWS.map(({ title, variant: visualVariant }) => (
        <section key={visualVariant} style={{ marginBottom: 28 }}>
          <Typography component="h4" sx={sectionTitle}>
            {title}
          </Typography>
          {PRIMITIVE_HUES.map((hue) => (
            <div
              key={hue}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
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
              <Fab
                variant="extended"
                color="inherit"
                aria-label={`Composer ${hue}`}
                fabSize="md"
                sx={fabPrimitiveSx(visualVariant, hue, ICON_TONE)}
              >
                <Link2 size={20} strokeWidth={2.25} aria-hidden style={{ marginRight: 8 }} />
                {hue}
              </Fab>
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};

export const FabMenuStory: Story = {
  name: 'FAB menu',
  parameters: { controls: { disable: true } },
  render: function FabMenuStoryFn() {
    const [openKey, setOpenKey] = useState<string | null>(null);
    const px = 24;
    return (
      <div style={{ ...shell, maxHeight: '90vh', overflow: 'auto', paddingRight: 8 }}>
        <p style={{ ...intro, marginBottom: 16 }}>
          Un <code>SpeedDial</code> par teinte (fermé par défaut) ; icônes Lucide dans le FAB et les
          actions.
        </p>
        {PATTERN_VARIANT_ROWS.map(({ title, variant: visualVariant }) => (
          <section key={visualVariant} style={{ marginBottom: 32 }}>
            <Typography component="h4" sx={sectionTitle}>
              {title}
            </Typography>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 16,
              }}
            >
              {PRIMITIVE_HUES.map((hue) => {
                const key = `${visualVariant}-${hue}`;
                const open = openKey === key;
                const fabSx = fabPrimitiveSx(visualVariant, hue, ICON_TONE);
                return (
                  <Box
                    key={key}
                    sx={{
                      position: 'relative',
                      height: 220,
                      border: `1px dashed ${pc.gray[200]}`,
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        textTransform: 'capitalize',
                        fontWeight: 600,
                        color: pc.gray[700],
                        zIndex: 1,
                      }}
                    >
                      {hue}
                    </Typography>
                    <SpeedDial
                      ariaLabel={`Actions ${hue}`}
                      sx={{ position: 'absolute', bottom: 12, right: 12 }}
                      icon={
                        <SpeedDialIcon
                          icon={<Plus size={px} strokeWidth={2.25} aria-hidden />}
                        />
                      }
                      open={open}
                      onOpen={() => setOpenKey(key)}
                      onClose={() => setOpenKey(null)}
                      FabProps={{
                        color: 'inherit',
                        sx: fabSx,
                      }}
                    >
                      <SpeedDialAction
                        icon={<Pencil size={20} strokeWidth={2} aria-hidden />}
                        tooltipTitle="Éditer"
                        onClick={() => setOpenKey(null)}
                      />
                      <SpeedDialAction
                        icon={<Share2 size={20} strokeWidth={2} aria-hidden />}
                        tooltipTitle="Partager"
                        onClick={() => setOpenKey(null)}
                      />
                      <SpeedDialAction
                        icon={<Trash2 size={20} strokeWidth={2} aria-hidden />}
                        tooltipTitle="Supprimer"
                        onClick={() => setOpenKey(null)}
                      />
                    </SpeedDial>
                  </Box>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    );
  },
};
