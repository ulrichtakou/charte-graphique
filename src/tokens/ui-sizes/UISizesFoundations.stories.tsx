import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Loader2, Mail, User } from 'lucide-react';
import { primitiveColors } from '../colors/primitives/primitive-colors';
import { radii } from '../radius/radius-tokens';
import { spacing } from '../spacing/spacing-tokens';
import { fontFamilies, fontWeights, typeScale } from '../typography/typography-tokens';
import {
  componentHeights,
  componentHeightKeysInOrder,
  controlDensityPairing,
  iconSizes,
  spinnerDiameterForComponent,
  type ComponentHeightToken,
} from './ui-sizes-tokens';

const pc = primitiveColors;

const meta: Meta = {
  title: 'Design System/Tokens/UI sizes',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Control heights (spacing-based), icon sizes (type-scale-aligned), and spinners sized relative to controls. Icons in stories use lucide-react. Shown in real UI patterns — not abstract token grids.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const docMaxWidth: React.CSSProperties = {
  fontFamily: fontFamilies.sans,
  color: pc.gray[900],
  maxWidth: 520,
};

const fieldShell = (size: ComponentHeightToken): React.CSSProperties => {
  const pair = controlDensityPairing[size];
  return {
    flex: 1,
    minWidth: 0,
    minHeight: componentHeights[size],
    padding: `0 ${spacing[3]}`,
    border: `1px solid ${pc.gray[300]}`,
    borderRadius: radii.sm,
    fontSize: typeScale[pair.body].fontSize,
    fontFamily: fontFamilies.sans,
    color: pc.gray[900],
    background: pc.gray[50],
    outline: 'none',
    boxSizing: 'border-box',
  };
};

const buttonShell = (
  size: ComponentHeightToken,
  extra?: React.CSSProperties,
): React.CSSProperties => {
  const pair = controlDensityPairing[size];
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    minHeight: componentHeights[size],
    padding: `0 ${spacing[4]}`,
    border: 'none',
    borderRadius: radii.sm,
    fontSize: typeScale[pair.body].fontSize,
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.sans,
    color: '#fff',
    background: pc.blue[600],
    cursor: 'pointer',
    boxSizing: 'border-box',
    ...extra,
  };
};

/** Input + primary button at the same control height — how density feels in a form */
export const FormRowAtEachDensity: Story = {
  name: '1. Form density (all sizes)',
  render: () => (
    <div style={{ ...docMaxWidth, maxWidth: 480 }}>
      <h2
        style={{
          fontSize: typeScale.xl.fontSize,
          fontWeight: fontWeights.bold,
          margin: '0 0 8px',
        }}
      >
        Same pattern, four densities
      </h2>
      <p
        style={{
          margin: '0 0 24px',
          color: pc.gray[600],
          lineHeight: 1.6,
          fontSize: typeScale.sm.fontSize,
        }}
      >
        Each block uses <code>componentHeights</code>, paired body text and{' '}
        <code>iconSizes</code> via <code>controlDensityPairing</code>. Compare
        vertical rhythm — gaps between blocks are intentional.
      </p>
      {componentHeightKeysInOrder().map((size) => {
        const pair = controlDensityPairing[size];
        const iconPx = iconSizes[pair.icon];
        return (
          <div
            key={size}
            style={{
              marginBottom: spacing[6],
              paddingBottom: spacing[5],
              borderBottom: `1px solid ${pc.gray[200]}`,
            }}
          >
            <div
              style={{
                fontSize: typeScale.xs.fontSize,
                fontWeight: fontWeights.semibold,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: pc.gray[500],
                marginBottom: spacing[2],
              }}
            >
              {size} — {componentHeights[size]} ({pair.body} / {pair.icon})
            </div>
            <div
              style={{
                display: 'flex',
                gap: spacing[3],
                alignItems: 'stretch',
              }}
            >
              <input
                type="email"
                readOnly
                aria-label="Work email"
                placeholder="you@company.com"
                style={fieldShell(size)}
              />
              <button type="button" style={buttonShell(size)}>
                <Mail
                  aria-hidden
                  width={iconPx}
                  height={iconPx}
                  strokeWidth={2}
                />
                Invite
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ),
};

/** Icon + label — critical alignment check */
export const IconWithLabelButtons: Story = {
  name: '2. Icon + label (buttons)',
  render: () => (
    <div style={docMaxWidth}>
      <h2
        style={{
          fontSize: typeScale.xl.fontSize,
          fontWeight: fontWeights.bold,
          margin: '0 0 8px',
        }}
      >
        Icon size tracks label text
      </h2>
      <p
        style={{
          margin: '0 0 20px',
          color: pc.gray[600],
          lineHeight: 1.6,
          fontSize: typeScale.sm.fontSize,
        }}
      >
        Icons are never shown alone: each control pairs{' '}
        <code>iconSizes[…]</code> with the same density as the label (via{' '}
        <code>controlDensityPairing</code>).
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[3],
          alignItems: 'flex-start',
        }}
      >
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => {
          const pair = controlDensityPairing[size];
          const iconPx = iconSizes[pair.icon];
          return (
            <button key={size} type="button" style={buttonShell(size)}>
              <Mail
                aria-hidden
                width={iconPx}
                height={iconPx}
                strokeWidth={2}
              />
              Send invitation
            </button>
          );
        })}
      </div>
    </div>
  ),
};

/** Badge + avatar — nested scale */
export const BadgeOnAvatar: Story = {
  name: '3. Badge on avatar',
  render: () => {
    const avatarSize = componentHeights.lg;
    const pair = controlDensityPairing.md;
    const iconPx = iconSizes[pair.icon];
    return (
      <div style={docMaxWidth}>
        <h2
          style={{
            fontSize: typeScale.xl.fontSize,
            fontWeight: fontWeights.bold,
            margin: '0 0 8px',
          }}
        >
          Avatar and notification badge
        </h2>
        <p
          style={{
            margin: '0 0 20px',
            color: pc.gray[600],
            lineHeight: 1.6,
            fontSize: typeScale.sm.fontSize,
          }}
        >
          Avatar diameter uses <code>componentHeights.lg</code>; the icon uses
          the md density pairing; the badge uses a smaller type step and padding
          from <code>spacing</code> so it does not fight the avatar edge.
        </p>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            width: avatarSize,
            height: avatarSize,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: radii.full,
              background: pc.gray[200],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: pc.gray[600],
            }}
          >
            <User width={iconPx} height={iconPx} strokeWidth={2} aria-hidden />
          </div>
          <span
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(25%, -25%)',
              minWidth: spacing[5],
              height: spacing[5],
              padding: `0 ${spacing[1.5]}`,
              borderRadius: radii.full,
              background: pc.red[500],
              color: '#fff',
              fontSize: typeScale.xs.fontSize,
              fontWeight: fontWeights.semibold,
              fontFamily: fontFamilies.sans,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            3
          </span>
        </div>
      </div>
    );
  },
};

/** Spinner relative to button height */
export const LoadingButtons: Story = {
  name: '4. Loading state (spinner)',
  render: () => (
    <div style={docMaxWidth}>
      <style>
        {`
          @keyframes ui-sizes-spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <h2
        style={{
          fontSize: typeScale.xl.fontSize,
          fontWeight: fontWeights.bold,
          margin: '0 0 8px',
        }}
      >
        Spinner scales with the control
      </h2>
      <p
        style={{
          margin: '0 0 20px',
          color: pc.gray[600],
          lineHeight: 1.6,
          fontSize: typeScale.sm.fontSize,
        }}
      >
        Lucide <code>Loader2</code> width/height come from{' '}
        <code>spinnerDiameterForComponent(size)</code> (relative to the control).
        Use <code>spinnerStrokeWidthForComponent</code> when building a custom
        ring; here the glyph scales with its box.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
        {(['sm', 'md', 'lg'] as const).map((size) => {
          const pair = controlDensityPairing[size];
          const d = spinnerDiameterForComponent(size);
          return (
            <button
              key={size}
              type="button"
              style={buttonShell(size, { opacity: 0.9, cursor: 'default' })}
            >
              <Loader2
                aria-hidden
                style={{
                  width: d,
                  height: d,
                  animation: 'ui-sizes-spin 0.75s linear infinite',
                  flexShrink: 0,
                }}
                strokeWidth={2.25}
              />
              <span style={{ fontSize: typeScale[pair.body].fontSize }}>
                Saving…
              </span>
            </button>
          );
        })}
      </div>
      <p
        style={{
          marginTop: spacing[5],
          fontSize: typeScale.xs.fontSize,
          color: pc.gray[500],
          fontFamily: 'ui-monospace, monospace',
        }}
      >
        {`spinnerDiameterForComponent('md') → ${spinnerDiameterForComponent('md')}`}
      </p>
    </div>
  ),
};
