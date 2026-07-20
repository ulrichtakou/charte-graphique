import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import Box from '@mui/material/Box';
import MuiLink, { type LinkProps } from '@mui/material/Link';
import type { SxProps, Theme } from '@mui/material/styles';
import type { LucideIcon } from 'lucide-react';
import { primitiveColors, type PrimitiveHue } from '../../tokens/colors/primitives/primitive-colors';
import { motionDuration, motionEasing } from '../../tokens/motion/motion-tokens';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  fontFamilies,
  fontWeights,
  letterSpacings,
  textStateColors,
  typeScale,
} from '../../tokens/typography/typography-tokens';

const pc = primitiveColors;

/** Circle fill — 500 reads well as a step marker across hues. */
const CIRCLE_STEP = 500 as const;
const COMPLETED_STEP = 400 as const;

const transition = `color ${motionDuration.short} ${motionEasing.standard}`;
const transitionTransform = `transform ${motionDuration.short} ${motionEasing.emphasized}`;
const transitionShadow = `box-shadow ${motionDuration.normal} ${motionEasing.standard}`;

function circleFill(hue: PrimitiveHue): string {
  return pc[hue][CIRCLE_STEP];
}

function circleFillCompleted(hue: PrimitiveHue): string {
  return pc[hue][COMPLETED_STEP];
}

/** Contrast for icons on saturated circles */
function iconOnCircleColor(hue: PrimitiveHue): string {
  if (hue === 'yellow') return pc.gray[900];
  return '#ffffff';
}

export type BreadcrumbConnectorVariant = 'full' | 'muted' | 'filling';

const CONNECTOR_HEIGHT = 3;

function Connector({
  fromHue,
  toHue,
  variant = 'full',
  fill = 0,
}: {
  fromHue: PrimitiveHue;
  toHue: PrimitiveHue;
  variant?: BreadcrumbConnectorVariant;
  /** 0–1 when `variant` is `filling` */
  fill?: number;
}) {
  const a = circleFill(fromHue);
  const b = circleFill(toHue);
  const clamped = Math.max(0, Math.min(1, fill));

  const barSx = {
    width: '100%',
    minWidth: 0,
    height: CONNECTOR_HEIGHT,
    borderRadius: radii.full,
  } as const;

  if (variant === 'muted') {
    return (
      <Box
        aria-hidden
        sx={{
          ...barSx,
          bgcolor: pc.gray[200],
          boxShadow: `inset 0 1px 1px ${pc.gray[900]}0a`,
        }}
      />
    );
  }

  if (variant === 'filling') {
    return (
      <Box
        aria-hidden
        sx={{
          position: 'relative',
          ...barSx,
          overflow: 'hidden',
          bgcolor: pc.gray[200],
          boxShadow: `inset 0 1px 1px ${pc.gray[900]}0a`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${clamped * 100}%`,
            borderRadius: radii.full,
            background: `linear-gradient(90deg, ${a} 0%, ${b} 100%)`,
            boxShadow: `0 0 10px ${a}55`,
            transition: `width ${motionDuration.normal} ${motionEasing.standard}`,
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      aria-hidden
      sx={{
        ...barSx,
        background: `linear-gradient(90deg, ${a} 0%, ${b} 100%)`,
        boxShadow: `0 1px 3px ${a}40, 0 0 1px ${pc.gray[900]}14`,
      }}
    />
  );
}

const CIRCLE_PX = 40;
const ICON_PX = 20;
/** Label max width; centered under the circle without widening the circle column */
const LABEL_MAX_W = 112;
/** Tight gap between circle and caption */
const CIRCLE_LABEL_GAP = spacing[0.5];

export type BreadcrumbStepTrailStatus = 'completed' | 'current' | 'upcoming';

function StepCircle({
  hue,
  Icon,
  trailStatus,
}: {
  hue: PrimitiveHue;
  Icon: LucideIcon;
  trailStatus?: BreadcrumbStepTrailStatus;
}) {
  const mode = trailStatus ?? 'current';

  if (mode === 'upcoming') {
    return (
      <Box
        sx={{
          width: CIRCLE_PX,
          height: CIRCLE_PX,
          borderRadius: '50%',
          bgcolor: pc.gray[50],
          border: `1px solid ${pc.gray[200]}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: `0 1px 2px ${pc.gray[900]}0a, inset 0 1px 0 ${pc.gray[50]}`,
        }}
      >
        <Icon size={ICON_PX} strokeWidth={2} color={pc.gray[400]} aria-hidden />
      </Box>
    );
  }

  const fill = mode === 'completed' ? circleFillCompleted(hue) : circleFill(hue);
  const iconColor =
    hue === 'yellow' && mode === 'completed' ? pc.gray[900] : iconOnCircleColor(hue);
  const ringTint = pc[hue][100];

  const isCompleted = mode === 'completed';

  return (
    <Box
      sx={{
        width: CIRCLE_PX,
        height: CIRCLE_PX,
        borderRadius: '50%',
        bgcolor: fill,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: `${transitionShadow}, opacity ${motionDuration.short} ${motionEasing.standard}`,
        ...(isCompleted
          ? {
              opacity: 0.98,
              boxShadow: `
                0 0 0 1px ${pc.gray[50]}cc inset,
                0 2px 6px -1px ${fill}55,
                0 1px 2px ${pc.gray[900]}12
              `,
            }
          : {
              boxShadow: `
                0 0 0 2px ${ringTint},
                0 3px 10px -2px ${fill}55,
                0 2px 4px -1px ${pc.gray[900]}18
              `,
            }),
      }}
    >
      <Icon size={ICON_PX} strokeWidth={2.25} color={iconColor} aria-hidden />
    </Box>
  );
}

const labelSx: SxProps<Theme> = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale.xs.fontSize,
  fontWeight: fontWeights.medium,
  lineHeight: 1.3,
  letterSpacing: letterSpacings.tight,
  color: textStateColors.secondary,
  textAlign: 'center',
  maxWidth: LABEL_MAX_W,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  wordBreak: 'break-word',
};

const labelCurrentSx: SxProps<Theme> = {
  ...labelSx,
  fontWeight: fontWeights.semibold,
  color: textStateColors.primary,
  letterSpacing: letterSpacings.normal,
};

const labelUpcomingSx: SxProps<Theme> = {
  ...labelSx,
  color: textStateColors.disabled,
};

const labelCompletedSx: SxProps<Theme> = {
  ...labelSx,
  color: textStateColors.secondary,
  fontWeight: fontWeights.medium,
};

const reducedMotionSx: SxProps<Theme> = {
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
    transform: 'none !important',
  },
};

export type BreadcrumbStepProps = {
  /** Primitive palette for the circle and the gradient segment leading into this step. */
  hue: PrimitiveHue;
  icon: LucideIcon;
  label: ReactNode;
  /** When set and `current` is false, the step is a link (circle + label). */
  href?: string;
  /** Current page — not interactive; sets `aria-current` on the list item. */
  current?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
} & Omit<LinkProps, 'children' | 'href' | 'underline' | 'color' | 'sx'>;

type BreadcrumbStepInternal = {
  _stepIndex?: number;
  _prevHue?: PrimitiveHue;
  _trailStatus?: BreadcrumbStepTrailStatus;
  _connectorVariant?: BreadcrumbConnectorVariant;
  _connectorFill?: number;
};

export const BreadcrumbStep = forwardRef<HTMLLIElement, BreadcrumbStepProps & BreadcrumbStepInternal>(
  function BreadcrumbStep(
    {
      hue,
      icon: Icon,
      label,
      href,
      current = false,
      sx: stepSx,
      className,
      _stepIndex = 0,
      _prevHue,
      _trailStatus,
      _connectorVariant,
      _connectorFill = 0,
      component,
      ...linkRest
    },
    ref,
  ) {
    const trail = _trailStatus != null;
    const effectiveCurrent = trail ? _trailStatus === 'current' : current;
    const effectiveUpcoming = trail && _trailStatus === 'upcoming';
    const effectiveCompleted = trail && _trailStatus === 'completed';

    const showLink = Boolean(href) && !effectiveCurrent && !effectiveUpcoming;
    const hrefResolved = href ?? '';

    const labelForStatic = effectiveCurrent
      ? labelCurrentSx
      : effectiveUpcoming
        ? labelUpcomingSx
        : effectiveCompleted
          ? labelCompletedSx
          : labelSx;

    const labelSxForCell = showLink ? labelCompletedSx : labelForStatic;

    const circleEl = <StepCircle hue={hue} Icon={Icon} trailStatus={_trailStatus} />;

    const circleHitWrapSx: SxProps<Theme> = {
      borderRadius: '50%',
      lineHeight: 0,
      transition: transitionTransform,
      ...reducedMotionSx,
    };

    const circleBlock = showLink ? (
      <Box className="sparing-bc-hit" sx={circleHitWrapSx}>
        {circleEl}
      </Box>
    ) : (
      circleEl
    );

    const labelEl = (
      <Box
        className={showLink ? 'sparing-bc-label' : undefined}
        component="span"
        sx={labelSxForCell}
      >
        {label}
      </Box>
    );

    const labelCol = _stepIndex > 0 ? 2 : 1;

    const labelSlot = (
      <Box
        sx={{
          width: LABEL_MAX_W,
          maxWidth: LABEL_MAX_W,
          alignSelf: 'center',
          mt: 0,
          pt: 0,
          textAlign: 'center',
        }}
      >
        {labelEl}
      </Box>
    );

    const stepStackSx = {
      gridColumn: labelCol,
      gridRow: '1 / 3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: CIRCLE_PX,
      minWidth: CIRCLE_PX,
      maxWidth: CIRCLE_PX,
      boxSizing: 'border-box',
      gap: CIRCLE_LABEL_GAP,
    } as const;

    const stepGridCells = showLink ? (
      <MuiLink
        {...linkRest}
        href={hrefResolved}
        {...(component != null ? { component } : {})}
        underline="none"
        sx={[
          stepStackSx,
          {
            textDecoration: 'none',
            color: 'inherit',
            transition,
            borderRadius: radii.sm,
            '@media (prefers-reduced-motion: reduce)': {
              '&:hover .sparing-bc-hit': { transform: 'none' },
            },
            '&:hover .sparing-bc-hit': {
              transform: 'scale(1.045)',
            },
            '&:hover .sparing-bc-label': {
              color: textStateColors.primary,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            },
            '&:focus-visible': {
              outline: 'none',
            },
            '&:focus-visible .sparing-bc-hit': {
              outline: `2px solid ${circleFill(hue)}`,
              outlineOffset: 3,
              boxShadow: `0 0 0 4px ${pc[hue][100]}99`,
            },
          },
          reducedMotionSx,
          ...(Array.isArray(stepSx) ? stepSx : stepSx ? [stepSx] : []),
        ]}
      >
        {circleBlock}
        {labelSlot}
      </MuiLink>
    ) : (
      <Box sx={stepStackSx}>
        {circleBlock}
        {labelSlot}
      </Box>
    );

    const connVariant = _connectorVariant ?? 'full';

    return (
      <Box
        ref={ref}
        component="li"
        className={className}
        aria-current={effectiveCurrent ? 'page' : undefined}
        aria-disabled={effectiveUpcoming ? true : undefined}
        sx={{
          display: 'grid',
          gridTemplateColumns:
            _stepIndex === 0
              ? `${CIRCLE_PX}px`
              : `minmax(0, 1fr) ${CIRCLE_PX}px`,
          gridTemplateRows: 'auto auto',
          columnGap: 0,
          rowGap: 0,
          alignItems: 'start',
          flex: _stepIndex === 0 ? '0 0 auto' : '1 1 0',
          minWidth: 0,
          width: _stepIndex === 0 ? 'auto' : '100%',
          listStyle: 'none',
          overflow: 'visible',
          ...(effectiveUpcoming ? { pointerEvents: 'none' } : null),
        }}
      >
        {_stepIndex > 0 && _prevHue != null ? (
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              minWidth: 0,
              minHeight: CIRCLE_PX,
            }}
          >
            <Connector
              fromHue={_prevHue}
              toHue={hue}
              variant={connVariant}
              fill={_connectorFill}
            />
          </Box>
        ) : null}
        {stepGridCells}
      </Box>
    );
  },
);

BreadcrumbStep.displayName = 'BreadcrumbStep';

export type BreadcrumbProps = {
  children: ReactNode;
  /** Applied to the root `nav`. @default 'Breadcrumb' */
  ariaLabel?: string;
  className?: string;
  sx?: SxProps<Theme>;
  /**
   * When set, steps before this index are completed, this index is current, the rest upcoming.
   * Connectors before step `k` (k ≥ 1) are lit when `activeStepIndex >= k`. Omit for static (all lit) mode.
   */
  activeStepIndex?: number;
  /**
   * Step index whose **leading** connector is animating (color flowing from the previous step).
   * Drive with `connectorAnimationFill` from 0 to 1, then bump `activeStepIndex` to this index.
   */
  animatingConnectorBeforeStepIndex?: number | null;
  /** 0–1 progress for the connector targeted by `animatingConnectorBeforeStepIndex`. */
  connectorAnimationFill?: number;
};

function isBreadcrumbStepElement(
  node: ReactNode,
): node is ReactElement<BreadcrumbStepProps & BreadcrumbStepInternal> {
  return isValidElement(node) && node.type === BreadcrumbStep;
}

function trailConnectorVariant(
  stepIndex: number,
  activeStepIndex: number | undefined,
  animIndex: number | null | undefined,
  animFill: number,
): BreadcrumbConnectorVariant {
  if (activeStepIndex === undefined) return 'full';
  if (stepIndex < 1) return 'full';
  if (animIndex === stepIndex && animFill < 1) return 'filling';
  if (activeStepIndex >= stepIndex) return 'full';
  return 'muted';
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  {
    children,
    ariaLabel = 'Breadcrumb',
    className,
    sx,
    activeStepIndex,
    animatingConnectorBeforeStepIndex = null,
    connectorAnimationFill = 0,
  },
  ref,
) {
  const steps = Children.toArray(children).filter(isBreadcrumbStepElement);
  const hues = steps.map((s) => s.props.hue);

  const rendered = steps.map((step, i) => {
    const trailStatus: BreadcrumbStepTrailStatus | undefined =
      activeStepIndex === undefined
        ? undefined
        : i < activeStepIndex
          ? 'completed'
          : i === activeStepIndex
            ? 'current'
            : 'upcoming';

    const connVar = trailConnectorVariant(
      i,
      activeStepIndex,
      animatingConnectorBeforeStepIndex,
      connectorAnimationFill,
    );

    return cloneElement(step, {
      key: step.key ?? `breadcrumb-step-${i}`,
      _stepIndex: i,
      _prevHue: i > 0 ? hues[i - 1] : undefined,
      _trailStatus: trailStatus,
      _connectorVariant: activeStepIndex === undefined ? undefined : connVar,
      _connectorFill:
        connVar === 'filling' && animatingConnectorBeforeStepIndex === i
          ? connectorAnimationFill
          : 0,
    });
  });

  return (
    <Box
      ref={ref}
      component="nav"
      className={className}
      aria-label={ariaLabel}
      sx={[
        {
          width: '100%',
          overflow: 'visible',
          py: spacing[1],
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box
        component="ol"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
          listStyle: 'none',
          m: 0,
          p: 0,
          minWidth: 'min-content',
        }}
      >
        {rendered}
      </Box>
    </Box>
  );
});
