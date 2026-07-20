import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { HelpCircle } from 'lucide-react';
import { Button } from '../button/Button';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Tooltip, TooltipDisabledWrap } from './Tooltip';

const pc = primitiveColors;

const PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const;

function StorySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box component="section" sx={{ display: 'grid', gap: spacing[2] }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: textStateColors.primary }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

const meta: Meta<typeof Tooltip> = {
  title: 'Shared/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Token-styled tooltip for short, supplementary hints. Built on MUI Tooltip for placement, delays, focus/hover triggers, and accessible description wiring.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    tone: { control: 'inline-radio', options: ['dark', 'light'] },
    density: { control: 'inline-radio', options: ['compact', 'comfortable'] },
    placement: { control: 'select' },
    enterDelay: { control: 'number' },
    leaveDelay: { control: 'number' },
    describeChild: { control: 'boolean' },
    disableInteractive: { control: 'boolean' },
    followCursor: { control: 'boolean' },
    arrow: { control: 'boolean' },
    maxWidth: { control: 'number' },
  },
  args: {
    title: 'Additional context appears here.',
    tone: 'dark',
    density: 'comfortable',
    placement: 'top',
    enterDelay: 200,
    leaveDelay: 0,
    describeChild: true,
    disableInteractive: false,
    followCursor: false,
    arrow: false,
    maxWidth: 280,
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: spacing[4] }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outlined" density="md">
        Hover or focus me
      </Button>
    </Tooltip>
  ),
};

export const RoleAndStructure: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]} sx={{ maxWidth: 720 }}>
      <Typography variant="body2" color="text.secondary">
        The floating surface is exposed with <code>role=&quot;tooltip&quot;</code> (via MUI). The
        trigger remains the focusable / hoverable child. Keep the title short; structure complex UI
        elsewhere.
      </Typography>
      <Tooltip title="Saved automatically every few minutes.">
        <Button variant="contained" density="md">
          Save
        </Button>
      </Tooltip>
    </Stack>
  ),
};

export const ContentRules: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]} sx={{ maxWidth: 720 }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Do:</strong> one concise sentence, plain language, no critical-only information.
        <br />
        <strong>Avoid:</strong> links, buttons, or forms inside the tooltip — keyboard users and
        screen-reader timing make that inaccessible; use a popover or dialog instead.
      </Typography>
      <Stack direction="row" gap={spacing[2]} flexWrap="wrap" alignItems="center">
        <Tooltip title="Copies the row id to your clipboard.">
          <Button variant="outlined" density="sm">
            Good · short hint
          </Button>
        </Tooltip>
        <Tooltip
          title="This is intentionally long copy to show wrapping and max width. Prefer splitting into body text or a help article instead of stuffing a tooltip."
          maxWidth={240}
        >
          <Button variant="outlined" density="sm">
            Long copy (wrapped)
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  ),
};

export const BehaviorDelays: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]} alignItems="flex-start">
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 640 }}>
        Default component uses <code>enterDelay=200</code> ms to reduce accidental flashes. Use a
        higher <code>leaveDelay</code> when readers need time before the surface closes (e.g. 300–500
        ms).
      </Typography>
      <Stack direction="row" gap={spacing[3]} flexWrap="wrap">
        <Tooltip title="Fast leave (0 ms)" enterDelay={0} leaveDelay={0}>
          <Button variant="outlined" density="md">
            Snappy
          </Button>
        </Tooltip>
        <Tooltip title="Slower to open (600 ms)" enterDelay={600} leaveDelay={0}>
          <Button variant="outlined" density="md">
            Delayed show
          </Button>
        </Tooltip>
        <Tooltip title="Stays briefly after pointer leaves (500 ms)" leaveDelay={500}>
          <Button variant="outlined" density="md">
            Generous leave
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  ),
};

export const BehaviorFollowCursor: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[2]}>
      <Typography variant="body2" color="text.secondary">
        <code>followCursor</code> tracks the pointer — useful for dense canvases; keep titles short.
      </Typography>
      <Tooltip title="Following pointer" followCursor>
        <Box
          sx={{
            width: 280,
            height: 120,
            border: `1px dashed ${pc.gray[300]}`,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: textStateColors.secondary,
            fontSize: typeScale.sm.fontSize,
          }}
        >
          Move the mouse here
        </Box>
      </Tooltip>
    </Stack>
  ),
};

export const Placements: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2], maxWidth: 900 }}>
      {PLACEMENTS.map((placement) => (
        <Tooltip key={placement} title={`placement="${placement}"`} placement={placement}>
          <Button variant="outlined" density="sm" sx={{ textTransform: 'none' }}>
            {placement}
          </Button>
        </Tooltip>
      ))}
    </Box>
  ),
};

export const VisualDesignTokens: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[4]}>
      <StorySection title="Dark (default) — high contrast on neutral dark surface">
        <Tooltip title="Neutral dark surface, light text, token padding & radius." tone="dark">
          <Button variant="contained" density="md">
            Dark tone
          </Button>
        </Tooltip>
      </StorySection>
      <StorySection title="Light — for dark backgrounds or inverted regions">
        <Box sx={{ bgcolor: pc.gray[800], p: spacing[3], borderRadius: 1, display: 'inline-block' }}>
          <Tooltip title="Light tooltip surface" tone="light">
            <Button variant="contained" density="md" color="secondary">
              Light tone on dark canvas
            </Button>
          </Tooltip>
        </Box>
      </StorySection>
      <StorySection title="Density — compact vs comfortable padding (spacing tokens)">
        <Stack direction="row" gap={spacing[2]} flexWrap="wrap">
          <Tooltip title="Compact padding" density="compact">
            <Button variant="outlined" density="sm">
              Compact
            </Button>
          </Tooltip>
          <Tooltip title="Comfortable padding" density="comfortable">
            <Button variant="outlined" density="sm">
              Comfortable
            </Button>
          </Tooltip>
        </Stack>
      </StorySection>
      <StorySection title="Optional arrow">
        <Tooltip title="Arrow variant" arrow>
          <Button variant="outlined" density="md">
            With arrow
          </Button>
        </Tooltip>
      </StorySection>
    </Stack>
  ),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[3]} sx={{ maxWidth: 640 }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Keyboard:</strong> Tab to the trigger — the tooltip should open on focus, not only on
        hover. <strong>Screen readers:</strong> with <code>describeChild</code> (default), MUI wires
        the description relationship (<code>aria-describedby</code>) on the child when supported.
        Increase <code>leaveDelay</code> if users need more time to read the message. Never put the
        only copy of required instructions exclusively in a tooltip.
      </Typography>
      <Tooltip
        title="Supplementary hint: this action cannot be undone."
        describeChild
        leaveDelay={400}
      >
        <Button variant="outlined" density="md">
          Focus me (Tab) — tooltip stays briefly after blur
        </Button>
      </Tooltip>
    </Stack>
  ),
};

export const DisabledTrigger: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[2]} alignItems="flex-start">
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 560 }}>
        Disabled elements do not fire pointer events. Wrap with <code>TooltipDisabledWrap</code>{' '}
        (inline span) so the tooltip can still open.
      </Typography>
      <Tooltip title="You need the editor role to run this action.">
        <TooltipDisabledWrap>
          <Button variant="contained" density="md" disabled>
            Generate
          </Button>
        </TooltipDisabledWrap>
      </Tooltip>
    </Stack>
  ),
};

export const InteractiveTooltipCaution: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={spacing[2]} sx={{ maxWidth: 640 }}>
      <Typography variant="body2" color="text.secondary">
        With <code>disableInteractive=false</code> (default), the pointer can move into the tooltip
        without it closing immediately — useful to reduce accidental dismiss. Do not place focusable
        controls inside <code>title</code>; use a Popover/Dialog for actionable content.
      </Typography>
      <Tooltip title="Non-interactive text only. No links or buttons here." disableInteractive={false}>
        <Button variant="outlined" density="md">
          Hover — tooltip stays briefly under pointer
        </Button>
      </Tooltip>
    </Stack>
  ),
};

export const ControlledState: Story = {
  parameters: { controls: { disable: true } },
  render: function Controlled() {
    const [open, setOpen] = useState(false);
    return (
      <Stack spacing={spacing[2]} alignItems="flex-start">
        <Typography variant="body2" color="text.secondary">
          Controlled <code>open</code> for docs or rare sync with other UI.
        </Typography>
        <ToggleButtonGroup
          value={open ? 'on' : 'off'}
          exclusive
          color="standard"
          onChange={(_, v) => v != null && setOpen(v === 'on')}
          size="small"
        >
          <ToggleButton value="off">Hidden</ToggleButton>
          <ToggleButton value="on">Visible</ToggleButton>
        </ToggleButtonGroup>
        <Tooltip title="Controlled visibility" open={open} onClose={() => setOpen(false)}>
          <Button variant="outlined" density="md" onClick={() => setOpen((o) => !o)}>
            Toggle via button
          </Button>
        </Tooltip>
      </Stack>
    );
  },
};

export const IconTrigger: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Tooltip title="More information about this field." describeChild>
      <Box
        component="button"
        type="button"
        aria-label="Help: scheduling rules"
        sx={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          p: 0.5,
          borderRadius: 1,
          color: 'primary.main',
          display: 'inline-flex',
        }}
      >
        <HelpCircle size={20} strokeWidth={2} aria-hidden />
      </Box>
    </Tooltip>
  ),
};
