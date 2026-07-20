import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Alert, type AlertSemantic, type AlertVariant } from './Alert';

const SEMANTICS = ['neutral', 'info', 'success', 'warning', 'danger'] as const satisfies readonly AlertSemantic[];
const VARIANTS = ['soft', 'outline', 'solid'] as const satisfies readonly AlertVariant[];

const meta: Meta<typeof Alert> = {
  title: 'Shared/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Alert is persistent and contextual feedback. Unlike toast, alert is usually inline or banner-based and always includes manual close action.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    semantic: { control: 'inline-radio', options: SEMANTICS },
    variant: { control: 'inline-radio', options: VARIANTS },
    layout: { control: 'inline-radio', options: ['single-line', 'multiline'] },
    showIcon: { control: 'boolean' },
    ctaLabel: { control: 'text' },
    linkLabel: { control: 'text' },
    onCtaClick: { action: 'cta clicked' },
    onLinkClick: { action: 'link clicked' },
    onClose: { action: 'close clicked' },
  },
  args: {
    title: 'Connection issue',
    message: 'Your last action was not saved. Please retry.',
    semantic: 'warning',
    variant: 'soft',
    layout: 'multiline',
    showIcon: true,
    ctaLabel: 'Retry',
    linkLabel: 'Learn more',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};

export const ObjectiveAndUseCases: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 900 }}>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.secondary }}>
        Alert objective: persistent, contextual communication in-page. Typical cases: validation
        summary, environment warning, permissions issue, billing notice, migration notice.
      </Box>
      <Alert
        title="Billing warning"
        message="Your payment method expires soon. Update it to avoid service interruption."
        semantic="warning"
        variant="soft"
        ctaLabel="Update method"
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
              <Alert
                key={`${variant}-${semantic}`}
                title={`${semantic} alert`}
                message="Message for contextual feedback."
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
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 900 }}>
      <Alert
        title="With CTA + link + close"
        message="Manual close is required for alert."
        semantic="info"
        ctaLabel="Retry"
        linkLabel="Details"
        onClose={() => undefined}
      />
      <Alert
        title="With close only"
        message="Use this for passive but persistent information."
        semantic="neutral"
        variant="outline"
        onClose={() => undefined}
      />
    </Box>
  ),
};

export const LayoutVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3] }}>
      <Alert
        title="Single line with actions"
        message="Deployment paused."
        layout="single-line"
        semantic="warning"
        ctaLabel="Retry"
        linkLabel="Logs"
        onClose={() => undefined}
      />
      <Alert
        title="Multiline with icon"
        message="This alert uses multiline layout. It supports longer contextual explanation while staying persistent."
        layout="multiline"
        semantic="danger"
        onClose={() => undefined}
      />
      <Alert
        title="Multiline without icon"
        message="Icons are optional, content still communicates meaning."
        showIcon={false}
        semantic="success"
        onClose={() => undefined}
      />
    </Box>
  ),
};

export const PositioningExamples: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4], maxWidth: 980 }}>
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.primary }}>Inline in page flow</Box>
        <Box sx={{ border: '1px dashed #d1d5db', p: spacing[3], display: 'grid', gap: spacing[3] }}>
          <Box sx={{ fontSize: typeScale.sm.fontSize }}>Profile settings</Box>
          <Alert
            title="Unsaved changes"
            message="Save or discard before leaving this section."
            semantic="warning"
            onClose={() => undefined}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.primary }}>Top-page banner</Box>
        <Alert
          title="Scheduled maintenance"
          message="The platform will be read-only from 02:00 to 02:30 UTC."
          semantic="info"
          variant="outline"
          onClose={() => undefined}
        />
      </Box>
    </Box>
  ),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 860 }}>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.secondary }}>
        Non-urgent alerts should use polite announcements (`role="status"`). Urgent alerts can use
        `role="alert"` with assertive live region. Keep close control keyboard-reachable and keep
        enough time for users to act when actions are present.
      </Box>
      <Alert
        title="A11y example (urgent)"
        message="This variant simulates critical content and should be announced immediately."
        semantic="danger"
        ctaLabel="Resolve"
        onClose={() => undefined}
      />
    </Box>
  ),
};
