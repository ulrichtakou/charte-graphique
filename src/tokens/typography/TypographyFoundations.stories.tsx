import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  bodyTextPresets,
  fontFamilies,
  fontStyles,
  fontWeights,
  headingPresets,
  letterSpacings,
  lineHeights,
  monoFontStackFaceSpecimens,
  resolveBodyTextStyle,
  resolveHeadingStyle,
  sansFontStackFaceSpecimens,
  textStateColors,
  typeScale,
  type BodyTextPresetKey,
  type FontStyleToken,
  type FontWeightToken,
  type HeadingPresetKey,
  type LetterSpacingToken,
  type LineHeightToken,
  type TypeScaleToken,
} from './typography-tokens';

const docShell: React.CSSProperties = {
  fontFamily: fontFamilies.sans,
  color: '#0f172a',
  maxWidth: 720,
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '#64748b',
  marginBottom: 8,
};

const meta: Meta = {
  title: 'Design System/Tokens/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Typography foundations: families, scale, headings, body, weights, italic/oblique, rhythm, code, states, alignment.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const specimenLine =
  'The quick brown fox jumps over the lazy dog. 0123456789 Sparing UI.';

export const FontFamilies: Story = {
  name: '1. Font families',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Font families
      </h2>
      <p style={{ margin: '0 0 28px', color: '#475569', lineHeight: 1.6 }}>
        UI uses <strong>sans</strong> for interface copy; <strong>mono</strong>{' '}
        for code and technical strings. Below, each face listed in the token is
        rendered in isolation (single face + generic fallback) so you can compare
        DM Sans, system fonts, and mono stack members.
      </p>
      <div style={{ marginBottom: 32 }}>
        <div style={labelStyle}>Sans — full stack (fontFamilies.sans)</div>
        <p
          style={{
            fontFamily: fontFamilies.sans,
            fontSize: 28,
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {specimenLine}
        </p>
        <code
          style={{
            display: 'block',
            marginTop: 8,
            fontSize: 12,
            color: '#64748b',
            fontFamily: fontFamilies.mono,
          }}
        >
          {fontFamilies.sans}
        </code>
      </div>
      <div style={{ marginBottom: 40 }}>
        <div style={labelStyle}>Mono — full stack (fontFamilies.mono)</div>
        <p
          style={{
            fontFamily: fontFamilies.mono,
            fontSize: 18,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          const theme = useTheme(); // 0x1f4a9
        </p>
        <code
          style={{
            display: 'block',
            marginTop: 8,
            fontSize: 12,
            color: '#64748b',
            fontFamily: fontFamilies.mono,
            wordBreak: 'break-all',
          }}
        >
          {fontFamilies.mono}
        </code>
      </div>

      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          margin: '0 0 12px',
          color: '#0f172a',
        }}
      >
        Sans stack — each face alone
      </h3>
      <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
        Same phrase; only the named face from the stack is requested (browser
        substitutes if the font is missing).
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          marginBottom: 40,
        }}
      >
        {sansFontStackFaceSpecimens.map(({ label, fontFamily, face }) => (
          <div key={face}>
            <div style={{ ...labelStyle, marginBottom: 4 }}>{label}</div>
            <p
              style={{
                fontFamily,
                fontSize: 22,
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {specimenLine}
            </p>
            <code
              style={{
                display: 'block',
                marginTop: 6,
                fontSize: 11,
                color: '#94a3b8',
                fontFamily: fontFamilies.mono,
                wordBreak: 'break-all',
              }}
            >
              font-family: {fontFamily};
            </code>
          </div>
        ))}
      </div>

      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          margin: '0 0 12px',
          color: '#0f172a',
        }}
      >
        Mono stack — each face alone
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {monoFontStackFaceSpecimens.map(({ label, fontFamily, face }) => (
          <div key={face}>
            <div style={{ ...labelStyle, marginBottom: 4 }}>{label}</div>
            <p
              style={{
                fontFamily,
                fontSize: 16,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {`const x = () => { 0x1f4a9 }; // mono specimen`}
            </p>
            <code
              style={{
                display: 'block',
                marginTop: 6,
                fontSize: 11,
                color: '#94a3b8',
                fontFamily: fontFamilies.mono,
                wordBreak: 'break-all',
              }}
            >
              font-family: {fontFamily};
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const TypeScale: Story = {
  name: '2. Type scale',
  render: () => {
    const keys = Object.keys(typeScale) as TypeScaleToken[];
    return (
      <div style={docShell}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
          Type scale
        </h2>
        <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
          Token → <code>rem</code> size and approximate px at 16px root.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '10px 8px' }}>Token</th>
              <th style={{ padding: '10px 8px' }}>rem</th>
              <th style={{ padding: '10px 8px' }}>~px</th>
              <th style={{ padding: '10px 8px' }}>Sample</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((key) => (
              <tr key={key} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td
                  style={{
                    padding: '12px 8px',
                    fontFamily: fontFamilies.mono,
                    fontSize: 12,
                    color: '#475569',
                  }}
                >
                  {key}
                </td>
                <td style={{ padding: '12px 8px', fontFamily: fontFamilies.mono }}>
                  {typeScale[key].fontSize}
                </td>
                <td style={{ padding: '12px 8px' }}>
                  {typeScale[key].pxEquivalent}
                </td>
                <td style={{ padding: '12px 8px' }}>
                  <span style={{ fontSize: typeScale[key].fontSize }}>
                    Ag sample
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

export const Headings: Story = {
  name: '3. Headings',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Headings
      </h2>
      <p style={{ margin: '0 0 24px', color: '#475569', lineHeight: 1.6 }}>
        H1–H6 mapped to <code>headingPresets</code> (scale, weight, leading,
        tracking).
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {(Object.keys(headingPresets) as HeadingPresetKey[]).map((key) => {
          const lvl = headingPresets[key].level;
          return (
            <div key={key}>
              <div style={{ ...labelStyle, marginBottom: 4 }}>{key}</div>
              {React.createElement(
                `h${lvl}` as 'h1',
                { style: resolveHeadingStyle(key) },
                `Heading level ${lvl} specimen`,
              )}
            </div>
          );
        })}
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  name: '4. Body text',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Body text
      </h2>
      <p style={{ margin: '0 0 24px', color: '#475569', lineHeight: 1.6 }}>
        Large, base, small, xsmall via <code>bodyTextPresets</code>.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {(Object.keys(bodyTextPresets) as BodyTextPresetKey[]).map((key) => (
          <div key={key}>
            <div style={labelStyle}>{key}</div>
            <p style={resolveBodyTextStyle(key)}>
              Croki Digital builds clear interfaces. This paragraph uses the{' '}
              <strong>{key}</strong> preset for long-form reading and UI density.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  name: '5. Font weights',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Font weights
      </h2>
      <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
        <code>fontWeights</code>: regular (400) through bold (700).
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {(Object.keys(fontWeights) as FontWeightToken[]).map((key) => (
          <div key={key}>
            <div style={{ ...labelStyle, marginBottom: 4 }}>
              {key} — {fontWeights[key]}
            </div>
            <p
              style={{
                fontFamily: fontFamilies.sans,
                fontSize: typeScale.lg.fontSize,
                fontWeight: fontWeights[key],
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontStyles: Story = {
  name: '5b. Italic and oblique',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Italic and oblique
      </h2>
      <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
        <code>fontStyles</code>: <strong>italic</strong> uses the typeface’s
        true italic glyphs; <strong>oblique</strong> slants the upright shapes.
        Use <code>resolveBodyTextStyle</code> / <code>resolveHeadingStyle</code>{' '}
        with <code>{'{ fontStyle: \'italic\' }'}</code>, or CSS variables{' '}
        <code>--sparing-typography-style-*</code>.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {(Object.keys(fontStyles) as FontStyleToken[]).map((key) => (
          <div key={key}>
            <div style={{ ...labelStyle, marginBottom: 4 }}>
              {key} — fontStyles.{key} ({fontStyles[key]})
            </div>
            <p
              style={{
                fontFamily: fontFamilies.sans,
                fontSize: typeScale.lg.fontSize,
                fontWeight: fontWeights.regular,
                fontStyle: fontStyles[key],
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Sparing builds clear, purposeful interfaces — the quick brown fox
              jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28 }}>
        <div style={labelStyle}>Body preset + italic</div>
        <p style={resolveBodyTextStyle('base', { fontStyle: 'italic' })}>
          Base body in italic for quotes, captions, or light emphasis.
        </p>
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={labelStyle}>H4 heading + oblique</div>
        {React.createElement(
          'h4',
          { style: resolveHeadingStyle('h4', { fontStyle: 'oblique' }) },
          'Slanted subheading or label',
        )}
      </div>
    </div>
  ),
};

export const LineHeight: Story = {
  name: '6. Line height',
  render: () => (
    <div style={{ ...docShell, maxWidth: 480 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Line height
      </h2>
      <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
        <code>lineHeights</code>: tight, normal, relaxed (unitless multipliers).
      </p>
      {(Object.keys(lineHeights) as LineHeightToken[]).map((key) => (
        <div key={key} style={{ marginBottom: 24 }}>
          <div style={labelStyle}>
            {key} — {lineHeights[key]}
          </div>
          <p
            style={{
              fontFamily: fontFamilies.sans,
              fontSize: typeScale.base.fontSize,
              lineHeight: lineHeights[key],
              margin: 0,
              color: '#334155',
            }}
          >
            Line height controls vertical rhythm. This block uses the{' '}
            <strong>{key}</strong> token so you can compare density across
            paragraphs in product copy and forms.
          </p>
        </div>
      ))}
    </div>
  ),
};

export const LetterSpacing: Story = {
  name: '7. Letter spacing',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Letter spacing
      </h2>
      <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
        <code>letterSpacings</code>: tight, normal, wide.
      </p>
      {(Object.keys(letterSpacings) as LetterSpacingToken[]).map((key) => (
        <div key={key} style={{ marginBottom: 20 }}>
          <div style={labelStyle}>
            {key} — {letterSpacings[key] || '0'}
          </div>
          <p
            style={{
              fontFamily: fontFamilies.sans,
              fontSize: typeScale['2xl'].fontSize,
              fontWeight: 600,
              letterSpacing: letterSpacings[key],
              margin: 0,
            }}
          >
            SPACING SPECIMEN
          </p>
        </div>
      ))}
    </div>
  ),
};

export const MonospaceCode: Story = {
  name: '8. Monospace / code',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Monospace / code
      </h2>
      <p style={{ margin: '0 0 16px', color: '#475569', lineHeight: 1.6 }}>
        Inline: use a <code style={{ fontFamily: fontFamilies.mono }}>code</code>{' '}
        element with <code>fontFamilies.mono</code>. Block: padded container with
        the same family.
      </p>
      <p style={{ fontSize: typeScale.base.fontSize, lineHeight: 1.6, margin: '0 0 20px' }}>
        Run <code style={{ fontFamily: fontFamilies.mono, fontSize: '0.9em', background: '#f1f5f9', padding: '2px 6px', borderRadius: 4 }}>nx run ui-docs:storybook</code>{' '}
        to preview tokens.
      </p>
      <div style={labelStyle}>Block</div>
      <pre
        style={{
          fontFamily: fontFamilies.mono,
          fontSize: typeScale.sm.fontSize,
          lineHeight: 1.55,
          margin: 0,
          padding: 16,
          background: '#0f172a',
          color: '#e2e8f0',
          borderRadius: 8,
          overflow: 'auto',
        }}
      >
        {`import { fontFamilies, typeScale } from '@croki-digital/shared-ui';

export function Example() {
  return <p style={{ fontFamily: fontFamilies.sans }}>Hello</p>;
}`}
      </pre>
    </div>
  ),
};

export const TextStates: Story = {
  name: '9. Text states',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Text states
      </h2>
      <p style={{ margin: '0 0 20px', color: '#475569', lineHeight: 1.6 }}>
        <code>textStateColors</code> maps UI meaning to primitive palette (see
        color tokens).
      </p>
      <div
        style={{
          fontSize: typeScale.base.fontSize,
          lineHeight: 1.7,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <p style={{ margin: 0, color: textStateColors.primary }}>
          Primary — main content
        </p>
        <p style={{ margin: 0, color: textStateColors.secondary }}>
          Secondary — supporting copy
        </p>
        <p style={{ margin: 0 }}>
          <a
            href="https://example.com"
            onClick={(e) => e.preventDefault()}
            style={{ color: textStateColors.link, fontWeight: 600 }}
          >
            Link — default
          </a>
          {' · '}
          <span style={{ color: textStateColors.linkHover, fontWeight: 600 }}>
            Link hover color
          </span>
        </p>
        <p style={{ margin: 0, color: textStateColors.error }}>
          Error — validation and destructive context
        </p>
        <p style={{ margin: 0, color: textStateColors.warning }}>
          Warning — caution and non-blocking alerts
        </p>
        <p style={{ margin: 0, color: textStateColors.success }}>
          Success — confirmation and positive feedback
        </p>
        <p style={{ margin: 0, color: textStateColors.info }}>
          Info — neutral notices and contextual tips
        </p>
        <p style={{ margin: 0, color: textStateColors.disabled }}>
          Disabled — inactive controls
        </p>
      </div>
    </div>
  ),
};

export const Alignments: Story = {
  name: '10. Alignments',
  render: () => (
    <div style={docShell}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
        Alignments
      </h2>
      <p style={{ margin: '0 0 24px', color: '#475569', lineHeight: 1.6 }}>
        Use <code>textAlign</code> on the container; tokens stay the same.
      </p>
      {(
        [
          { label: 'Left', align: 'left' as const },
          { label: 'Center', align: 'center' as const },
          { label: 'Right', align: 'right' as const },
        ] as const
      ).map(({ label, align }) => (
        <div
          key={label}
          style={{
            marginBottom: 24,
            padding: 16,
            background: '#f1f5f9',
            borderRadius: 8,
            textAlign: align,
          }}
        >
          <div style={{ ...labelStyle, textAlign: 'left' }}>{label}</div>
          <p
            style={{
              ...resolveBodyTextStyle('base'),
              color: '#334155',
              display: 'inline-block',
              maxWidth: 320,
              textAlign: align,
            }}
          >
            Alignment specimen. Short lines show how rag changes for titles and
            callouts.
          </p>
        </div>
      ))}
    </div>
  ),
};
