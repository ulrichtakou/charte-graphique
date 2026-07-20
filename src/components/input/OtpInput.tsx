import { useCallback, useEffect, useId, useRef, type ClipboardEvent, type KeyboardEvent } from 'react';
import { Box, FormHelperText, Typography, useTheme, alpha } from '@mui/material';

const OTP_SLOT_PATTERN = /^\d*$/;

const sanitizeOtpValue = (input: string) => input.replace(/\D/g, '');

export type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  length?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
};

export const OtpInput = ({
  value,
  onChange,
  onBlur,
  length = 8,
  autoFocus = false,
  disabled = false,
  error = false,
  helperText,
  label = 'Verification code',
}: OtpInputProps) => {
  const theme = useTheme();
  const labelId = useId();
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const safeValue = value ?? '';

  const digits = Array.from({ length }, (_, index) => safeValue[index] ?? '');

  const updateValue = useCallback(
    (nextValue: string) => {
      onChange(sanitizeOtpValue(nextValue).slice(0, length));
    },
    [length, onChange],
  );

  const focusSlot = (index: number) => {
    const targetIndex = Math.max(0, Math.min(index, length - 1));
    inputRefs.current[targetIndex]?.focus();
  };

  const handleSlotChange = (index: number, nextChar: string) => {
    if (!OTP_SLOT_PATTERN.test(nextChar)) return;

    const nextDigits = [...digits];
    nextDigits[index] = nextChar.slice(-1);
    const nextValue = nextDigits.join('').slice(0, length);
    updateValue(nextValue);

    if (nextChar && index < length - 1) focusSlot(index + 1);
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Backspace') {
      event.preventDefault();
      if (digits[index]) {
        const nextDigits = [...digits];
        nextDigits[index] = '';
        updateValue(nextDigits.join(''));
        return;
      }
      if (index > 0) {
        const nextDigits = [...digits];
        nextDigits[index - 1] = '';
        updateValue(nextDigits.join(''));
        focusSlot(index - 1);
      }
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusSlot(index - 1);
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusSlot(index + 1);
    }
  };

  const handlePaste = (index: number, event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = sanitizeOtpValue(event.clipboardData.getData('text'));
    if (!pasted) return;

    const nextDigits = [...digits];
    for (let offset = 0; offset < pasted.length && index + offset < length; offset += 1) {
      nextDigits[index + offset] = pasted[offset] ?? '';
    }
    updateValue(nextDigits.join(''));

    const nextFocusIndex = Math.min(index + pasted.length, length - 1);
    focusSlot(nextFocusIndex);
  };

  useEffect(() => {
    if (!autoFocus) return;
    inputRefs.current[0]?.focus();
  }, [autoFocus]);

  const slotSx = {
    width: '100%',
    minWidth: 0,
    height: { xs: 48, sm: 52 },
    borderRadius: 'var(--plexa-r-md, 8px)',
    border: `1px solid ${error ? theme.palette.error.main : theme.palette.divider}`,
    bgcolor: 'background.paper',
    color: 'text.primary',
    textAlign: 'center' as const,
    fontSize: { xs: '1.125rem', sm: '1.25rem' },
    fontWeight: 600,
    fontFamily: theme.typography.fontFamily,
    letterSpacing: '0.04em',
    outline: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    '&:focus': {
      borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
      boxShadow: `0 0 0 3px ${alpha(error ? theme.palette.error.main : theme.palette.primary.main, 0.16)}`,
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  };

  return (
    <Box>
      <Typography
        id={labelId}
        component="label"
        variant="body2"
        fontWeight={500}
        sx={{ display: 'block', mb: 1.5 }}
      >
        {label}
      </Typography>

      <Box
        component="input"
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        value={safeValue}
        onChange={(event) => updateValue(event.target.value)}
        onBlur={onBlur}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
        sx={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          width: 1,
          height: 1,
          p: 0,
          m: 0,
          border: 0,
        }}
      />

      <Box
        role="group"
        aria-labelledby={labelId}
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`,
          gap: { xs: 0.75, sm: 1 },
        }}
      >
        {digits.map((digit, index) => (
          <Box
            key={index}
            component="input"
            ref={(element: HTMLInputElement | null) => {
              inputRefs.current[index] = element;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            disabled={disabled}
            aria-label={`${label} digit ${index + 1}`}
            aria-invalid={error}
            onChange={(event) => handleSlotChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            onPaste={(event) => handlePaste(index, event)}
            onFocus={(event) => event.target.select()}
            onBlur={onBlur}
            sx={slotSx}
          />
        ))}
      </Box>

      {helperText ? (
        <FormHelperText error={error} sx={{ mt: 1.5, mx: 0 }}>
          {helperText}
        </FormHelperText>
      ) : null}
    </Box>
  );
};
