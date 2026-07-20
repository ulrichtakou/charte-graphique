import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Toast, type ToastSemantic, type ToastVariant } from './Toast';

const SEMANTICS = ['neutral', 'info', 'success', 'warning', 'danger'] as const satisfies readonly ToastSemantic[];
const VARIANTS = ['soft', 'outline', 'solid'] as const satisfies readonly ToastVariant[];

const meta: Meta<typeof Toast> = {
  title: 'Shared/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Toast is non-blocking and ephemeral feedback. Unlike alert, toast is usually auto-dismissed, stacked and positioned around viewport corners.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    semantic: { control: 'inline-radio', options: SEMANTICS },
    variant: { control: 'inline-radio', options: VARIANTS },
    showIcon: { control: 'boolean' },
    ctaLabel: { control: 'text' },
    linkLabel: { control: 'text' },
    autoDismissMs: { control: 'number' },
    pauseOnHover: { control: 'boolean' },
    onCtaClick: { action: 'cta clicked' },
    onLinkClick: { action: 'link clicked' },
    onClose: { action: 'close clicked' },
  },
  args: {
    title: 'Saved',
    message: 'Your settings were updated.',
    semantic: 'success',
    variant: 'soft',
    showIcon: true,
    ctaLabel: 'Undo',
    linkLabel: 'Details',
    autoDismissMs: 4000,
    pauseOnHover: true,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Playground: Story = {};

export const ObjectiveAndUseCases: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3] }}>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.secondary }}>
        Toast objective: quick, non-blocking feedback for asynchronous outcomes (saved, synced,
        failed, copied, queued).
      </Box>
      <Toast
        title="Profile updated"
        message="Changes are available across your workspace."
        semantic="success"
        ctaLabel="Undo"
        onClose={() => undefined}
      />
    </Box>
  ),
};

export const VariantsAndSemantics: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      {VARIANTS.map((variant) => (
        <Box key={variant} sx={{ display: 'grid', gap: spacing[2] }}>
          <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.primary, textTransform: 'capitalize' }}>
            {variant}
          </Box>
          <Box sx={{ display: 'grid', gap: spacing[2] }}>
            {SEMANTICS.map((semantic) => (
              <Toast
                key={`${variant}-${semantic}`}
                title={`${semantic} toast`}
                message="Short asynchronous feedback."
                semantic={semantic}
                variant={variant}
                onClose={() => undefined}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const StructureAndActions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3] }}>
      <Toast
        title="With CTA + link + close"
        message="Toast supports optional actions and optional close."
        semantic="info"
        ctaLabel="Retry"
        linkLabel="Details"
        onClose={() => undefined}
      />
      <Toast
        title="Without actions"
        message="Minimal toast for lightweight confirmation."
        semantic="neutral"
        variant="outline"
        onClose={() => undefined}
      />
      <Toast
        title="No icon"
        message="Icon can be omitted if context already communicates intent."
        showIcon={false}
        semantic="success"
        onClose={() => undefined}
      />
    </Box>
  ),
};

function AutoDismissDemo() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 3500);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <Box sx={{ display: 'grid', gap: spacing[2] }}>
      <Box sx={{ fontSize: typeScale.xs.fontSize, color: textStateColors.secondary }}>
        Auto-dismiss after 3.5s. Re-open with the button.
      </Box>
      <Box
        component="button"
        type="button"
        onClick={() => setOpen(true)}
        style={{ width: 100, height: 32, cursor: 'pointer' }}
      >
        Trigger
      </Box>
      {open ? (
        <Toast
          title="Auto-dismiss"
          message="This toast closes automatically."
          semantic="info"
          autoDismissMs={3500}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </Box>
  );
}

export const BehaviorAutoDismissAndPause: Story = {
  parameters: { controls: { disable: true } },
  render: () => <AutoDismissDemo />,
};

function StackDemo({ position }: { position: 'top-right' | 'bottom-left' | 'center' }) {
  const toasts = useMemo(
    () => [
      { id: 1, title: 'Saved', semantic: 'success' as const, msg: 'Configuration updated.' },
      { id: 2, title: 'Sync delayed', semantic: 'warning' as const, msg: 'Background retry in progress.' },
      { id: 3, title: 'Connection lost', semantic: 'danger' as const, msg: 'Trying to reconnect…' },
    ],
    [],
  );

  const wrapperSx =
    position === 'top-right'
      ? { justifyContent: 'end', alignItems: 'start' }
      : position === 'bottom-left'
        ? { justifyContent: 'start', alignItems: 'end' }
        : { justifyContent: 'center', alignItems: 'center' };

  return (
    <Box
      sx={{
        minHeight: 340,
        border: '1px dashed #d1d5db',
        p: spacing[3],
        display: 'grid',
        ...wrapperSx,
      }}
    >
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            title={t.title}
            message={t.msg}
            semantic={t.semantic}
            onClose={() => undefined}
          />
        ))}
      </Box>
    </Box>
  );
}

export const PositioningAndStack: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      <Box sx={{ fontSize: typeScale.xs.fontSize, color: textStateColors.secondary }}>
        Typical positioning for toast containers.
      </Box>
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        <Box sx={{ fontSize: typeScale.sm.fontSize }}>Top-right (standard)</Box>
        <StackDemo position="top-right" />
      </Box>
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        <Box sx={{ fontSize: typeScale.sm.fontSize }}>Bottom-left</Box>
        <StackDemo position="bottom-left" />
      </Box>
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        <Box sx={{ fontSize: typeScale.sm.fontSize }}>Center</Box>
        <StackDemo position="center" />
      </Box>
    </Box>
  ),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 860 }}>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.secondary }}>
        Toast should be announced through live regions (`aria-live`). Do not dismiss too quickly.
        If toast has action, keep it visible long enough and ensure controls are keyboard reachable.
      </Box>
      <Toast
        title="A11y example"
        message="Action remains available while toast is visible."
        semantic="info"
        ctaLabel="Open"
        onClose={() => undefined}
      />
    </Box>
  ),
};

export const ToastVsAlertGuidance: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[2], maxWidth: 920 }}>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.primary }}>Toast vs Alert</Box>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.secondary }}>
        Toast: ephemeral, non-blocking, often auto-dismiss and stack. Alert: persistent, in flow or
        banner, manual close, stronger contextual permanence.
      </Box>
    </Box>
  ),
};
