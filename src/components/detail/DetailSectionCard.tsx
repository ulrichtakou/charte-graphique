/**
 * Insights/Calendar-style section card with optional hover "Edit information".
 */

import type { ReactNode } from 'react';
import { Box, Paper, Typography, type PaperProps } from '@mui/material';
import { Pencil } from 'lucide-react';

export interface DetailSectionCardProps {
  children: ReactNode;
  onEdit?: () => void;
  editLabel?: string;
  sx?: PaperProps['sx'];
}

export function DetailSectionCard({
  children,
  onEdit,
  editLabel = 'Edit information',
  sx,
}: DetailSectionCardProps) {
  return (
    <Paper
      sx={{
        p: 3,
        mb: 2,
        border: 1,
        borderColor: 'divider',
        boxShadow: 'none',
        position: 'relative',
        '&:hover .section-edit-btn': { opacity: 1 },
        ...sx,
      }}
    >
      {onEdit ? (
        <Box
          className="section-edit-btn"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            alignItems: 'center',
            opacity: 0,
            transition: 'opacity 150ms ease',
            cursor: 'pointer',
            '&:hover .edit-info-label': {
              maxWidth: '110px',
              opacity: 1,
              marginRight: '6px',
            },
          }}
          onClick={onEdit}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onEdit();
            }
          }}
        >
          <Typography
            className="edit-info-label"
            variant="caption"
            sx={{
              maxWidth: 0,
              opacity: 0,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              color: 'text.secondary',
              fontSize: '0.72rem',
              transition:
                'max-width 200ms ease, opacity 200ms ease, margin-right 200ms ease',
            }}
          >
            {editLabel}
          </Typography>
          <Box
            sx={{
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              p: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Pencil size={13} strokeWidth={2} />
          </Box>
        </Box>
      ) : null}
      {children}
    </Paper>
  );
}

export function DetailSectionTitle({ children }: { children: ReactNode }) {
  return (
    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2, pr: 6 }}>
      {children}
    </Typography>
  );
}
