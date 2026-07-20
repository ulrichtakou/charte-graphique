import { AppBar, Toolbar, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export type HeaderProps = {
  title?: string;
  children?: ReactNode;
};

/** Top app bar shell; pair with `Sidebar` + `AppLayout` for full chrome. */
export function Header({ title, children }: HeaderProps) {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
    >
      <Toolbar>
        {title ? (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        ) : (
          <span style={{ flexGrow: 1 }} />
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
}
