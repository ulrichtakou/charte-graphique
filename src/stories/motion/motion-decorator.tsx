import { useEffect, useState, type ReactNode } from 'react';
import type { Decorator } from '@storybook/react-vite';

/**
 * Respects `prefers-reduced-motion: reduce` by collapsing transition/animation
 * durations under a wrapper (stable snapshots when the OS requests reduced motion).
 * All motion stories should use this decorator.
 */
function MotionAccessibilityWrapper({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <div data-motion-reduced={reduced ? 'true' : undefined}>
      <style>
        {`
          [data-motion-reduced="true"] * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        `}
      </style>
      {children}
    </div>
  );
}

export const withMotionAccessibility: Decorator = (Story) => (
  <MotionAccessibilityWrapper>
    <Story />
  </MotionAccessibilityWrapper>
);