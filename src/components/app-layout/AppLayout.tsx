import { Box } from '@mui/material';
import type { ReactNode } from 'react';

export type AppLayoutProps = {
  sidebar?: ReactNode;
  header?: ReactNode;
  children?: ReactNode;
};

/** Basic flex shell: optional header, optional sidebar, main content. */
export function AppLayout({ sidebar, header, children }: AppLayoutProps) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {header}
      <Box sx={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {sidebar}
        <Box component="main" sx={{ flexGrow: 1, minWidth: 0, p: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
