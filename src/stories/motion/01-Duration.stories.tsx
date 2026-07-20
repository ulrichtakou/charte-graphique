import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import {
  motionDuration,
  motionDurationKeysInOrder,
  motionDurationUsage,
  motionEasing,
} from '../../tokens/motion/motion-tokens';
import { withMotionAccessibility } from './motion-decorator';
import { SlidingBlock, StickyReplayToolbar, useReplayTrigger } from './motion-playhead';

const pc = primitiveColors;

const meta: Meta = {
  title: 'Design System/Tokens/Motion/01 Duration',
  decorators: [withMotionAccessibility],
  parameters: {
    docs: { disable: true },
    chromatic: { pauseAnimationAtEnd: true },
  },
};

export default meta;

type Story = StoryObj;

/** Fixed easing so only duration differs — replay fires all rows at once */
export const CompareDurations: Story = {
  name: 'Compare durations',
  render: function CompareDurationsStory() {
    const { replayKey, replay } = useReplayTrigger();
    const keys = motionDurationKeysInOrder();
    const fixedEasing = motionEasing.standard;

    return (
      <div
        style={{
          fontFamily:
            '"DM Sans", system-ui, sans-serif',
          color: pc.gray[900],
          maxWidth: 920,
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 8px' }}>
          Duration tokens (same easing: standard)
        </h2>
        <p style={{ margin: '0 0 8px', color: pc.gray[600], lineHeight: 1.6 }}>
          Scroll the table to compare rows — use the sticky control below to replay
          all demos in sync (not the Storybook side panel).
        </p>
        <StickyReplayToolbar onReplay={replay} buttonBackground={pc.blue[600]} />
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.875rem',
          }}
        >
          <thead>
            <tr style={{ borderBottom: `2px solid ${pc.gray[200]}` }}>
              <th style={{ textAlign: 'left', padding: '10px 8px' }}>Token</th>
              <th style={{ textAlign: 'left', padding: '10px 8px' }}>Value</th>
              <th style={{ textAlign: 'left', padding: '10px 8px', minWidth: 200 }}>
                Motion
              </th>
              <th style={{ textAlign: 'left', padding: '10px 8px' }}>Usage</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((token) => (
              <tr
                key={token}
                style={{ borderBottom: `1px solid ${pc.gray[100]}` }}
              >
                <td
                  style={{
                    padding: '12px 8px',
                    fontFamily: 'ui-monospace, monospace',
                    color: pc.gray[700],
                  }}
                >
                  duration.{token}
                </td>
                <td style={{ padding: '12px 8px', color: pc.gray[600] }}>
                  {motionDuration[token]}
                </td>
                <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}>
                  <SlidingBlock
                    replayKey={replayKey}
                    duration={motionDuration[token]}
                    easing={fixedEasing}
                    background={pc.blue[500]}
                  />
                </td>
                <td
                  style={{
                    padding: '12px 8px',
                    color: pc.gray[600],
                    lineHeight: 1.45,
                  }}
                >
                  {motionDurationUsage[token]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
