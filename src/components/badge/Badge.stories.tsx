import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Bell, Check, CircleAlert, Clock3, Tag, type LucideIcon } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import {
  Badge,
  badgeIconSize,
  type BadgeProps,
  type BadgeSemantic,
  type BadgeSize,
  type BadgeState,
  type BadgeVariant,
} from './Badge';

const pc = primitiveColors;

const VARIANTS = ['solid', 'soft', 'outline'] as const satisfies readonly BadgeVariant[];
const SEMANTICS = ['neutral', 'info', 'success', 'warning', 'danger'] as const satisfies readonly BadgeSemantic[];
const SIZES = ['sm', 'md', 'lg'] as const satisfies readonly BadgeSize[];
const STATES = ['default', 'hover', 'press', 'disabled'] as const satisfies readonly BadgeState[];

const semanticLabel: Record<BadgeSemantic, string> = {
  neutral: 'Neutral',
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
};

const stateLabel: Record<BadgeState, string> = {
  default: 'Default',
  hover: 'Hover',
  press: 'Press',
  disabled: 'Disabled',
};

const iconBySemantic: Record<BadgeSemantic, LucideIcon> = {
  neutral: Tag,
  info: Bell,
  success: Check,
  warning: Clock3,
  danger: CircleAlert,
};

function StorySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box component="section" sx={{ display: 'grid', gap: spacing[2] }}>
      <Box
        component="h4"
        sx={{
          m: 0,
          fontSize: typeScale.sm.fontSize,
          color: textStateColors.primary,
        }}
      >
        {title}
      </Box>
      {children}
    </Box>
  );
}

function BadgeGrid({
  buildProps,
}: {
  buildProps: (semantic: BadgeSemantic, variant: BadgeVariant) => BadgeProps;
}) {
  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Box
        sx={{
          minWidth: 700,
          display: 'grid',
          gridTemplateColumns: '120px repeat(3, minmax(0, 1fr))',
          gap: spacing[2],
          alignItems: 'center',
        }}
      >
        <Box />
        {VARIANTS.map((variant) => (
          <Box
            key={variant}
            sx={{
              fontSize: typeScale.xs.fontSize,
              fontWeight: 600,
              color: textStateColors.secondary,
              textTransform: 'capitalize',
            }}
          >
            {variant}
          </Box>
        ))}
        {SEMANTICS.map((semantic) => (
          <React.Fragment key={semantic}>
            <Box
              sx={{
                fontSize: typeScale.xs.fontSize,
                fontWeight: 600,
                color: textStateColors.secondary,
              }}
            >
              {semanticLabel[semantic]}
            </Box>
            {VARIANTS.map((variant) => (
              <Box key={`${semantic}-${variant}`}>
                <Badge {...buildProps(semantic, variant)} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

const meta: Meta<typeof Badge> = {
  title: 'Shared/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Token-driven badge used for compact status, metadata and classification. This component supports semantic meaning, visual variants, sizing, icon presence and visual states while preserving consistency across products.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    semantic: {
      control: 'inline-radio',
      options: SEMANTICS,
    },
    variant: {
      control: 'inline-radio',
      options: VARIANTS,
    },
    size: {
      control: 'inline-radio',
      options: SIZES,
    },
    state: {
      control: 'inline-radio',
      options: STATES,
    },
    startIcon: { control: false },
    endIcon: { control: false },
    maxLabelWidth: { control: 'text' },
  },
  args: {
    label: 'In review',
    semantic: 'info',
    variant: 'soft',
    size: 'md',
    state: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};

export const VariantAndSemanticMatrix: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <BadgeGrid
      buildProps={(semantic, variant) => ({
        label: 'Badge',
        semantic,
        variant,
        size: 'md',
        state: 'default',
      })}
    />
  ),
};

export const SizesAndSpacing: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      {SIZES.map((size) => (
        <StorySection key={size} title={`Size: ${size.toUpperCase()}`}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: spacing[2] }}>
            {VARIANTS.map((variant) => (
              <Badge
                key={`${size}-${variant}`}
                size={size}
                variant={variant}
                semantic="success"
                label={`${variant} ${size}`}
              />
            ))}
          </Box>
        </StorySection>
      ))}
      <Box
        sx={{
          fontSize: typeScale.xs.fontSize,
          color: textStateColors.secondary,
        }}
      >
        Horizontal spacing uses `spacing` tokens and keeps enough breathing room for optional icons.
      </Box>
    </Box>
  ),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      {STATES.map((state) => (
        <StorySection key={state} title={stateLabel[state]}>
          <BadgeGrid
            buildProps={(semantic, variant) => ({
              label: stateLabel[state],
              semantic,
              variant,
              state,
              size: 'md',
            })}
          />
        </StorySection>
      ))}
    </Box>
  ),
};

export const WithAndWithoutIcons: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      <StorySection title="With leading icons (all variants)">
        <BadgeGrid
          buildProps={(semantic, variant) => {
            const Icon = iconBySemantic[semantic];
            return {
              label: semanticLabel[semantic],
              semantic,
              variant,
              startIcon: <Icon size={badgeIconSize('md')} aria-hidden strokeWidth={2.2} />,
            };
          }}
        />
      </StorySection>
      <StorySection title="Without icons (all variants)">
        <BadgeGrid
          buildProps={(semantic, variant) => ({
            label: semanticLabel[semantic],
            semantic,
            variant,
          })}
        />
      </StorySection>
    </Box>
  ),
};

export const Typologies: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      <StorySection title="Status typology">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Badge key={`status-${variant}`} variant={variant} semantic="success" label="Active" />
          ))}
        </Box>
      </StorySection>
      <StorySection title="Category typology">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Badge key={`category-${variant}`} variant={variant} semantic="info" label="Marketing" />
          ))}
        </Box>
      </StorySection>
      <StorySection title="Counter typology">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Badge key={`counter-${variant}`} variant={variant} semantic="neutral" label="12" />
          ))}
        </Box>
      </StorySection>
    </Box>
  ),
};

export const TypographyAndLongContent: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      <StorySection title="Label rhythm and truncation">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
          {VARIANTS.map((variant) => (
            <Badge
              key={variant}
              variant={variant}
              semantic="neutral"
              label="This is a long badge label that is truncated"
              maxLabelWidth={180}
            />
          ))}
        </Box>
      </StorySection>
      <Box sx={{ fontSize: typeScale.xs.fontSize, color: textStateColors.secondary }}>
        Typography is token-based (`typeScale` + `fontWeights`) and remains legible at compact
        densities.
      </Box>
    </Box>
  ),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gap: spacing[3],
        maxWidth: 760,
        fontSize: typeScale.sm.fontSize,
        color: textStateColors.secondary,
        lineHeight: 1.6,
        '& code': {
          fontSize: typeScale.xs.fontSize,
          backgroundColor: pc.gray[100],
          borderRadius: 4,
          padding: '2px 6px',
        },
      }}
    >
      <p style={{ margin: 0 }}>
        Badges are usually non-interactive, short, and textual. Keep semantic meaning in text,
        not only in color. If a badge is icon-only in product code, provide a descriptive{' '}
        <code>aria-label</code>.
      </p>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
        {SEMANTICS.map((semantic) => (
          <Badge
            key={semantic}
            semantic={semantic}
            variant="soft"
            label={`${semanticLabel[semantic]} status`}
          />
        ))}
      </Box>
      <p style={{ margin: 0 }}>
        For interactive chips (filters, removable tags), prefer dedicated interactive components so
        keyboard behavior, focus rings, and action semantics stay explicit.
      </p>
    </Box>
  ),
};

export const UsageContextAndRules: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 840 }}>
      <StorySection title="Common usage contexts">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
          <Badge semantic="info" variant="soft" label="Plan: Pro" />
          <Badge semantic="success" variant="soft" label="Published" />
          <Badge semantic="warning" variant="outline" label="Requires action" />
          <Badge semantic="danger" variant="solid" label="Blocked" />
        </Box>
      </StorySection>
      <StorySection title="When to use badges">
        <Box component="ul" sx={{ m: 0, pl: spacing[5], color: textStateColors.secondary }}>
          <li>Short status labels in tables, cards, and detail headers.</li>
          <li>Compact metadata such as plan tiers, categories, and lifecycle state.</li>
          <li>At-a-glance semantic signaling when space is limited.</li>
        </Box>
      </StorySection>
      <StorySection title="When not to use badges">
        <Box component="ul" sx={{ m: 0, pl: spacing[5], color: textStateColors.secondary }}>
          <li>Long explanatory text (use helper text or body copy instead).</li>
          <li>Primary call-to-action interactions (use buttons instead).</li>
          <li>As the only communication channel for important errors.</li>
        </Box>
      </StorySection>
    </Box>
  ),
};

export const ScalabilityPattern: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 860 }}>
      <p style={{ margin: 0, color: textStateColors.secondary }}>
        The API is designed to scale by adding new semantics and variants through centralized token
        mappings in the component, not by introducing one-off inline styles in products.
      </p>
      <BadgeGrid
        buildProps={(semantic, variant) => ({
          label: `${semanticLabel[semantic]} · ${variant}`,
          semantic,
          variant,
        })}
      />
      <Box sx={{ fontSize: typeScale.xs.fontSize, color: textStateColors.secondary }}>
        To add a new semantic in the future, extend the semantic union and its color mapping once,
        then all story matrices immediately reflect the new badge family.
      </Box>
    </Box>
  ),
};
