import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  COLOR_SCALE_STEPS,
  COLOR_SCALE_STEP_LABELS,
  PRIMITIVE_HUES,
  primitiveColors,
  type PrimitiveHue,
} from './primitive-colors';

/** Hues prioritaires YaoundéLogis (affichés en premier et mis en avant) */
const PRIORITY_HUES: PrimitiveHue[] = ['green', 'gray', 'yellow'];

const HUE_LABELS: Record<PrimitiveHue, string> = {
  green: 'Vert — primaire marque',
  gray: 'Gris — neutre & texte',
  yellow: 'Or — accent marque',
  blue: 'Bleu — état info',
  violet: 'Violet — extension palette',
  red: 'Rouge — erreur / danger',
  orange: 'Orange — avertissement',
  cyan: 'Cyan — info claire',
};

/** Ancres officielle de la charte (step → rôle métier) */
const BRAND_ANCHORS: Partial<Record<PrimitiveHue, Record<number, string>>> = {
  green: { 500: 'Bouton primaire', 800: 'Titre / logo' },
  gray: { 50: 'Fond section', 800: 'Texte corps' },
  yellow: { 500: 'Accent or' },
};

const sortedHues: PrimitiveHue[] = [
  ...PRIORITY_HUES,
  ...(PRIMITIVE_HUES.filter((h) => !PRIORITY_HUES.includes(h)) as PrimitiveHue[]),
];

function PrimitiveColorsDoc() {
  return (
    <div
      style={{
        fontFamily: 'var(--yaoundelogis-font-family, Poppins, sans-serif)',
        color: '#0F3D2E',
        maxWidth: 1200,
      }}
    >
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 8px', color: '#0F3D2E' }}>
          Couleurs primitives — YaoundéLogis
        </h1>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#5C6B63' }}>
          Palette fondation : échelles 50 → 950 par teinte. Les couleurs sémantiques
          et composants référencent ces valeurs. Les teintes <strong>Vert</strong>,{' '}
          <strong>Gris</strong> et <strong>Or</strong> sont les piliers de la charte YaoundéLogis.
        </p>
      </header>

      {sortedHues.map((hue) => {
        const isPriority = PRIORITY_HUES.includes(hue);
        return (
          <section
            key={hue}
            style={{
              marginBottom: 40,
              padding: isPriority ? '16px 20px' : undefined,
              background: isPriority ? '#F5F6F7' : undefined,
              borderRadius: isPriority ? 10 : undefined,
              border: isPriority ? '1px solid #D1D5DB' : undefined,
            }}
          >
            <h2
              style={{
                fontSize: 18,
                fontWeight: 600,
                margin: '0 0 4px',
                color: '#0F3D2E',
              }}
            >
              {HUE_LABELS[hue]}
              {isPriority && (
                <span
                  style={{
                    marginLeft: 10,
                    fontSize: 11,
                    fontWeight: 700,
                    background: '#2E7D4E',
                    color: '#fff',
                    borderRadius: 99,
                    padding: '2px 8px',
                    verticalAlign: 'middle',
                  }}
                >
                  marque
                </span>
              )}
            </h2>
            <p style={{ margin: '0 0 14px', fontSize: 13, color: '#5C6B63' }}>
              {hue}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
                gap: 10,
              }}
            >
              {COLOR_SCALE_STEPS.map((step) => {
                const hex = primitiveColors[hue][step];
                const anchor = BRAND_ANCHORS[hue]?.[step];
                return (
                  <div key={step} style={{ textAlign: 'center' }}>
                    <div
                      title={`${COLOR_SCALE_STEP_LABELS[step]} – ${hex}`}
                      style={{
                        height: 56,
                        borderRadius: 8,
                        backgroundColor: hex,
                        border:
                          step <= 100
                            ? '1px solid rgba(15, 61, 46, 0.10)'
                            : 'none',
                        marginBottom: 6,
                        outline: anchor ? '2px solid #F2B705' : undefined,
                        outlineOffset: 2,
                      }}
                    />
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#0F3D2E' }}>
                      {step}
                    </div>
                    <div style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace', color: '#5C6B63', wordBreak: 'break-all' }}>
                      {hex}
                    </div>
                    {anchor && (
                      <div style={{ fontSize: 10, color: '#2E7D4E', fontWeight: 600, marginTop: 2 }}>
                        {anchor}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

const meta: Meta<typeof PrimitiveColorsDoc> = {
  title: 'YaoundéLogis/Tokens/Couleurs/Primitives',
  component: PrimitiveColorsDoc,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Palette primitive YaoundéLogis — vert `#2E7D4E` (500) / `#0F3D2E` (800), or `#F2B705` (500). Utiliser `primitiveColors` en code et `--sparing-primitive-{hue}-{step}` en CSS.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PrimitiveColorsDoc>;

export const Documentation: Story = {
  render: () => <PrimitiveColorsDoc />,
};
