import { Box, Divider, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export type FormSectionProps = {
  title: string;
  children: ReactNode;
  showDivider?: boolean;
  /** When &gt; 1, lays out direct children in a responsive grid. */
  columns?: number;
};

export function FormSection({
  title,
  children,
  showDivider = true,
  columns = 1,
}: FormSectionProps) {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns:
            columns > 1
              ? {
                  xs: '1fr',
                  sm: `repeat(${Math.min(columns, 2)}, 1fr)`,
                  md: `repeat(${columns}, 1fr)`,
                }
              : '1fr',
        }}
      >
        {children}
      </Box>
      {showDivider ? <Divider sx={{ mt: 3 }} /> : null}
    </Box>
  );
}
