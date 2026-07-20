/**
 * Motion tokens — durations, easing curves, and composed patterns (enter / exit / layout).
 * Use with CSS `transition` / `animation`, or inject via `motionRootStyleObject()`.
 */

const MOTION_PREFIX = '--sparing-motion';

export const motionDuration = {
  /** Micro-interactions, hover color */
  instant: '50ms',
  /** Small UI nudges */
  xs: '100ms',
  /** Quick feedback, tooltips */
  short: '150ms',
  /** Default state change, buttons */
  normal: '200ms',
  /** Panels, accordions */
  moderate: '300ms',
  /** Emphasis, page-level */
  slow: '400ms',
  /** Maximum deliberate motion */
  deliberate: '500ms',
} as const;

export type MotionDurationToken = keyof typeof motionDuration;

export const motionEasing = {
  linear: 'linear',
  /** Incoming elements — decelerate into place */
  enter: 'cubic-bezier(0, 0, 0.2, 1)',
  /** Outgoing elements — accelerate off screen */
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
  /** Both ends smoothed */
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** General UI (Material-style standard) */
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  /** Overshoot / emphasis */
  emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export type MotionEasingToken = keyof typeof motionEasing;

/**
 * Opinionated recipes — validate combinations in Storybook “Patterns”.
 */
export const motionPatterns = {
  enter: {
    duration: motionDuration.normal,
    easing: motionEasing.enter,
  },
  exit: {
    duration: motionDuration.short,
    easing: motionEasing.exit,
  },
  layout: {
    duration: motionDuration.moderate,
    easing: motionEasing.standard,
  },
} as const;

export type MotionPatternToken = keyof typeof motionPatterns;

const ORDERED_DURATION_KEYS: MotionDurationToken[] = [
  'instant',
  'xs',
  'short',
  'normal',
  'moderate',
  'slow',
  'deliberate',
];

const ORDERED_EASING_KEYS: MotionEasingToken[] = [
  'linear',
  'enter',
  'exit',
  'inOut',
  'standard',
  'emphasized',
];

export function motionDurationKeysInOrder(): MotionDurationToken[] {
  return [...ORDERED_DURATION_KEYS];
}

export function motionEasingKeysInOrder(): MotionEasingToken[] {
  return [...ORDERED_EASING_KEYS];
}

/** e.g. `--sparing-motion-duration-normal` */
export function motionDurationCssVar(token: MotionDurationToken): string {
  return `${MOTION_PREFIX}-duration-${token}`;
}

/** e.g. `--sparing-motion-easing-enter` */
export function motionEasingCssVar(token: MotionEasingToken): string {
  return `${MOTION_PREFIX}-easing-${token}`;
}

export function motionRootStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of ORDERED_DURATION_KEYS) {
    style[motionDurationCssVar(key)] = motionDuration[key];
  }
  for (const key of ORDERED_EASING_KEYS) {
    style[motionEasingCssVar(key)] = motionEasing[key];
  }
  return style;
}

/** Human-readable intent for docs and Storybook tables */
export const motionDurationUsage: Record<MotionDurationToken, string> = {
  instant: 'Ripple, tiny toggles — barely perceived',
  xs: 'Icon swaps, micro copy changes',
  short: 'Hover states, small menus',
  normal: 'Buttons, checkboxes, default transitions',
  moderate: 'Side panels, modal content, large surfaces',
  slow: 'Page-level reveals, coach marks',
  deliberate: 'Hero motion, onboarding emphasis — use sparingly',
};

export const motionEasingUsage: Record<MotionEasingToken, string> = {
  linear: 'Progress, scrubbers, non-organic motion',
  enter: 'Something arriving — settles gently',
  exit: 'Something leaving — picks up speed',
  inOut: 'Symmetric enter/leave on the same element',
  standard: 'Layout shifts, resize, generic UI',
  emphasized: 'Attention-grabbing without harsh snap',
};
