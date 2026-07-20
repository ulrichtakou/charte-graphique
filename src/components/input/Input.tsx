import {
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type MutableRefObject,
  type ReactNode,
  type Ref,
} from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import type { SxProps, Theme } from '@mui/material/styles';
import { Loader2, X } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { motionDuration, motionEasing } from '../../tokens/motion/motion-tokens';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  componentHeights,
  controlDensityPairing,
  iconSizes,
  spinnerDiameterForComponent,
  type ComponentHeightToken,
} from '../../tokens/ui-sizes/ui-sizes-tokens';
import {
  fontFamilies,
  fontWeights,
  textStateColors,
  typeScale,
} from '../../tokens/typography/typography-tokens';

const pc = primitiveColors;

export type InputFieldVariant = 'outline' | 'filled' | 'soft';

const SHELL_X: Record<ComponentHeightToken, string> = {
  sm: spacing[3],
  md: spacing[4],
  lg: spacing[4],
  xl: spacing[5],
};

function shellBackground(variant: InputFieldVariant, invalid: boolean): string {
  if (invalid) return pc.red[50];
  switch (variant) {
    case 'filled':
      return pc.gray[100];
    case 'soft':
      return pc.blue[50];
    default:
      return '#ffffff';
  }
}

function shellBorder(variant: InputFieldVariant, invalid: boolean): string {
  if (invalid) return pc.red[400];
  switch (variant) {
    case 'outline':
      return pc.gray[300];
    case 'filled':
      return 'transparent';
    case 'soft':
      return pc.blue[200];
    default:
      return pc.gray[300];
  }
}

function focusRingColor(invalid: boolean): string {
  return invalid ? pc.red[600] : pc.blue[600];
}

export type InputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'size' | 'children'
> & {
  label?: ReactNode;
  /** @default 'outline' */
  variant?: InputFieldVariant;
  /** @default 'md' */
  density?: ComponentHeightToken;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  /** Sets `aria-invalid` and error styling when true */
  invalid?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  inputRef?: Ref<HTMLInputElement>;
  /** Root box — use `inputRef` for the `<input>` */
  sx?: SxProps<Theme>;
  /** For `type="number"`: hide browser steppers when using a custom stepper */
  hideNativeNumberSpinners?: boolean;
};

export const Input = forwardRef<HTMLDivElement, InputProps>(function Input(
  {
    label,
    variant = 'outline',
    density = 'md',
    helperText,
    errorMessage,
    invalid = false,
    loading = false,
    fullWidth = false,
    startAdornment,
    endAdornment,
    clearable = false,
    onClear,
    inputRef: inputRefProp,
    disabled,
    readOnly,
    id: idProp,
    value,
    defaultValue,
    onChange,
    sx,
    className,
    type = 'text',
    placeholder,
    hideNativeNumberSpinners = false,
    ...restInput
  },
  ref,
) {
  const reactId = useId();
  const inputId = idProp ?? `sparing-input-${reactId}`;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const internalRef = useRef<HTMLInputElement | null>(null);
  const setInputRef = useCallback(
    (el: HTMLInputElement | null) => {
      internalRef.current = el;
      if (typeof inputRefProp === 'function') inputRefProp(el);
      else if (inputRefProp)
        (inputRefProp as MutableRefObject<HTMLInputElement | null>).current =
          el;
    },
    [inputRefProp],
  );

  const isControlled = value !== undefined;
  const [uncontrolledLen, setUncontrolledLen] = useState(
    () => String(defaultValue ?? '').length,
  );

  const pair = controlDensityPairing[density];
  const bodySize = typeScale[pair.body].fontSize;
  const iconRem = iconSizes[pair.icon];

  const describedBy = useMemo(() => {
    const ids: string[] = [];
    if (helperText) ids.push(helperId);
    if (invalid && errorMessage) ids.push(errorId);
    return ids.length ? ids.join(' ') : undefined;
  }, [helperText, helperId, invalid, errorMessage, errorId]);

  const hasChars = isControlled
    ? String(value ?? '').length > 0
    : uncontrolledLen > 0;

  const showClear =
    clearable &&
    !disabled &&
    !readOnly &&
    !loading &&
    hasChars;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setUncontrolledLen(e.target.value.length);
    onChange?.(e);
  };

  const handleClear = () => {
    const el = internalRef.current;
    if (el) {
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )?.set;
      nativeSetter?.call(el, '');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (!isControlled) setUncontrolledLen(0);
    onClear?.();
  };

  const transition = `${motionDuration.short} ${motionEasing.standard}`;

  const shellSx: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[2],
    minHeight: componentHeights[density],
    px: SHELL_X[density],
    borderRadius: radii.sm,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: shellBorder(variant, invalid),
    backgroundColor: shellBackground(variant, invalid),
    transition: `border-color ${transition}, background-color ${transition}, box-shadow ${transition}`,
    boxSizing: 'border-box',
    opacity: disabled ? 0.55 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    '&:focus-within': {
      outline: `2px solid ${focusRingColor(invalid)}`,
      outlineOffset: 2,
      borderColor: invalid ? pc.red[500] : variant === 'outline' ? pc.blue[500] : shellBorder(variant, invalid),
    },
    ...(readOnly && {
      cursor: 'default',
      backgroundColor: pc.gray[50],
    }),
  };

  const inputSx: SxProps<Theme> = {
    flex: 1,
    minWidth: 0,
    fontFamily: fontFamilies.sans,
    fontSize: bodySize,
    fontWeight: fontWeights.regular,
    lineHeight: 1.4,
    color: textStateColors.primary,
    '&:before': { display: 'none' },
    '&:after': { border: 'none' },
    '& input': {
      padding: 0,
      font: 'inherit',
      color: 'inherit',
      '&::placeholder': {
        color: pc.gray[400],
        opacity: 1,
      },
    },
    '& input:disabled': {
      color: textStateColors.disabled,
      WebkitTextFillColor: textStateColors.disabled,
    },
  };

  const spinnerPx = spinnerDiameterForComponent(density);

  return (
    <Box
      ref={ref}
      className={className}
      sx={[
        { width: fullWidth ? '100%' : 'auto' },
        hideNativeNumberSpinners && {
          '& input[type="number"]': {
            MozAppearance: 'textfield',
          },
          '& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button':
            {
              WebkitAppearance: 'none',
              margin: 0,
            },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {label != null && label !== false && (
        <Box
          component="label"
          htmlFor={inputId}
          sx={{
            display: 'block',
            mb: spacing[1],
            fontSize: typeScale.sm.fontSize,
            fontWeight: fontWeights.semibold,
            color: pc.gray[800],
            lineHeight: 1.35,
          }}
        >
          {label}
        </Box>
      )}

      <Box sx={shellSx}>
        {startAdornment != null && (
          <Box
            aria-hidden
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: textStateColors.secondary,
              flexShrink: 0,
              '& svg': {
                width: iconRem,
                height: iconRem,
              },
            }}
          >
            {startAdornment}
          </Box>
        )}

        <InputBase
          id={inputId}
          sx={inputSx}
          inputRef={setInputRef}
          disabled={disabled}
          readOnly={readOnly}
          fullWidth
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          inputProps={{
            'aria-invalid': invalid || undefined,
            'aria-describedby': describedBy,
            'aria-errormessage':
              invalid && errorMessage ? errorId : undefined,
            'aria-busy': loading || undefined,
            'aria-readonly': readOnly || undefined,
            ...restInput,
          }}
        />

        {endAdornment != null && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: textStateColors.secondary,
              flexShrink: 0,
              '& svg': {
                width: iconRem,
                height: iconRem,
              },
            }}
          >
            {endAdornment}
          </Box>
        )}

        {showClear && (
          <Box
            component="button"
            type="button"
            tabIndex={-1}
            onClick={handleClear}
            aria-label="Clear value"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: spacing[1],
              m: 0,
              border: 'none',
              background: 'transparent',
              borderRadius: radii.xs,
              color: textStateColors.secondary,
              cursor: 'pointer',
              flexShrink: 0,
              '&:focus-visible': {
                outline: `2px solid ${focusRingColor(invalid)}`,
                outlineOffset: 1,
              },
              '& svg': { width: iconRem, height: iconRem },
            }}
          >
            <X aria-hidden strokeWidth={2.25} />
          </Box>
        )}

        {loading && (
          <Loader2
            aria-hidden
            style={{
              width: spinnerPx,
              height: spinnerPx,
              flexShrink: 0,
              animation: 'sparing-input-spin 0.75s linear infinite',
            }}
            strokeWidth={2.25}
          />
        )}
      </Box>

      <style>{'@keyframes sparing-input-spin { to { transform: rotate(360deg); } }'}</style>

      {helperText != null && helperText !== false && (
        <Box
          component="p"
          id={helperId}
          sx={{
            m: 0,
            mt: spacing[1],
            fontSize: typeScale.xs.fontSize,
            color: textStateColors.secondary,
            lineHeight: 1.45,
          }}
        >
          {helperText}
        </Box>
      )}

      {invalid && errorMessage != null && errorMessage !== false && (
        <Box
          component="p"
          id={errorId}
          role="alert"
          aria-live="polite"
          sx={{
            m: 0,
            mt: spacing[1],
            fontSize: typeScale.xs.fontSize,
            color: textStateColors.error,
            fontWeight: fontWeights.medium,
            lineHeight: 1.45,
          }}
        >
          {errorMessage}
        </Box>
      )}
    </Box>
  );
});
