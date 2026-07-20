import { useState, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Eye, EyeOff } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { controlDensityPairing, iconSizes } from '../../tokens/ui-sizes/ui-sizes-tokens';
import { Input, type InputProps } from './Input';

const pc = primitiveColors;

function focusRing(invalid: boolean) {
  return invalid ? pc.red[600] : pc.blue[600];
}

export type PasswordFieldProps = Omit<InputProps, 'type'> & {
  /** @default 'current-password' */
  autoComplete?: string;
};

export function PasswordField({
  endAdornment,
  density = 'md',
  invalid = false,
  autoComplete = 'current-password',
  ...rest
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const pair = controlDensityPairing[density];
  const iconRem = iconSizes[pair.icon];

  const toggle = (
    <Box
      component="button"
      type="button"
      tabIndex={-1}
      onClick={() => setVisible((v) => !v)}
      aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
      aria-pressed={visible}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: spacing[1],
        m: 0,
        border: 'none',
        background: 'transparent',
        borderRadius: '0.25rem',
        color: pc.gray[500],
        cursor: 'pointer',
        flexShrink: 0,
        '&:focus-visible': {
          outline: `2px solid ${focusRing(invalid)}`,
          outlineOffset: 1,
        },
        '& svg': { width: iconRem, height: iconRem },
      }}
    >
      {visible ? (
        <EyeOff aria-hidden strokeWidth={2.25} />
      ) : (
        <Eye aria-hidden strokeWidth={2.25} />
      )}
    </Box>
  );

  const mergedEnd: ReactNode = (
    <>
      {endAdornment}
      {toggle}
    </>
  );

  return (
    <Input
      {...rest}
      density={density}
      invalid={invalid}
      type={visible ? 'text' : 'password'}
      autoComplete={autoComplete}
      endAdornment={mergedEnd}
    />
  );
}
