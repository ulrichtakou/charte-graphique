import React, { useCallback, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontFamilies, fontWeights, typeScale } from '../../tokens/typography/typography-tokens';
import {
  motionDuration,
  motionEasing,
  motionPatterns,
} from '../../tokens/motion/motion-tokens';
import { withMotionAccessibility } from './motion-decorator';

const pc = primitiveColors;
const enter = motionPatterns.enter;
const exit = motionPatterns.exit;

const meta: Meta = {
  title: 'YaoundéLogis/Tokens/Motion/04 Composants',
  decorators: [withMotionAccessibility],
  parameters: {
    docs: { disable: true },
    chromatic: { pauseAnimationAtEnd: true },
  },
};

export default meta;

type Story = StoryObj;

function usePresenceTransition() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  };

  const closeModal = () => setOpen(false);

  const onTransitionEnd = useCallback((e: React.TransitionEvent) => {
    if (e.propertyName !== 'opacity') return;
    if (!open) setMounted(false);
  }, [open]);

  const overlayT = open
    ? `opacity ${enter.duration} ${enter.easing}`
    : `opacity ${exit.duration} ${exit.easing}`;

  const panelT = open
    ? `opacity ${enter.duration} ${enter.easing}, transform ${enter.duration} ${enter.easing}`
    : `opacity ${exit.duration} ${exit.easing}, transform ${exit.duration} ${exit.easing}`;

  return { mounted, open, openModal, closeModal, onTransitionEnd, overlayT, panelT };
}

function ModalDemo() {
  const p = usePresenceTransition();

  return (
    <>
      <button type="button" onClick={p.openModal} style={primaryBtn(pc.blue[600])}>
        Open modal
      </button>
      {p.mounted ? (
        <>
          <div
            role="presentation"
            className="motion-animated"
            onTransitionEnd={p.onTransitionEnd}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(15, 23, 42, 0.45)',
              opacity: p.open ? 1 : 0,
              transition: p.overlayT,
            }}
            onClick={p.closeModal}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="motion-animated"
            onTransitionEnd={p.onTransitionEnd}
            style={{
              position: 'fixed',
              zIndex: 1001,
              left: '50%',
              top: '22%',
              transform: p.open
                ? 'translate(-50%, 0) scale(1)'
                : 'translate(-50%, 8px) scale(0.97)',
              opacity: p.open ? 1 : 0,
              transition: p.panelT,
              width: 'min(400px, 92vw)',
              padding: spacing[6],
              borderRadius: radii.lg,
              background: '#fff',
              boxShadow: '0 24px 48px rgba(15, 23, 42, 0.18)',
              fontFamily: fontFamilies.sans,
              pointerEvents: p.open ? 'auto' : 'none',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-title"
              style={{
                margin: '0 0 8px',
                fontSize: typeScale.lg.fontSize,
                fontWeight: fontWeights.bold,
                color: pc.gray[900],
              }}
            >
              Save changes?
            </h2>
            <p
              style={{
                margin: '0 0 20px',
                color: pc.gray[600],
                fontSize: typeScale.sm.fontSize,
              }}
            >
              Motion uses the same enter/exit patterns as tokens — check the overlay
              and panel together.
            </p>
            <button type="button" onClick={p.closeModal} style={primaryBtn(pc.gray[700])}>
              Close
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

function DrawerDemo() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  };

  const closeDrawer = () => setOpen(false);

  const onAsideTransitionEnd = useCallback((e: React.TransitionEvent) => {
    if (e.propertyName !== 'transform') return;
    if (!open) setMounted(false);
  }, [open]);

  const overlayT = open
    ? `opacity ${enter.duration} ${enter.easing}`
    : `opacity ${exit.duration} ${exit.easing}`;

  return (
    <div style={{ position: 'relative', minHeight: 200 }}>
      <button type="button" onClick={openDrawer} style={primaryBtn(pc.violet[600])}>
        Open drawer
      </button>
      {mounted ? (
        <>
          <div
            role="presentation"
            className="motion-animated"
            onClick={closeDrawer}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.25)',
              opacity: open ? 1 : 0,
              transition: overlayT,
              borderRadius: radii.md,
            }}
          />
          <aside
            className="motion-animated"
            onTransitionEnd={onAsideTransitionEnd}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: 'min(280px, 85%)',
              background: '#fff',
              borderRight: `1px solid ${pc.gray[200]}`,
              boxShadow: '8px 0 32px rgba(15, 23, 42, 0.1)',
              transform: open ? 'translateX(0)' : 'translateX(-100%)',
              transition: `transform ${open ? enter.duration : exit.duration} ${open ? enter.easing : exit.easing}`,
              padding: spacing[5],
              fontFamily: fontFamilies.sans,
              fontSize: typeScale.sm.fontSize,
              color: pc.gray[700],
            }}
          >
            <strong style={{ display: 'block', marginBottom: spacing[3] }}>Navigation</strong>
            Drawer slide uses enter/exit durations explicitly (spatial motion).
            <button
              type="button"
              onClick={closeDrawer}
              style={{ ...primaryBtn(pc.violet[600]), marginTop: spacing[5], width: '100%' }}
            >
              Close
            </button>
          </aside>
        </>
      ) : null}
    </div>
  );
}

function TooltipDemo() {
  const [on, setOn] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOn(true);
  };

  const hide = () => {
    leaveTimer.current = setTimeout(() => setOn(false), 80);
  };

  const tt = `${motionDuration.short} ${motionEasing.enter}`;

  return (
    <div style={{ position: 'relative', paddingTop: 56 }}>
      <button
        type="button"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        style={primaryBtn(pc.cyan[700])}
      >
        Hover for tooltip
      </button>
      <div
        role="tooltip"
        className="motion-animated"
        style={{
          position: 'absolute',
          left: 0,
          bottom: '100%',
          marginBottom: spacing[2],
          padding: `${spacing[2]} ${spacing[3]}`,
          borderRadius: radii.sm,
          background: pc.gray[900],
          color: '#fff',
          fontSize: typeScale.xs.fontSize,
          fontFamily: fontFamilies.sans,
          whiteSpace: 'nowrap',
          opacity: on ? 1 : 0,
          transform: on ? 'translateY(0)' : 'translateY(4px)',
          transition: `opacity ${tt}, transform ${tt}`,
          pointerEvents: 'none',
        }}
      >
        Short duration + enter easing
      </div>
    </div>
  );
}

function primaryBtn(bg: string): React.CSSProperties {
  return {
    padding: `${spacing[2]} ${spacing[4]}`,
    fontWeight: fontWeights.semibold,
    fontSize: typeScale.sm.fontSize,
    border: 'none',
    borderRadius: radii.sm,
    background: bg,
    color: '#fff',
    cursor: 'pointer',
    fontFamily: fontFamilies.sans,
  };
}

export const RealComponents: Story = {
  name: 'Modal, drawer, and tooltip',
  render: () => (
    <div
      style={{
        fontFamily: fontFamilies.sans,
        color: pc.gray[900],
        maxWidth: 480,
      }}
    >
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 8px' }}>
        Motion on real surfaces
      </h2>
      <p style={{ margin: '0 0 28px', color: pc.gray[600], lineHeight: 1.6 }}>
        Abstract tokens can feel fine in isolation but wrong on real components.
        These examples use the same pattern recipes as in “03 Patterns”.
      </p>

      <section style={{ marginBottom: spacing[10] }}>
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
          Modal (center + scrim)
        </h3>
        <ModalDemo />
      </section>

      <section style={{ marginBottom: spacing[10] }}>
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
          Drawer (edge slide)
        </h3>
        <DrawerDemo />
      </section>

      <section>
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
          Tooltip
        </h3>
        <TooltipDemo />
      </section>
    </div>
  ),
};
