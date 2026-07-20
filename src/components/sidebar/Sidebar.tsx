import { Box, Drawer, List } from '@mui/material';
import type { ReactNode } from 'react';

export type SidebarProps = {
  open?: boolean;
  children?: ReactNode;
  width?: number;
};

/** Permanent drawer shell for navigation lists. */
export function Sidebar({ open = true, children, width = 240 }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          position: 'relative',
          borderRight: 1,
          borderColor: 'divider',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', py: 1 }}>
        <List disablePadding>{children}</List>
      </Box>
    </Drawer>
  );
}
