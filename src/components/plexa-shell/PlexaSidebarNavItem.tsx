import type { MouseEvent } from 'react';
import { Box, ListItemButton, Tooltip, Typography } from '@mui/material';
import type { PlexaNavItem } from './types';

export type PlexaSidebarNavItemProps = {
  item: PlexaNavItem;
  collapsed?: boolean;
  depth?: number;
};

export function PlexaSidebarNavItem({
  item,
  collapsed,
  depth = 0,
}: PlexaSidebarNavItemProps) {
  if (item.hidden) return null;
  const active = !!item.active;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!item.onClick) return;
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (isModifiedClick) return;
    event.preventDefault();
    item.onClick();
  };

  const buttonSx = {
    gap: 1.5,
    py: '7px',
    px: collapsed ? 0 : 'var(--plexa-s4)',
    pl: collapsed ? 0 : `calc(var(--plexa-s4) + ${depth * 16}px)`,
    borderRadius: 'var(--plexa-r-md)',
    fontSize: 13,
    fontWeight: 500,
    color: active ? 'var(--plexa-primary)' : 'var(--plexa-text2)',
    background: active ? 'var(--plexa-primary-faint)' : 'transparent',
    textDecoration: 'none',
    transition: 'all var(--plexa-t-fast)',
    justifyContent: collapsed ? 'center' : 'flex-start',
    minHeight: 36,
    '& svg': {
      width: 16,
      height: 16,
      flexShrink: 0,
      color: active ? 'var(--plexa-primary)' : 'var(--plexa-text2)',
    },
    '&:hover': {
      background: active ? 'var(--plexa-primary-faint)' : 'var(--plexa-bg3)',
      color: active ? 'var(--plexa-primary)' : 'var(--plexa-text1)',
      '& svg': {
        color: active ? 'var(--plexa-primary)' : 'var(--plexa-text1)',
      },
    },
  } as const;

  const buttonContent = (
    <>
      {item.icon}
      {!collapsed && (
        <Box
          component="span"
          sx={{
            flex: 1,
            minWidth: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {item.label}
        </Box>
      )}
      {!collapsed && item.badge != null && item.badge !== false ? (
        <Typography
          component="span"
          aria-label={
            typeof item.badge === 'number' || typeof item.badge === 'string'
              ? String(item.badge)
              : undefined
          }
          sx={{
            fontSize: 10,
            fontWeight: 600,
            padding: '1px 6px',
            borderRadius: 'var(--plexa-r-pill)',
            background: active
              ? 'var(--plexa-primary)'
              : 'var(--plexa-primary-faint)',
            color: active
              ? 'var(--plexa-text-inv)'
              : 'var(--plexa-primary)',
            flexShrink: 0,
            lineHeight: 1.4,
          }}
        >
          {item.badge}
        </Typography>
      ) : null}
      {!collapsed && item.comingSoon ? (
        <Box
          component="span"
          role="img"
          aria-label="Coming soon"
          title="Coming soon"
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: 'var(--plexa-warning)',
            flexShrink: 0,
          }}
        />
      ) : null}
    </>
  );

  const button = item.path ? (
    <ListItemButton
      component="a"
      href={item.path}
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      aria-label={collapsed ? item.label : undefined}
      sx={buttonSx}
    >
      {buttonContent}
    </ListItemButton>
  ) : (
    <ListItemButton
      onClick={item.onClick}
      aria-current={active ? 'page' : undefined}
      aria-label={collapsed ? item.label : undefined}
      sx={buttonSx}
    >
      {buttonContent}
    </ListItemButton>
  );

  const tooltipTitle = item.comingSoon ? `${item.label} · Coming soon` : item.label;

  return collapsed ? (
    <Tooltip title={tooltipTitle} placement="right">
      <Box component="span" sx={{ width: '100%', display: 'block' }}>
        {button}
      </Box>
    </Tooltip>
  ) : (
    button
  );
}
