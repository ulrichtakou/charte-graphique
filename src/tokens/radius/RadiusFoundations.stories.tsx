import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { primitiveColors } from '../colors/primitives/primitive-colors';
import { spacing } from '../spacing/spacing-tokens';
import {
  nestedRadius,
  radii,
  radiusCssVar,
  radiusKeysInOrder,
  radiusPxAt16Root,
} from './radius-tokens';

/** Story chrome — sourced from `primitiveColors` */
const pc = primitiveColors;

const docShell: React.CSSProperties = {
  fontFamily: 'var(--yaoundelogis-font-family, Poppins, sans-serif)',
  color: pc.gray[800],
  maxWidth: 720,
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: pc.gray[600],
  marginBottom: 8,
};

/** Intended component targets (future) — not tied to current shared-ui components */
const radiusUsage: Record<keyof typeof radii, string> = {
  none: 'Dense grids, flat tables, dividers',
  xs: 'Compact fields, subtle chips, micro controls',
  sm: 'Default buttons, list rows, light inset surfaces',
  md: 'Content cards, menus, popovers, medium panels',
  lg: 'Modals, drawers, large cards, primary sections',
  full: 'Pill badges, avatars, switches, any circular / capsule shape',
};

const meta: Meta = {
  title: 'YaoundéLogis/Tokens/Rayons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Border radii (rem, 4px grid). Nested corners: inner radius = outer radius − padding (see `nestedRadius`).',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Scale: Story = {
  name: '1. Scale',
  render: () => {
    const keys = radiusKeysInOrder();
    return (
      <div style={docShell}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
          Border radius scale
        </h2>
        <p style={{ margin: '0 0 20px', color: pc.gray[600], lineHeight: 1.6 }}>
          Five useful steps (plus <code>none</code>), aligned with spacing steps
          (xs→4px … lg→16px) and <code>full</code> for pill / circular shapes.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${pc.gray[200]}`, textAlign: 'left' }}>
              <th style={{ padding: '10px 8px' }}>Token</th>
              <th style={{ padding: '10px 8px' }}>Value</th>
              <th style={{ padding: '10px 8px' }}>~px @16</th>
              <th style={{ padding: '10px 8px' }}>Variable</th>
              <th style={{ padding: '10px 8px', minWidth: 200 }}>
                Target components
              </th>
              <th style={{ padding: '10px 8px', width: 120 }}>Preview</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key) => {
              const value = radii[key];
              const px = radiusPxAt16Root[key];
              const varName = radiusCssVar(key);
              return (
                <tr key={key} style={{ borderBottom: `1px solid ${pc.gray[100]}` }}>
                  <td
                    style={{
                      padding: '10px 8px',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: 12,
                      color: pc.gray[600],
                    }}
                  >
                    {key}
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: 12,
                    }}
                  >
                    {value}
                  </td>
                  <td style={{ padding: '10px 8px', color: pc.gray[500] }}>
                    {px !== undefined ? px : '—'}
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: 11,
                      color: pc.gray[400],
                      wordBreak: 'break-all',
                    }}
                  >
                    {varName}
                  </td>
                  <td style={{ padding: '10px 8px', color: pc.gray[600], lineHeight: 1.45 }}>
                    {radiusUsage[key]}
                  </td>
                  <td style={{ padding: '10px 8px', verticalAlign: 'middle' }}>
                    <div
                      style={{
                        width: 72,
                        height: 48,
                        background: pc.blue[500],
                        borderRadius: value,
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  },
};

export const NestedCorners: Story = {
  name: '2. Nested corners',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Nested corners
      </h2>
      <p style={{ margin: '0 0 16px', color: pc.gray[600], lineHeight: 1.6 }}>
        <code>nestedRadius(outer, padding)</code> resolves to{' '}
        <code>max(0px, outer − padding)</code> to avoid misaligned arcs when
        content is inset using <code>spacing</code> tokens.
      </p>
      <div style={{ marginBottom: 24 }}>
        <div style={labelStyle}>
          Example — outer <code>lg</code>, gutter <code>spacing[3]</code>
        </div>
        <div
          style={{
            display: 'inline-block',
            padding: spacing[3],
            background: pc.gray[200],
            borderRadius: radii.lg,
          }}
        >
          <div
            style={{
              padding: spacing[4],
              background: pc.blue[200],
              color: pc.blue[900],
              borderRadius: nestedRadius('lg', 3),
              fontSize: 14,
            }}
          >
            Inner radius = <code>nestedRadius(&apos;lg&apos;, 3)</code> (outer −
            gutter), concentric with the parent corner.
          </div>
        </div>
      </div>
      <div>
        <div style={labelStyle}>Code</div>
        <code
          style={{
            display: 'block',
            fontSize: 12,
            color: pc.gray[600],
            fontFamily: 'ui-monospace, monospace',
            padding: spacing[3],
            background: pc.gray[50],
            borderRadius: radii.sm,
          }}
        >
          {`nestedRadius('lg', 4) // → max(0px, calc(1rem - 1rem)) — square inner\n`}
          {`nestedRadius('lg', 3) // → max(0px, calc(1rem - 0.75rem)) — same as radii.xs`}
        </code>
      </div>
    </div>
  ),
};

export const Usage: Story = {
  name: '3. Usage',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Usage
      </h2>
      <p style={{ margin: '0 0 20px', color: pc.gray[600], lineHeight: 1.6 }}>
        Import <code>radii</code> for inline styles, or{' '}
        <code>radiusRootStyleObject()</code> on a root container and then{' '}
        <code>var({radiusCssVar('md')})</code> in CSS.
      </p>
      <code
        style={{
          display: 'block',
          fontSize: 12,
          color: pc.gray[600],
          fontFamily: 'ui-monospace, monospace',
          padding: spacing[3],
          background: pc.gray[50],
          borderRadius: radii.sm,
        }}
      >
        {`import { radii, nestedRadius, radiusRootStyleObject, radiusCssVar } from 'charte-graphique';`}
      </code>
    </div>
  ),
};
