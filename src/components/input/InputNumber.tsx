import {
  useCallback,
  useRef,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import Box from '@mui/material/Box';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { controlDensityPairing, iconSizes } from '../../tokens/ui-sizes/ui-sizes-tokens';
import { Input, type InputProps } from './Input';

const pc = primitiveColors;

function focusRing(invalid: boolean) {
  return invalid ? pc.red[600] : pc.blue[600];
}

export type NumberFieldProps = Omit<InputProps, 'type' | 'hideNativeNumberSpinners'> & {
  /** @default 1 */
  step?: number;
  min?: number;
  max?: number;
  /** Show custom increment / decrement controls */
  showStepper?: boolean;
};

export function NumberField({
  step = 1,
  min,
  max,
  showStepper = true,
  endAdornment,
  density = 'md',
  invalid = false,
  disabled,
  readOnly,
  inputRef: inputRefProp,
  onChange,
  value,
  defaultValue,
  ...rest
}: NumberFieldProps) {
  const pair = controlDensityPairing[density];
  const iconRem = iconSizes[pair.icon];
  const innerRef = useRef<HTMLInputElement | null>(null);

  const setRefs = useCallback(
    (el: HTMLInputElement | null) => {
      innerRef.current = el;
      if (typeof inputRefProp === 'function') inputRefProp(el);
      else if (inputRefProp)
        (inputRefProp as MutableRefObject<HTMLInputElement | null>).current =
          el;
    },
    [inputRefProp],
  );

  const clamp = useCallback(
    (n: number) => {
      if (min != null && n < min) return min;
      if (max != null && n > max) return max;
      return n;
    },
    [min, max],
  );

  const bump = (delta: number) => {
    if (disabled || readOnly) return;
    const el = innerRef.current;
    if (!el) return;
    const raw = el.value;
    const current = raw === '' ? 0 : Number.parseFloat(raw);
    if (Number.isNaN(current)) return;
    const next = clamp(current + delta * step);
    const nativeSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    )?.set;
    nativeSetter?.call(el, String(next));
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const stepper: ReactNode = showStepper ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        ml: spacing[1],
        flexShrink: 0,
      }}
    >
      <Box
        component="button"
        type="button"
        tabIndex={-1}
        disabled={disabled || readOnly}
        aria-label="Augmenter"
        onClick={() => bump(1)}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 0,
          m: 0,
          width: iconRem,
          height: iconRem,
          border: 'none',
          background: 'transparent',
          borderRadius: radii.xs,
          color: pc.gray[600],
          cursor: disabled || readOnly ? 'not-allowed' : 'pointer',
          '&:focus-visible': {
            outline: `2px solid ${focusRing(invalid)}`,
            outlineOffset: 1,
          },
          '& svg': { width: '0.75rem', height: '0.75rem' },
        }}
      >
        <ChevronUp aria-hidden strokeWidth={2.5} />
      </Box>
      <Box
        component="button"
        type="button"
        tabIndex={-1}
        disabled={disabled || readOnly}
        aria-label="Diminuer"
        onClick={() => bump(-1)}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 0,
          m: 0,
          width: iconRem,
          height: iconRem,
          border: 'none',
          background: 'transparent',
          borderRadius: radii.xs,
          color: pc.gray[600],
          cursor: disabled || readOnly ? 'not-allowed' : 'pointer',
          '&:focus-visible': {
            outline: `2px solid ${focusRing(invalid)}`,
            outlineOffset: 1,
          },
          '& svg': { width: '0.75rem', height: '0.75rem' },
        }}
      >
        <ChevronDown aria-hidden strokeWidth={2.5} />
      </Box>
    </Box>
  ) : null;

  const mergedEnd: ReactNode = (
    <>
      {endAdornment}
      {stepper}
    </>
  );

  return (
    <Input
      {...rest}
      density={density}
      invalid={invalid}
      disabled={disabled}
      readOnly={readOnly}
      type="number"
      inputRef={setRefs}
      step={step}
      min={min}
      max={max}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      hideNativeNumberSpinners={showStepper}
      endAdornment={mergedEnd}
    />
  );
}
