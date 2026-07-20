import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontFamilies, fontWeights, typeScale } from '../../tokens/typography/typography-tokens';
import { motionPatterns } from '../../tokens/motion/motion-tokens';
import { withMotionAccessibility } from './motion-decorator';

const pc = primitiveColors;
const enter = motionPatterns.enter;
const exit = motionPatterns.exit;
const layout = motionPatterns.layout;

const meta: Meta = {
  title: 'Design System/Tokens/Motion/03 Patterns',
  decorators: [withMotionAccessibility],
  parameters: {
    docs: { disable: true },
    chromatic: { pauseAnimationAtEnd: true },
  },
};

export default meta;

type Story = StoryObj;

function EnterExitCard() {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  const show = () => {
    setMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
  };

  const hide = () => {
    setShown(false);
  };

  const onTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.propertyName !== 'opacity') return;
      if (!shown) {
        setMounted(false);
      }
    },
    [shown],
  );

  const transition = shown
    ? `opacity ${enter.duration} ${enter.easing}, transform ${enter.duration} ${enter.easing}`
    : `opacity ${exit.duration} ${exit.easing}, transform ${exit.duration} ${exit.easing}`;

  return (
    <div>
      <div style={{ display: 'flex', gap: spacing[2], marginBottom: spacing[4] }}>
        <button
          type="button"
          onClick={show}
          style={btn(pc.green[600])}
        >
          Show (enter)
        </button>
        <button
          type="button"
          onClick={hide}
          disabled={!mounted}
          style={btn(pc.gray[600], !mounted)}
        >
          Hide (exit)
        </button>
      </div>
      {mounted && (
        <div
          className="motion-animated"
          onTransitionEnd={onTransitionEnd}
          style={{
            maxWidth: 320,
            padding: spacing[5],
            borderRadius: radii.md,
            background: pc.gray[50],
            border: `1px solid ${pc.gray[200]}`,
            boxShadow: '0 4px 24px rgba(15, 23, 42, 0.08)',
            opacity: shown ? 1 : 0,
            transform: shown ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.98)',
            transition,
            fontFamily: fontFamilies.sans,
            fontSize: typeScale.sm.fontSize,
            color: pc.gray[700],
          }}
        >
          Enter uses <code>motionPatterns.enter</code> — exit uses{' '}
          <code>motionPatterns.exit</code> (shorter duration + exit curve).
        </div>
      )}
    </div>
  );
}

function btn(bg: string, disabled?: boolean) {
  return {
    padding: `${spacing[2]} ${spacing[4]}`,
    fontWeight: fontWeights.semibold,
    fontSize: typeScale.sm.fontSize,
    border: 'none',
    borderRadius: radii.sm,
    background: bg,
    color: '#fff',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    fontFamily: fontFamilies.sans,
  } as const;
}

function LayoutResizeDemo() {
  const [wide, setWide] = useState(false);
  const t = `${layout.duration} ${layout.easing}`;

  return (
    <div>
      <button
        type="button"
        onClick={() => setWide((w) => !w)}
        style={btn(pc.blue[600])}
      >
        Toggle width (layout pattern)
      </button>
      <div
        className="motion-animated"
        style={{
          marginTop: spacing[4],
          height: 48,
          width: wide ? '100%' : '42%',
          maxWidth: 400,
          borderRadius: radii.sm,
          background: `linear-gradient(90deg, ${pc.cyan[400]}, ${pc.blue[500]})`,
          transition: `width ${t}`,
        }}
      />
      <p
        style={{
          marginTop: spacing[3],
          fontSize: typeScale.xs.fontSize,
          color: pc.gray[500],
          fontFamily: fontFamilies.sans,
        }}
      >
        <code>motionPatterns.layout</code> — {layout.duration} / standard easing
      </p>
    </div>
  );
}

export const Recipes: Story = {
  name: 'Enter, exit, and layout',
  render: () => (
    <div
      style={{
        fontFamily: fontFamilies.sans,
        color: pc.gray[900],
        maxWidth: 560,
      }}
    >
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 8px' }}>
        Composed patterns
      </h2>
      <p style={{ margin: '0 0 24px', color: pc.gray[600], lineHeight: 1.6 }}>
        Validate combined tokens — not just isolated durations or curves.
      </p>

      <h3
        style={{
          fontSize: typeScale.sm.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[500],
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          margin: '0 0 12px',
        }}
      >
        Enter / exit
      </h3>
      <EnterExitCard />

      <h3
        style={{
          fontSize: typeScale.sm.fontSize,
          fontWeight: fontWeights.semibold,
          color: pc.gray[500],
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          margin: `${spacing[8]} 0 12px`,
        }}
      >
        Layout
      </h3>
      <LayoutResizeDemo />
    </div>
  ),
};
