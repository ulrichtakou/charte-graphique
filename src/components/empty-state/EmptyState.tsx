import { Box, Button, Typography } from '@mui/material';
import { Inbox } from 'lucide-react';
import type { ComponentType } from 'react';

export type EmptyStateProps = {
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
  icon?: ComponentType<{ className?: string }>;
};

export function EmptyState({
  title,
  description,
  action,
  icon: Icon = Inbox,
}: EmptyStateProps) {
  return (
    <Box
      sx={{
        py: 6,
        px: 3,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box
        sx={{
          color: 'text.secondary',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': { width: 48, height: 48 },
        }}
      >
        <Icon />
      </Box>
      <Typography variant="h6">{title}</Typography>
      {description ? (
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
          {description}
        </Typography>
      ) : null}
      {action ? (
        <Button variant="contained" onClick={action.onClick}>
          {action.label}
        </Button>
      ) : null}
    </Box>
  );
}
