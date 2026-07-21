import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import {
  motionDuration,
  motionEasing,
  motionEasingKeysInOrder,
  motionEasingUsage,
} from '../../tokens/motion/motion-tokens';
import { withMotionAccessibility } from './motion-decorator';
import { SlidingBlock, StickyReplayToolbar, useReplayTrigger } from './motion-playhead';

const pc = primitiveColors;

const meta: Meta = {
  title: 'YaoundéLogis/Tokens/Motion/02 Easing',
  decorators: [withMotionAccessibility],
  parameters: {
    docs: { disable: true },
    chromatic: { pauseAnimationAtEnd: true },
  },
};

export default meta;

type Story = StoryObj;

/** Fixed duration so only the curve differs */
export const CompareEasings: Story = {
  name: 'Compare easing',
  render: function CompareEasingsStory() {
    const { replayKey, replay } = useReplayTrigger();
    const keys = motionEasingKeysInOrder();
    const fixedDuration = motionDuration.moderate;

    return (
      <div
        style={{
          fontFamily: 'var(--yaoundelogis-font-family, Poppins, sans-serif)',
          color: pc.gray[900],
          maxWidth: 920,
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 8px' }}>
          Easing tokens ({fixedDuration} for all)
        </h2>
        <p style={{ margin: '0 0 8px', color: pc.gray[600], lineHeight: 1.6 }}>
          Same distance and duration — only the curve changes. Scroll the table and
          use the sticky bar to replay all rows together.
        </p>
        <StickyReplayToolbar onReplay={replay} buttonBackground={pc.violet[600]} />
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
              <th style={{ textAlign: 'left', padding: '10px 8px' }}>Curve</th>
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
                  easing.{token}
                </td>
                <td
                  style={{
                    padding: '12px 8px',
                    fontFamily: 'ui-monospace, monospace',
                    fontSize: 11,
                    color: pc.gray[500],
                    wordBreak: 'break-all',
                    maxWidth: 280,
                  }}
                >
                  {motionEasing[token]}
                </td>
                <td style={{ padding: '12px 8px', verticalAlign: 'middle' }}>
                  <SlidingBlock
                    replayKey={replayKey}
                    duration={fixedDuration}
                    easing={motionEasing[token]}
                    background={pc.violet[500]}
                  />
                </td>
                <td
                  style={{
                    padding: '12px 8px',
                    color: pc.gray[600],
                    lineHeight: 1.45,
                  }}
                >
                  {motionEasingUsage[token]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
