import { forwardRef, useId, type ReactNode } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch as MuiSwitch,
  type SwitchProps as MuiSwitchProps,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontWeights, textStateColors, typeScale } from '../../tokens/typography/typography-tokens';

const pc = primitiveColors;

export type ToggleSwitchVariant = 'default' | 'soft' | 'outlined';
export type ToggleSwitchDensity = 'sm' | 'md' | 'lg';

export type SwitchProps = Omit<MuiSwitchProps, 'size' | 'color' | 'sx'> & {
  label?: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  invalid?: boolean;
  variant?: ToggleSwitchVariant;
  density?: ToggleSwitchDensity;
  /** Position of the label relative to the control. @default 'end' */
  labelPlacement?: 'end' | 'start';
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
};

const DENSITY_TO_MUI: Record<ToggleSwitchDensity, MuiSwitchProps['size']> = {
  sm: 'small',
  md: 'medium',
  lg: 'medium',
};

function switchRootSx(
  variant: ToggleSwitchVariant,
  density: ToggleSwitchDensity,
  invalid: boolean,
): SxProps<Theme> {
  const accent = invalid ? pc.red[600] : pc.blue[600];
  const trackOffBg = invalid ? alpha(pc.red[200], 0.9) : pc.gray[300];
  const trackOnBg = variant === 'soft' ? alpha(accent, 0.45) : accent;
  const thumbChecked = '#ffffff';
  const thumbOff = invalid ? pc.red[50] : '#ffffff';

  const scale = density === 'lg' ? 1.08 : 1;
  const rootScale =
    scale !== 1
      ? {
          transform: `scale(${scale})`,
          transformOrigin: 'left center',
        }
      : {};

  const base: SxProps<Theme> = {
    ...rootScale,
    m: 0,
    p: density === 'sm' ? spacing[0.5] : spacing[1],
    '& .MuiSwitch-track': {
      borderRadius: radii.full,
      backgroundColor: trackOffBg,
      opacity: 1,
      border: 'none',
    },
    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
      backgroundColor: trackOffBg,
    },
    '& .MuiSwitch-switchBase': {
      color: thumbOff,
      '&:not(.Mui-checked):hover': {
        backgroundColor: alpha(pc.gray[900], 0.04),
      },
      '&.Mui-focusVisible': {
        outline: `2px solid ${accent}`,
        outlineOffset: 2,
        borderRadius: radii.sm,
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: thumbChecked,
      '&:hover': {
        backgroundColor: alpha(accent, 0.12),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: trackOnBg,
      opacity: 1,
    },
    '& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track': {
      backgroundColor: pc.gray[200],
      opacity: 1,
    },
    '& .MuiSwitch-switchBase.Mui-disabled.Mui-checked + .MuiSwitch-track': {
      backgroundColor: alpha(accent, 0.35),
    },
    '& .MuiSwitch-switchBase.Mui-disabled': {
      color: pc.gray[100],
    },
  };

  if (variant === 'outlined') {
    return {
      ...base,
      '& .MuiSwitch-track': {
        borderRadius: radii.full,
        backgroundColor: 'transparent',
        opacity: 1,
        border: `2px solid ${invalid ? pc.red[400] : pc.gray[400]}`,
      },
      '& .MuiSwitch-switchBase + .MuiSwitch-track': {
        backgroundColor: 'transparent',
      },
      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: alpha(accent, 0.22),
        borderColor: accent,
        opacity: 1,
      },
    };
  }

  return base;
}

/**
 * Toggle switch for binary settings that apply immediately (on/off). Prefer over `Checkbox` when
 * the control is not part of a multi-select or explicit “agree” pattern.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    label,
    description,
    helperText,
    invalid = false,
    variant = 'default',
    density = 'md',
    labelPlacement = 'end',
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
  const id = idProp ?? `sparing-switch-${autoId}`;
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
    role: 'switch' as const,
    'aria-invalid': invalid || undefined,
    ...(describedBy ? { 'aria-describedby': describedBy } : {}),
  };

  const control = (
    <MuiSwitch
      ref={ref}
      disableRipple
      size={DENSITY_TO_MUI[density]}
      disabled={disabled}
      inputProps={mergedInputProps}
      sx={[switchRootSx(variant, density, invalid), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
      {...rest}
    />
  );

  if (label == null && description == null && helperText == null) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[Switch] Provide a visible `label` or `inputProps["aria-label"]` for accessibility.',
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
        labelPlacement={labelPlacement}
        sx={{
          alignItems: 'flex-start',
          m: 0,
          gap: spacing[1],
          width: fullWidth ? '100%' : 'auto',
          justifyContent: labelPlacement === 'start' ? 'space-between' : 'flex-start',
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
            ml: { xs: 0, sm: labelPlacement === 'end' ? 6.5 : 0 },
          }}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
});
