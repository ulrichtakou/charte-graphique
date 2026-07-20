import { Box, ListItemButton, Typography } from '@mui/material';
import { MoreVertical } from 'lucide-react';
import { forwardRef } from 'react';
import { PlexaAvatar } from '../avatar/Avatar';

export type PlexaProfileCardProps = {
  name: string;
  email?: string;
  initials?: string;
  avatarSrc?: string;
  collapsed?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

/**
 * Profile card displayed at the bottom of the sidebar.
 * Supports collapsed (avatar only) and expanded (avatar + identity) modes.
 */
export const PlexaProfileCard = forwardRef<
  HTMLDivElement,
  PlexaProfileCardProps
>(function PlexaProfileCard(
  { name, email, initials, avatarSrc, collapsed, onClick },
  ref,
) {
  return (
    <ListItemButton
      ref={ref as never}
      onClick={(e) => onClick?.(e as never)}
      sx={{
        gap: 1,
        py: 1.25,
        px: collapsed ? 0.5 : 1.5,
        borderRadius: 'var(--plexa-r-md)',
        justifyContent: collapsed ? 'center' : 'flex-start',
        background: 'transparent',
        '&:hover': { background: 'var(--plexa-bg3)' },
      }}
    >
      <PlexaAvatar
        size="sm"
        variant="primary"
        initials={initials}
        src={avatarSrc}
      />
      {!collapsed && (
        <>
          <Box sx={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--plexa-text1)',
                display: 'block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name}
            </Typography>
            {email && (
              <Typography
                component="span"
                sx={{
                  fontSize: 11,
                  color: 'var(--plexa-text3)',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {email}
              </Typography>
            )}
          </Box>
          <MoreVertical size={16} color="var(--plexa-text3)" aria-hidden />
        </>
      )}
    </ListItemButton>
  );
});
