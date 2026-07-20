import React, { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  flattenSemanticColors,
  SEMANTIC_ROLE_HUE,
} from './semantic-colors';
import {
  SEMANTIC_PROPERTIES,
  SEMANTIC_ROLES,
} from './semantic-color.types';

function SemanticColorsDoc() {
  const rows = useMemo(() => flattenSemanticColors(), []);
  const [filterProperty, setFilterProperty] = useState<string>('all');
  const [filterRole, setFilterRole] = useState<string>('all');

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const [prop, role] = r.path.split('.');
      if (filterProperty !== 'all' && prop !== filterProperty) return false;
      if (filterRole !== 'all' && role !== filterRole) return false;
      return true;
    });
  }, [rows, filterProperty, filterRole]);

  return (
    <div
      style={{
        fontFamily: '"DM Sans", system-ui, sans-serif',
        color: '#0f172a',
        maxWidth: 1280,
      }}
    >
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 8px' }}>
          Semantic colors
        </h1>
        <p style={{ margin: '0 0 12px', fontSize: 15, lineHeight: 1.6, color: '#475569' }}>
          Token path: <code style={{ fontSize: 13 }}>property.role.tone.state</code>
          — Property (text, icon, border, background), Role (primary, neutral,
          negative, positive), Tone (accent, subtle), State (default + hover,
          press, focus, disabled from the model).
        </p>
        <p style={{ margin: 0, fontSize: 14, color: '#64748b' }}>
          Role → hue: primary → {SEMANTIC_ROLE_HUE.primary}, neutral →{' '}
          {SEMANTIC_ROLE_HUE.neutral}, negative → {SEMANTIC_ROLE_HUE.negative},
          positive → {SEMANTIC_ROLE_HUE.positive}. Values resolve to primitives;
          disabled uses neutral gray regardless of role.
        </p>
      </header>

      <div
        style={{
          display: 'flex',
          gap: 16,
          marginBottom: 20,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <label style={{ fontSize: 14, color: '#334155' }}>
          Property{' '}
          <select
            value={filterProperty}
            onChange={(e) => setFilterProperty(e.target.value)}
            style={{ marginLeft: 8, padding: '6px 10px', borderRadius: 6 }}
          >
            <option value="all">All</option>
            {SEMANTIC_PROPERTIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label style={{ fontSize: 14, color: '#334155' }}>
          Role{' '}
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            style={{ marginLeft: 8, padding: '6px 10px', borderRadius: 6 }}
          >
            <option value="all">All</option>
            {SEMANTIC_ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <span style={{ fontSize: 13, color: '#94a3b8' }}>
          {filtered.length} token{filtered.length === 1 ? '' : 's'}
        </span>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13,
          }}
        >
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '10px 8px', fontWeight: 600 }}>Swatch</th>
              <th style={{ padding: '10px 8px', fontWeight: 600 }}>Path</th>
              <th style={{ padding: '10px 8px', fontWeight: 600 }}>CSS variable</th>
              <th style={{ padding: '10px 8px', fontWeight: 600 }}>Primitive</th>
              <th style={{ padding: '10px 8px', fontWeight: 600 }}>Hex</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr
                key={row.path}
                style={{ borderBottom: '1px solid #f1f5f9' }}
              >
                <td style={{ padding: '8px', verticalAlign: 'middle' }}>
                  <div
                    title={row.hex}
                    style={{
                      width: 40,
                      height: 28,
                      borderRadius: 6,
                      backgroundColor: row.hex,
                      border: '1px solid rgba(15, 23, 42, 0.12)',
                    }}
                  />
                </td>
                <td style={{ padding: '8px', fontFamily: 'ui-monospace, monospace', fontSize: 12 }}>
                  {row.path}
                </td>
                <td
                  style={{
                    padding: '8px',
                    fontFamily: 'ui-monospace, monospace',
                    fontSize: 11,
                    color: '#475569',
                    wordBreak: 'break-all',
                  }}
                >
                  {row.cssVar}
                </td>
                <td style={{ padding: '8px', fontSize: 12, color: '#475569' }}>
                  {row.primitive.hue} {row.primitive.step}
                </td>
                <td style={{ padding: '8px', fontFamily: 'ui-monospace, monospace', fontSize: 12 }}>
                  {row.hex}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
          State keys
        </h2>
        <ul style={{ margin: 0, paddingLeft: 20, color: '#475569', fontSize: 14 }}>
          <li>
            <strong>default</strong> — resting appearance (base layer before interaction).
          </li>
          <li>
            <strong>hover</strong>, <strong>press</strong>, <strong>focus</strong>,{' '}
            <strong>disabled</strong> — per your interaction model; disabled maps to
            gray tokens for low emphasis.
          </li>
        </ul>
      </section>
    </div>
  );
}

const meta: Meta<typeof SemanticColorsDoc> = {
  title: 'Design System/Tokens/Colors/Semantic/Semantic colors',
  component: SemanticColorsDoc,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Level 2 color tokens: `property.role.tone.state` mapped to primitives. Use `resolveSemanticColor`, `semanticColors`, or `--sparing-semantic-{property}-{role}-{tone}-{state}`.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SemanticColorsDoc>;

export const Documentation: Story = {
  render: () => <SemanticColorsDoc />,
};
