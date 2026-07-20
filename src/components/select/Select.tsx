import {
  Children,
  forwardRef,
  isValidElement,
  useId,
  useMemo,
  type ReactElement,
  type ReactNode,
} from 'react';
import Box from '@mui/material/Box';
import MuiSelect, {
  type SelectChangeEvent,
  type SelectProps as MuiSelectProps,
} from '@mui/material/Select';
import type { SxProps, Theme } from '@mui/material/styles';
import { Loader2 } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { motionDuration, motionEasing } from '../../tokens/motion/motion-tokens';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  componentHeights,
  controlDensityPairing,
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

export type SelectFieldVariant = 'outline' | 'filled' | 'soft';

const SHELL_X: Record<ComponentHeightToken, string> = {
  sm: spacing[3],
  md: spacing[4],
  lg: spacing[4],
  xl: spacing[5],
};

function shellBackground(v: SelectFieldVariant, invalid: boolean): string {
  if (invalid) return pc.red[50];
  switch (v) {
    case 'filled':
      return pc.gray[100];
    case 'soft':
      return pc.blue[50];
    default:
      return '#ffffff';
  }
}

function shellBorder(v: SelectFieldVariant, invalid: boolean): string {
  if (invalid) return pc.red[400];
  switch (v) {
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

function menuItemLabel(child: ReactElement<{ value?: unknown; children?: ReactNode }>): ReactNode {
  return child.props.children;
}

function labelForValue(children: ReactNode, value: unknown): ReactNode {
  let found: ReactNode = null;
  Children.forEach(children, (child) => {
    if (found != null) return;
    if (
      isValidElement<{ value?: unknown; children?: ReactNode }>(child) &&
      child.props.value === value
    ) {
      found = menuItemLabel(child);
    }
  });
  return found ?? (value != null && value !== '' ? String(value) : null);
}

function displaySelected(
  selected: unknown,
  multiple: boolean | undefined,
  children: ReactNode,
): ReactNode {
  if (!multiple) {
    return labelForValue(children, selected);
  }
  const arr = (selected as unknown[]) ?? [];
  if (!arr.length) return null;
  return arr.map((v, i) => (
    <span key={String(v)}>{i > 0 ? ', ' : ''}{labelForValue(children, v)}</span>
  ));
}

export type SelectProps = Omit<
  MuiSelectProps,
  'variant' | 'sx' | 'size'
> & {
  label?: ReactNode;
  /** @default 'outline' */
  variant?: SelectFieldVariant;
  /** @default 'md' */
  density?: ComponentHeightToken;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  loading?: boolean;
  /** Shown when `displayEmpty` and value is empty. */
  placeholder?: string;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
};

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(
  {
    label,
    variant = 'outline',
    density = 'md',
    helperText,
    errorMessage,
    invalid = false,
    loading = false,
    fullWidth = false,
    placeholder,
    disabled,
    readOnly,
    id: idProp,
    value,
    defaultValue,
    onChange,
    children,
    className,
    displayEmpty = true,
    MenuProps,
    inputProps,
    multiple,
    sx,
    renderValue: renderValueProp,
    ...restSelect
  },
  ref,
) {
  const reactId = useId();
  const selectId = idProp ?? `sparing-select-${reactId}`;
  const helperId = `${selectId}-helper`;
  const errorId = `${selectId}-error`;

  const pair = controlDensityPairing[density];
  const bodySize = typeScale[pair.body].fontSize;
  const transition = `${motionDuration.short} ${motionEasing.standard}`;

  const describedBy = useMemo(() => {
    const ids: string[] = [];
    if (helperText) ids.push(helperId);
    if (invalid && errorMessage) ids.push(errorId);
    return ids.length ? ids.join(' ') : undefined;
  }, [helperText, helperId, invalid, errorMessage, errorId]);

  const shellSx: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[2],
    minHeight: componentHeights[density],
    px: 0,
    py: 0,
    pr: spacing[1],
    borderRadius: radii.sm,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: shellBorder(variant, invalid),
    backgroundColor: shellBackground(variant, invalid),
    transition: `border-color ${transition}, background-color ${transition}, box-shadow ${transition}`,
    boxSizing: 'border-box',
    opacity: disabled ? 0.55 : 1,
    pointerEvents: disabled || loading ? 'none' : 'auto',
    '&:focus-within': {
      outline: `2px solid ${focusRingColor(invalid)}`,
      outlineOffset: 2,
      borderColor: invalid
        ? pc.red[500]
        : variant === 'outline'
          ? pc.blue[500]
          : shellBorder(variant, invalid),
    },
    ...(readOnly && {
      cursor: 'default',
      backgroundColor: pc.gray[50],
    }),
  };

  const spinnerPx = spinnerDiameterForComponent(density);

  const mergedMenuProps = {
    ...MenuProps,
    PaperProps: {
      ...MenuProps?.PaperProps,
      sx: [
        {
          borderRadius: radii.sm,
          mt: 0.5,
          maxHeight: 280,
          boxShadow: `0 10px 28px ${pc.gray[900]}22`,
          border: `1px solid ${pc.gray[200]}`,
        },
        ...(Array.isArray(MenuProps?.PaperProps?.sx)
          ? MenuProps.PaperProps.sx
          : MenuProps?.PaperProps?.sx
            ? [MenuProps.PaperProps.sx]
            : []),
      ],
    },
  };

  const mergedInputProps = {
    ...inputProps,
    id: selectId,
    'aria-invalid': invalid || undefined,
    'aria-describedby': describedBy,
    'aria-errormessage': invalid && errorMessage ? errorId : undefined,
    'aria-busy': loading || undefined,
    readOnly: readOnly || undefined,
  };

  const renderValueFn =
    renderValueProp ??
    (placeholder != null
      ? (selected: unknown) => {
          if (multiple) {
            const arr = selected as unknown[];
            if (!arr?.length) {
              return (
                <Box component="span" sx={{ color: pc.gray[400], fontSize: bodySize }}>
                  {placeholder}
                </Box>
              );
            }
            return (
              <Box component="span" sx={{ fontSize: bodySize, color: textStateColors.primary }}>
                {displaySelected(selected, multiple, children)}
              </Box>
            );
          }
          if (selected === '' || selected == null) {
            return (
              <Box component="span" sx={{ color: pc.gray[400], fontSize: bodySize }}>
                {placeholder}
              </Box>
            );
          }
          return (
            <Box component="span" sx={{ fontSize: bodySize, color: textStateColors.primary }}>
              {displaySelected(selected, multiple, children)}
            </Box>
          );
        }
      : undefined);

  const selectInnerSx: SxProps<Theme> = {
    flex: 1,
    minWidth: 0,
    minHeight: componentHeights[density],
    fontFamily: fontFamilies.sans,
    fontSize: bodySize,
    fontWeight: fontWeights.regular,
    color: textStateColors.primary,
    '&::before': { display: 'none' },
    '&::after': { display: 'none' },
    '& .MuiSelect-select': {
      display: 'flex',
      alignItems: 'center',
      minHeight: componentHeights[density],
      py: spacing[1],
      pl: SHELL_X[density],
      pr: spacing[5],
      boxSizing: 'border-box',
    },
    '& .MuiSelect-icon': {
      right: spacing[2],
      color: textStateColors.secondary,
    },
  };

  return (
    <Box
      ref={ref}
      className={className}
      sx={[
        { width: fullWidth ? '100%' : 'auto' },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {label != null && label !== false && (
        <Box
          component="label"
          htmlFor={selectId}
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
        <MuiSelect
          {...restSelect}
          variant="standard"
          disableUnderline
          fullWidth
          displayEmpty={displayEmpty}
          disabled={disabled || loading}
          multiple={multiple}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange as (e: SelectChangeEvent<unknown>) => void}
          inputProps={mergedInputProps}
          renderValue={renderValueFn}
          MenuProps={mergedMenuProps}
          sx={selectInnerSx}
        >
          {children}
        </MuiSelect>

        {loading && (
          <Loader2
            aria-hidden
            style={{
              width: spinnerPx,
              height: spinnerPx,
              flexShrink: 0,
              marginRight: spacing[2],
              animation: 'sparing-select-spin 0.75s linear infinite',
            }}
            strokeWidth={2.25}
          />
        )}
      </Box>

      <style>{'@keyframes sparing-select-spin { to { transform: rotate(360deg); } }'}</style>

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

export { default as SelectItem } from '@mui/material/MenuItem';
