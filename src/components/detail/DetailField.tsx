/**
 * Read-only detail field with optional Insights-style hover copy.
 */

import { useState, type ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { DetailCopyButton } from './DetailCopyButton';

export function DetailField({
  label,
  value,
  copyValue,
  displayNode,
}: {
  label: string;
  value?: string | number | null;
  copyValue?: string;
  displayNode?: ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const raw = value === null || value === undefined ? '' : String(value);
  const isEmpty = raw.trim() === '';
  const toCopy = copyValue ?? (isEmpty ? '' : raw);

  return (
    <Box>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mb: 0.5 }}
      >
        {label}
      </Typography>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          typography: 'body2',
          minHeight: 28,
        }}
      >
        <Box
          sx={{
            wordBreak: 'break-word',
            color: isEmpty ? 'text.disabled' : 'text.primary',
          }}
        >
          {isEmpty ? '—' : (displayNode ?? raw)}
        </Box>
        {!isEmpty && toCopy ? (
          <Box
            sx={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateX(0)' : 'translateX(-4px)',
              transition: 'opacity 150ms ease, transform 150ms ease',
              ml: 0.5,
            }}
          >
            <DetailCopyButton value={toCopy} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
