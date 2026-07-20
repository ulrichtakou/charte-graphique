import { useEffect, useState } from 'react';

/**
 * Sticky bar so "Replay all" stays visible while scrolling long comparison tables in Storybook.
 */
export function StickyReplayToolbar({
  onReplay,
  buttonBackground,
  hint = 'Stays visible while you scroll — replays every SlidingBlock in sync.',
}: {
  onReplay: () => void;
  buttonBackground: string;
  hint?: string;
}) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        padding: '12px 0',
        marginBottom: 16,
        background: 'rgba(248, 250, 252, 0.96)',
        backdropFilter: 'saturate(180%) blur(8px)',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 6px 16px -8px rgba(15, 23, 42, 0.12)',
      }}
    >
      <button
        type="button"
        onClick={onReplay}
        style={{
          padding: '10px 20px',
          fontWeight: 600,
          fontSize: '0.875rem',
          border: 'none',
          borderRadius: 8,
          background: buttonBackground,
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Replay all
      </button>
      <span
        style={{
          fontSize: 12,
          color: '#64748b',
          maxWidth: 420,
          lineHeight: 1.45,
        }}
      >
        {hint}
      </span>
    </div>
  );
}

/**
 * On each `replayKey` change, resets transform then starts transition on the next frame
 * so multiple blocks can move in sync (fair duration / easing comparison).
 */
export function useReplayTrigger(): { replayKey: number; replay: () => void } {
  const [replayKey, setReplayKey] = useState(0);
  const replay = () => setReplayKey((k) => k + 1);
  return { replayKey, replay };
}

type Phase = 'arm' | 'run';

type SlidingBlockProps = {
  replayKey: number;
  duration: string;
  easing: string;
  background: string;
  trackWidth?: number;
  blockSize?: { w: number; h: number };
};

/**
 * Replay must snap to the start without CSS transition, then enable transition and move —
 * otherwise double-rAF fires long before a 200ms+ transition can reset, and replay appears broken.
 */
export function SlidingBlock({
  replayKey,
  duration,
  easing,
  background,
  trackWidth = 140,
  blockSize = { w: 56, h: 28 },
}: SlidingBlockProps) {
  /** `arm` = at rest (0), transition disabled so we can snap instantly on replay */
  const [phase, setPhase] = useState<Phase>('arm');

  useEffect(() => {
    setPhase('arm');
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => {
        setPhase('run');
      });
    });
    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, [replayKey]);

  const travel = Math.max(0, trackWidth - blockSize.w);
  const atEnd = phase === 'run';

  return (
    <div
      style={{
        width: trackWidth,
        height: blockSize.h + 8,
        position: 'relative',
        background: 'rgba(148, 163, 184, 0.2)',
        borderRadius: 6,
      }}
    >
      <div
        className="motion-animated"
        style={{
          width: blockSize.w,
          height: blockSize.h,
          marginTop: 4,
          borderRadius: 6,
          background,
          transform: atEnd ? `translateX(${travel}px)` : 'translateX(0)',
          transition:
            phase === 'arm'
              ? 'none'
              : `transform ${duration} ${easing}`,
        }}
      />
    </div>
  );
}
