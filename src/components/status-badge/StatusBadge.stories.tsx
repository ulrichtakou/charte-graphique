import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Shared/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    tone: {
      control: 'inline-radio',
      options: ['neutral', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium'],
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Deprecated: use tone',
    },
  },
  args: {
    label: 'Status',
    tone: 'neutral',
    size: 'small',
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Playground: Story = {};

export const Neutral: Story = {
  args: { label: 'Draft', tone: 'neutral' },
};

export const Success: Story = {
  args: { label: 'Active', tone: 'success' },
};

export const Warning: Story = {
  args: { label: 'Pending', tone: 'warning' },
};

export const Error: Story = {
  args: { label: 'Failed', tone: 'error' },
};

export const Info: Story = {
  args: { label: 'Published', tone: 'info' },
};

export const MediumSize: Story = {
  args: {
    label: 'Medium chip',
    tone: 'success',
    size: 'medium',
  },
};

export const LongLabel: Story = {
  args: {
    label:
      'Very long status label that should wrap or stretch the badge depending on layout constraints',
    tone: 'warning',
  },
};

export const LegacyVariantDefault: Story = {
  args: {
    label: 'Legacy default',
    tone: undefined,
    variant: 'default',
  },
};

export const LegacyVariantSuccess: Story = {
  args: {
    label: 'Legacy success',
    tone: undefined,
    variant: 'success',
  },
};

export const ToneComparison: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
      <StatusBadge label="Neutral" tone="neutral" />
      <StatusBadge label="Success" tone="success" />
      <StatusBadge label="Warning" tone="warning" />
      <StatusBadge label="Error" tone="error" />
      <StatusBadge label="Info" tone="info" />
    </Box>
  ),
};
