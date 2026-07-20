import { forwardRef, useId, type ReactNode } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  type RadioProps as MuiRadioProps,
  type RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontWeights, textStateColors, typeScale } from '../../tokens/typography/typography-tokens';

const pc = primitiveColors;

export type RadioVariant = 'default' | 'soft' | 'outlined';
export type RadioDensity = 'sm' | 'md' | 'lg';

export type RadioProps = Omit<MuiRadioProps, 'size' | 'color' | 'sx'> & {
  /** Visible label — use for almost all product UIs. */
  label?: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  invalid?: boolean;
  variant?: RadioVariant;
  density?: RadioDensity;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
};

const DENSITY_TO_MUI: Record<RadioDensity, MuiRadioProps['size']> = {
  sm: 'small',
  md: 'medium',
  lg: 'medium',
};

function radioSx(
  variant: RadioVariant,
  density: RadioDensity,
  invalid: boolean,
): SxProps<Theme> {
  const accent = invalid ? pc.red[600] : pc.blue[600];
  const iconUnchecked = invalid ? pc.red[400] : pc.gray[400];
  const base: SxProps<Theme> = {
    p: density === 'sm' ? spacing[1] : spacing[1.5],
    m: 0,
    ...(density === 'lg'
      ? {
          transform: 'scale(1.12)',
          transformOrigin: 'center',
        }
      : {}),
    color: iconUnchecked,
    '&.Mui-checked': { color: accent },
    '&.Mui-disabled': {
      color: pc.gray[300],
    },
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: alpha(pc.gray[900], 0.04),
      borderRadius: radii.sm,
    },
    '&.Mui-focusVisible': {
      outline: `2px solid ${accent}`,
      outlineOffset: 2,
    },
  };

  if (variant === 'soft') {
    return {
      ...base,
      '&.Mui-checked': {
        color: accent,
        backgroundColor: alpha(accent, 0.12),
        borderRadius: radii.sm,
      },
    };
  }

  if (variant === 'outlined') {
    return {
      ...base,
      borderRadius: radii.xs,
      '&:not(.Mui-checked):not(.Mui-disabled)': {
        outline: `2px solid ${invalid ? pc.red[400] : pc.gray[400]}`,
        outlineOffset: 1,
      },
      '&.Mui-disabled': {
        outline: 'none',
      },
    };
  }

  return base;
}

/**
 * Single radio option. Must be used inside a {@link RadioFieldGroup} (or MUI `RadioGroup`) so
 * `name` / selection state are shared. One choice per group.
 */
export const Radio = forwardRef<HTMLButtonElement, RadioProps>(function Radio(
  {
    label,
    description,
    helperText,
    invalid = false,
    variant = 'default',
    density = 'md',
    fullWidth = false,
    disabled,
    id: idProp,
    inputProps,
    sx,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const id = idProp ?? `sparing-radio-${autoId}`;
  const helperId = `${id}-helper`;

  const userDescribedBy = inputProps?.['aria-describedby'];
  const describedBy = [
    userDescribedBy,
    description ? `${id}-desc` : null,
    helperText ? helperId : null,
  ]
    .filter(Boolean)
    .join(' ');

  const mergedInputProps = {
    ...inputProps,
    id,
    'aria-invalid': invalid || undefined,
    ...(describedBy ? { 'aria-describedby': describedBy } : {}),
  };

  const control = (
    <MuiRadio
      ref={ref}
      disableRipple
      size={DENSITY_TO_MUI[density]}
      disabled={disabled}
      inputProps={mergedInputProps}
      sx={[radioSx(variant, density, invalid), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
      {...rest}
    />
  );

  if (label == null && description == null && helperText == null) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[Radio] Provide a visible `label` (or wire `aria-label` via inputProps) for accessibility.',
      );
    }
    return (
      <FormControl disabled={disabled} error={invalid} sx={{ display: 'inline-flex' }}>
        {control}
      </FormControl>
    );
  }

  const labelNode = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing[0.5], pt: 0.25 }}>
      <Box
        component="span"
        sx={{
          fontSize: typeScale.sm.fontSize,
          fontWeight: fontWeights.medium,
          color: disabled ? textStateColors.disabled : textStateColors.primary,
          lineHeight: 1.4,
        }}
      >
        {label}
      </Box>
      {description ? (
        <Box
          component="span"
          id={`${id}-desc`}
          sx={{
            fontSize: typeScale.xs.fontSize,
            color: textStateColors.secondary,
            lineHeight: 1.45,
          }}
        >
          {description}
        </Box>
      ) : null}
    </Box>
  );

  return (
    <FormControl
      component="div"
      disabled={disabled}
      error={invalid}
      sx={{
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'flex-start',
      }}
    >
      <FormControlLabel
        control={control}
        label={labelNode}
        sx={{
          alignItems: 'flex-start',
          m: 0,
          gap: spacing[1],
          width: fullWidth ? '100%' : 'auto',
          '& .MuiFormControlLabel-label': {
            width: fullWidth ? '100%' : 'auto',
          },
        }}
      />
      {helperText ? (
        <FormHelperText
          id={helperId}
          sx={{
            mx: 0,
            mt: spacing[1],
            ml: { xs: 0, sm: 6.5 },
          }}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
});

export type RadioFieldGroupProps = {
  legend: ReactNode;
  /** Passed to MUI `RadioGroup` — required for native grouping. */
  name: string;
  children: ReactNode;
  error?: boolean;
  helperText?: ReactNode;
  row?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: MuiRadioGroupProps['onChange'];
};

/**
 * `fieldset` + `legend` + `RadioGroup` for a mutually exclusive set of {@link Radio} options.
 */
export function RadioFieldGroup({
  legend,
  name,
  children,
  error = false,
  helperText,
  row = false,
  value,
  defaultValue,
  onChange,
}: RadioFieldGroupProps) {
  return (
    <FormControl
      component="fieldset"
      variant="standard"
      error={error}
      sx={{ width: '100%', alignItems: 'flex-start' }}
    >
      <Box
        component="legend"
        sx={{
          fontSize: typeScale.sm.fontSize,
          fontWeight: fontWeights.semibold,
          mb: spacing[2],
          color: textStateColors.primary,
          width: '100%',
        }}
      >
        {legend}
      </Box>
      <MuiRadioGroup
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        row={row}
        sx={{ width: '100%', gap: row ? spacing[2] : spacing[1], display: row ? 'flex' : 'grid' }}
      >
        {children}
      </MuiRadioGroup>
      {helperText ? (
        <FormHelperText sx={{ mx: 0, mt: spacing[1] }}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
}
