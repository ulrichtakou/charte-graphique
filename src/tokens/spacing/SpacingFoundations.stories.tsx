import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  spacing,
  spacingCssVar,
  spacingKeysInOrder,
  spacingPxAt16Root,
} from './spacing-tokens';

const docShell: React.CSSProperties = {
  fontFamily: 'var(--yaoundelogis-font-family, Poppins, sans-serif)',
  color: '#0F3D2E',
  maxWidth: 720,
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '#5C6B63',
  marginBottom: 8,
};

const meta: Meta = {
  title: 'YaoundéLogis/Tokens/Espacement',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Spacing scale for margin, padding, gap, and layout — rem-based 4px grid at 16px root.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Scale: Story = {
  name: '1. Scale',
  render: () => {
    const keys = spacingKeysInOrder();
    return (
      <div style={docShell}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
          Spacing scale
        </h2>
        <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
          Token → value and CSS variable. Bar width matches the spacing value
          (max width capped for large steps).
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '10px 8px' }}>Token</th>
              <th style={{ padding: '10px 8px' }}>Value</th>
              <th style={{ padding: '10px 8px' }}>~px @16</th>
              <th style={{ padding: '10px 8px' }}>Variable</th>
              <th style={{ padding: '10px 8px', width: '45%' }}>Preview</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key) => {
              const value = spacing[key];
              const px = spacingPxAt16Root[key];
              const varName = spacingCssVar(key);
              const displayKey = String(key);
              const isZero = key === 0 || value === '0';
              return (
                <tr key={displayKey} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td
                    style={{
                      padding: '10px 8px',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: 12,
                      color: '#475569',
                    }}
                  >
                    {displayKey}
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
                  <td style={{ padding: '10px 8px', color: '#64748b' }}>
                    {px !== undefined ? px : '—'}
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: 11,
                      color: '#94a3b8',
                      wordBreak: 'break-all',
                    }}
                  >
                    {varName}
                  </td>
                  <td style={{ padding: '10px 8px', verticalAlign: 'middle' }}>
                    <div
                      style={{
                        maxWidth: 280,
                        overflow: 'hidden',
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        title={`${value}`}
                        style={{
                          width: isZero ? 2 : value,
                          height: 16,
                          background: '#3b82f6',
                          borderRadius: 4,
                          flexShrink: 0,
                        }}
                      />
                    </div>
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

export const Usage: Story = {
  name: '2. Usage',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Usage
      </h2>
      <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
        Import <code>spacing</code> for inline styles, or inject{' '}
        <code>spacingRootStyleObject()</code> on <code>:root</code> and use{' '}
        <code>spacingCssVar(4)</code> in CSS.
      </p>
      <div style={{ marginBottom: 24 }}>
        <div style={labelStyle}>padding via token (React)</div>
        <div
          style={{
            display: 'inline-block',
            background: '#e0f2fe',
            color: '#0c4a6e',
            padding: spacing[4],
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          padding: spacing[4] (1rem)
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={labelStyle}>gap via token (flex)</div>
        <div
          style={{
            display: 'flex',
            gap: spacing[3],
            flexWrap: 'wrap',
          }}
        >
          {(['A', 'B', 'C'] as const).map((x) => (
            <div
              key={x}
              style={{
                width: 48,
                height: 48,
                background: '#f1f5f9',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
              }}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={labelStyle}>CSS variable name</div>
        <code
          style={{
            display: 'block',
            fontSize: 12,
            color: '#475569',
            fontFamily: 'ui-monospace, monospace',
            padding: spacing[3],
            background: '#f8fafc',
            borderRadius: 8,
          }}
        >
          {`gap: var(${spacingCssVar(4)});`}
        </code>
      </div>
    </div>
  ),
};
