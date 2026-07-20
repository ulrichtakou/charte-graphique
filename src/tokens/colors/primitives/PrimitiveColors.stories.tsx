import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  COLOR_SCALE_STEPS,
  COLOR_SCALE_STEP_LABELS,
  PRIMITIVE_HUES,
  primitiveColors,
  type PrimitiveHue,
} from './primitive-colors';

const HUE_LABELS: Record<PrimitiveHue, string> = {
  blue: 'Blue',
  violet: 'Violet',
  green: 'Green',
  gray: 'Gray',
  red: 'Red',
  yellow: 'Yellow',
  orange: 'Orange',
  cyan: 'Cyan',
};

function PrimitiveColorsDoc() {
  return (
    <div
      style={{
        fontFamily:
          '"DM Sans", system-ui, sans-serif',
        color: '#0f172a',
        maxWidth: 1200,
      }}
    >
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 8px' }}>
          Primitive colors
        </h1>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#475569' }}>
          Primitive palette: eight hues on a 50 (lightest) to 950 (darkest) scale.
          Semantic and component tokens will reference these values.
        </p>
      </header>

      {PRIMITIVE_HUES.map((hue) => (
        <section key={hue} style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              margin: '0 0 16px',
              textTransform: 'capitalize',
            }}
          >
            {HUE_LABELS[hue]}
            <span style={{ fontWeight: 400, color: '#64748b', marginLeft: 8 }}>
              ({hue})
            </span>
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
              gap: 10,
            }}
          >
            {COLOR_SCALE_STEPS.map((step) => {
              const hex = primitiveColors[hue][step];
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
                          ? '1px solid rgba(15, 23, 42, 0.08)'
                          : 'none',
                      marginBottom: 6,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#334155',
                    }}
                  >
                    {step}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontFamily: 'ui-monospace, monospace',
                      color: '#64748b',
                      wordBreak: 'break-all',
                    }}
                  >
                    {hex}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta: Meta<typeof PrimitiveColorsDoc> = {
  title: 'Design System/Tokens/Colors/Primitives/Primitive colors',
  component: PrimitiveColorsDoc,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Level 1 color tokens: per-hue scales (50–950). Use `primitiveColors` in code and `--croki-primitive-{hue}-{step}` in CSS.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PrimitiveColorsDoc>;

export const Documentation: Story = {
  render: () => <PrimitiveColorsDoc />,
};
