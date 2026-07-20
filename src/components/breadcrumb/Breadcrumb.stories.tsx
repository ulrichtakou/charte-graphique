import React, { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { Building2, FileText, FolderOpen, Home, Layers, type LucideIcon } from 'lucide-react';
import {
  PRIMITIVE_HUES,
  type PrimitiveHue,
} from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontWeights, typeScale } from '../../tokens/typography/typography-tokens';
import { Breadcrumb, BreadcrumbStep } from './Breadcrumb';

const STEP_ICONS: [LucideIcon, LucideIcon, LucideIcon] = [Home, FolderOpen, FileText];
const STEP_LABELS = ['Home', 'Folder', 'Document'] as const;

function breadcrumbForHue(hue: PrimitiveHue) {
  return (
    <Breadcrumb ariaLabel={`Breadcrumb — ${hue}`}>
      <BreadcrumbStep hue={hue} icon={STEP_ICONS[0]} label={STEP_LABELS[0]} href={`#${hue}-1`} />
      <BreadcrumbStep hue={hue} icon={STEP_ICONS[1]} label={STEP_LABELS[1]} href={`#${hue}-2`} />
      <BreadcrumbStep hue={hue} icon={STEP_ICONS[2]} label={STEP_LABELS[2]} current />
    </Breadcrumb>
  );
}

const meta: Meta<typeof Breadcrumb> = {
  title: 'Shared/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Step-based breadcrumb: Lucide icon inside a colored circle (primitive hue 500), label under the icon, and a gradient connector between steps. Use `activeStepIndex`, `animatingConnectorBeforeStepIndex`, and `connectorAnimationFill` to show a guided path (completed / current / upcoming) and animate color flowing along a connector. See **Trail progression (animated)**.',
      },
    },
  },
  argTypes: {
    ariaLabel: { control: 'text' },
    children: { control: false },
    sx: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = {
  args: {
    ariaLabel: 'Breadcrumb',
  },
  render: (args) => (
    <Box sx={{ maxWidth: 560 }}>
      <Breadcrumb {...args}>
        <BreadcrumbStep hue="blue" icon={Home} label="Home" href="#h" />
        <BreadcrumbStep hue="violet" icon={Layers} label="Library" href="#l" />
        <BreadcrumbStep hue="green" icon={FileText} label="Current file" current />
      </Breadcrumb>
    </Box>
  ),
};

/** One row per primitive hue: same three-step trail in a single color (solid connectors). */
export const AllPrimitiveHues: Story = {
  name: 'All primitive hues',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing[5], maxWidth: 720 }}>
      {PRIMITIVE_HUES.map((hue) => (
        <Box key={hue}>
          <Box
            component="h3"
            sx={{
              m: 0,
              mb: spacing[2],
              fontSize: typeScale.sm.fontSize,
              fontWeight: fontWeights.semibold,
              textTransform: 'capitalize',
              color: 'text.secondary',
            }}
          >
            {hue}
          </Box>
          {breadcrumbForHue(hue)}
        </Box>
      ))}
    </Box>
  ),
};

/** Each step uses a different hue; connector gradients follow the color-to-color path. */
export const MultiHueTrail: Story = {
  name: 'Multi-hue trail',
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ maxWidth: 640 }}>
      <Breadcrumb ariaLabel="Breadcrumb trail">
        <BreadcrumbStep hue="blue" icon={Building2} label="Organization" href="#o" />
        <BreadcrumbStep hue="cyan" icon={Layers} label="Project" href="#p" />
        <BreadcrumbStep hue="green" icon={FolderOpen} label="Folder" href="#d" />
        <BreadcrumbStep hue="orange" icon={FileText} label="Report" current />
      </Breadcrumb>
    </Box>
  ),
};

export const TwoSteps: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Breadcrumb>
        <BreadcrumbStep hue="gray" icon={Home} label="Dashboard" href="#d" />
        <BreadcrumbStep hue="gray" icon={FileText} label="Settings" current />
      </Breadcrumb>
    </Box>
  ),
};

const TRAIL_PAUSE_MS = 2000;
const TRAIL_ANIM_MS = 800;
const TRAIL_STEP_COUNT = 3;

/**
 * Cycles: only step 1 is active → color flows along the connector → step 2 activates → repeat to step 3 → reset.
 */
function TrailProgressionDemo() {
  const [activeStepIndex, setActive] = useState(0);
  const [animStep, setAnimStep] = useState<number | null>(null);
  const [fill, setFill] = useState(0);
  const activeRef = useRef(activeStepIndex);
  activeRef.current = activeStepIndex;
  const rafRef = useRef(0);

  useEffect(() => {
    const run = { cancelled: false };

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(() => {
          if (!run.cancelled) resolve();
        }, ms);
      });

    async function cycle() {
      while (!run.cancelled) {
        await sleep(TRAIL_PAUSE_MS);
        if (run.cancelled) break;

        const a = activeRef.current;
        const next = a + 1;

        if (next >= TRAIL_STEP_COUNT) {
          await sleep(TRAIL_PAUSE_MS * 0.4);
          if (run.cancelled) break;
          setActive(0);
          setAnimStep(null);
          setFill(0);
          continue;
        }

        setAnimStep(next);
        setFill(0);

        await new Promise<void>((resolve) => {
          const start = performance.now();
          function frame(now: number) {
            if (run.cancelled) {
              resolve();
              return;
            }
            const t = Math.min(1, (now - start) / TRAIL_ANIM_MS);
            setFill(t);
            if (t < 1) {
              rafRef.current = requestAnimationFrame(frame);
            } else {
              setActive(next);
              setAnimStep(null);
              setFill(0);
              resolve();
            }
          }
          rafRef.current = requestAnimationFrame(frame);
        });
      }
    }

    void cycle();
    return () => {
      run.cancelled = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <Box sx={{ maxWidth: 560 }}>
      <Breadcrumb
        ariaLabel="Step progression demo"
        activeStepIndex={activeStepIndex}
        animatingConnectorBeforeStepIndex={animStep}
        connectorAnimationFill={fill}
      >
        <BreadcrumbStep hue="blue" icon={Home} label="Start" href="#s" />
        <BreadcrumbStep hue="violet" icon={Layers} label="Process" href="#p" />
        <BreadcrumbStep hue="green" icon={FileText} label="Done" href="#d" />
      </Breadcrumb>
      <Box
        sx={{
          mt: 2,
          fontSize: '0.8125rem',
          color: 'text.secondary',
        }}
      >
        Active index: {activeStepIndex}
        {animStep != null ? ` · Animating connector before step ${animStep} (${(fill * 100).toFixed(0)}%)` : ''}
      </Box>
    </Box>
  );
}

export const TrailProgression: Story = {
  name: 'Trail progression (animated)',
  parameters: { controls: { disable: true } },
  render: () => <TrailProgressionDemo />,
};
