import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  ChevronLeft,
  Menu as MenuIcon,
  Moon,
  Sun,
} from 'lucide-react';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { usePlexaThemeMode } from '../../theme/PlexaThemeProvider';
import type { PlexaNavItem, PlexaNavSection } from './types';
import { PlexaSidebarNavItem } from './PlexaSidebarNavItem';

const DRAWER_WIDTH = 240;
const DRAWER_WIDTH_COLLAPSED = 64;
const TOPNAV_HEIGHT = 56;

export type PlexaConsoleShellProps = {
  /** App name displayed in the top-left wordmark (e.g. "Plexa One", "Insights"). */
  wordmark: string;
  /** Highlighted suffix (e.g. ".One" or "Analyse"). */
  wordmarkAccent?: string;
  /** Optional version pill displayed next to the wordmark. */
  version?: string;
  /** Optional logo (image, svg, or react node), shown when the sidebar is expanded. */
  logo?: ReactNode;
  /** Optional logo shown when the sidebar is collapsed (e.g. a favicon). */
  logoCollapsed?: ReactNode;
  /** Primary navigation (top of sidebar). */
  primaryNav: PlexaNavSection[];
  /** Optional secondary nav, rendered at the bottom of the sidebar above the profile. */
  secondaryNav?: PlexaNavSection[];
  /** Optional search slot rendered below the sidebar brand row. */
  sidebarSearch?: ReactNode;
  /** User profile slot (avatar + name + email + actions). */
  profile?: ReactNode;
  /** Title displayed at the left of the topbar (e.g. current page name). */
  topbarTitle?: ReactNode;
  /** Header actions (notifications, search, etc.). */
  headerActions?: ReactNode;
  /** Sidebar collapsed state — uncontrolled if `onCollapsedChange` is omitted. */
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Persistence key for the collapsed flag (default: 'plexa-sidebar-collapsed'). */
  storageKey?: string;
  /** When set, logo + wordmark navigate to the app home/dashboard. */
  onBrandClick?: () => void;
  children: ReactNode;
};

/**
 * Full console shell: sticky topnav + collapsible sidebar + main content
 * with the dot matrix backdrop coming from plexa-global.css.
 *
 * Layout: 12-col bento happens inside the `children` slot.
 */
export function PlexaConsoleShell(props: PlexaConsoleShellProps) {
  const {
    wordmark,
    wordmarkAccent,
    version,
    logo,
    logoCollapsed,
    primaryNav,
    secondaryNav,
    sidebarSearch,
    profile,
    topbarTitle,
    headerActions,
    collapsed: controlledCollapsed,
    defaultCollapsed,
    onCollapsedChange,
    storageKey = 'plexa-sidebar-collapsed',
    onBrandClick,
    children,
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { effectiveMode, toggleColorMode } = usePlexaThemeMode();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [uncontrolledCollapsed, setUncontrolledCollapsed] = useState<boolean>(
    () => {
      if (defaultCollapsed != null) return defaultCollapsed;
      if (typeof window === 'undefined') return false;
      try {
        return window.localStorage.getItem(storageKey) === 'true';
      } catch {
        return false;
      }
    },
  );
  const collapsed = controlledCollapsed ?? uncontrolledCollapsed;

  useEffect(() => {
    if (controlledCollapsed != null) return;
    try {
      window.localStorage.setItem(storageKey, String(collapsed));
    } catch {
      /* noop */
    }
  }, [collapsed, controlledCollapsed, storageKey]);

  const setCollapsed = useCallback(
    (next: boolean) => {
      if (onCollapsedChange) onCollapsedChange(next);
      if (controlledCollapsed == null) setUncontrolledCollapsed(next);
    },
    [controlledCollapsed, onCollapsedChange],
  );

  const drawerWidth = collapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH;

  const renderSection = useCallback(
    (section: PlexaNavSection) => (
      <Box key={section.id} sx={{ mb: 2 }}>
        {section.label && !collapsed && (
          <Typography
            component="span"
            sx={{
              fontFamily: 'var(--plexa-font-mono)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--plexa-text3)',
              px: 'var(--plexa-s4)',
              py: 'var(--plexa-s2)',
              display: 'block',
            }}
          >
            {section.label}
          </Typography>
        )}
        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: '2px', px: '6px' }}>
          {section.items.map((item: PlexaNavItem) => (
            <ListItem key={item.id} disablePadding sx={{ width: '100%' }}>
              <PlexaSidebarNavItem item={item} collapsed={collapsed} />
            </ListItem>
          ))}
        </List>
      </Box>
    ),
    [collapsed],
  );

  const sidebarContent = useMemo(
    () => (
      <Box
        component="nav"
        aria-label="Main navigation"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--plexa-bg2)',
          color: 'var(--plexa-text1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'space-between',
            px: collapsed ? 0 : 'var(--plexa-s4)',
            height: TOPNAV_HEIGHT,
            borderBottom: '1px solid var(--plexa-border)',
            flexShrink: 0,
          }}
        >
          {collapsed && logoCollapsed && (
            <Box
              component={onBrandClick ? 'button' : 'div'}
              type={onBrandClick ? 'button' : undefined}
              aria-label={onBrandClick ? 'Go to dashboard' : undefined}
              onClick={
                onBrandClick
                  ? () => {
                      setMobileOpen(false);
                      onBrandClick();
                    }
                  : undefined
              }
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                background: 'transparent',
                padding: 0,
                margin: 0,
                color: 'inherit',
                cursor: onBrandClick ? 'pointer' : 'default',
                borderRadius: 'var(--plexa-r-md)',
                '&:focus-visible': onBrandClick
                  ? {
                      outline: '2px solid var(--plexa-primary)',
                      outlineOffset: 2,
                    }
                  : undefined,
              }}
            >
              {logoCollapsed}
            </Box>
          )}
          {!collapsed && (
            <Box
              component={onBrandClick ? 'button' : 'div'}
              type={onBrandClick ? 'button' : undefined}
              aria-label={onBrandClick ? 'Go to dashboard' : undefined}
              onClick={
                onBrandClick
                  ? () => {
                      setMobileOpen(false);
                      onBrandClick();
                    }
                  : undefined
              }
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                border: 'none',
                background: 'transparent',
                padding: 0,
                margin: 0,
                color: 'inherit',
                cursor: onBrandClick ? 'pointer' : 'default',
                borderRadius: 'var(--plexa-r-md)',
                minWidth: 0,
                textAlign: 'left',
                '&:focus-visible': onBrandClick
                  ? {
                      outline: '2px solid var(--plexa-primary)',
                      outlineOffset: 2,
                    }
                  : undefined,
              }}
            >
              {logo}
              <Typography
                component="span"
                sx={{
                  fontFamily: 'var(--plexa-font-display)',
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--plexa-text1)',
                }}
              >
                {wordmark}
                {wordmarkAccent && (
                  <Box
                    component="span"
                    sx={{
                      color: 'var(--plexa-primary)',
                      transition: 'color var(--plexa-t-slow)',
                    }}
                  >
                    {wordmarkAccent}
                  </Box>
                )}
              </Typography>
              {version && (
                <Box
                  component="span"
                  sx={{
                    fontFamily: 'var(--plexa-font-mono)',
                    fontSize: 10,
                    color: 'var(--plexa-text3)',
                    border: '1px solid var(--plexa-border-mid)',
                    padding: '2px 7px',
                    borderRadius: 'var(--plexa-r-pill)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {version}
                </Box>
              )}
            </Box>
          )}
          {!isMobile && (
            <Tooltip title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
              <IconButton
                onClick={() => setCollapsed(!collapsed)}
                size="small"
                sx={{ color: 'var(--plexa-text2)' }}
              >
                <ChevronLeft
                  size={18}
                  style={{
                    transform: collapsed ? 'rotate(180deg)' : 'none',
                    transition: 'transform 220ms ease',
                  }}
                />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {sidebarSearch && !collapsed && (
          <Box sx={{ px: 'var(--plexa-s4)', pt: 'var(--plexa-s3)' }}>
            {sidebarSearch}
          </Box>
        )}

        <Box sx={{ flex: 1, overflow: 'auto', py: 2 }}>
          {primaryNav.map(renderSection)}
        </Box>

        {secondaryNav && (
          <Box sx={{ pt: 1, pb: 1, borderTop: '1px solid var(--plexa-border)' }}>
            {secondaryNav.map(renderSection)}
          </Box>
        )}

        {profile && (
          <Box
            sx={{
              borderTop: '1px solid var(--plexa-border)',
              p: collapsed ? '8px' : '12px',
            }}
          >
            {profile}
          </Box>
        )}
      </Box>
    ),
    [
      collapsed,
      isMobile,
      logo,
      logoCollapsed,
      onBrandClick,
      primaryNav,
      profile,
      renderSection,
      secondaryNav,
      sidebarSearch,
      setCollapsed,
      version,
      wordmark,
      wordmarkAccent,
    ],
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      {/* Top navigation bar */}
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: { xs: 0, md: `${drawerWidth}px` },
          height: TOPNAV_HEIGHT,
          zIndex: 200,
          background: 'var(--plexa-nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--plexa-border)',
          transition:
            'background var(--plexa-t-slow), border-color var(--plexa-t-slow), left 250ms cubic-bezier(.4,0,.2,1)',
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            height: TOPNAV_HEIGHT,
            minHeight: `${TOPNAV_HEIGHT}px !important`,
            px: 'var(--plexa-s8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <IconButton
            onClick={() => setMobileOpen((v) => !v)}
            edge="start"
            sx={{
              display: { md: 'none' },
              color: 'var(--plexa-text1)',
            }}
            aria-label="Open navigation"
          >
            <MenuIcon size={22} />
          </IconButton>

          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', minWidth: 0, overflow: 'hidden' }}>
            {topbarTitle ? (
              typeof topbarTitle === 'string' ? (
                <Typography
                  component="span"
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    fontFamily: 'var(--plexa-font-mono)',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--plexa-text2)',
                  }}
                >
                  {topbarTitle}
                </Typography>
              ) : (
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {topbarTitle}
                </Box>
              )
            ) : null}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--plexa-s2)',
              flexShrink: 0,
            }}
          >
            {headerActions}
            <Tooltip title="Toggle theme">
              <IconButton
                onClick={toggleColorMode}
                size="small"
                aria-label="Toggle theme"
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--plexa-r-md)',
                  border: '1px solid var(--plexa-border-mid)',
                  background: 'var(--plexa-bg2)',
                  color: 'var(--plexa-text2)',
                  '&:hover': {
                    background: 'var(--plexa-bg3)',
                    color: 'var(--plexa-text1)',
                  },
                }}
              >
                {effectiveMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Box>

      {/* Sidebar */}
      <Box
        component="aside"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          zIndex: 210,
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              border: 'none',
              borderRight: '1px solid var(--plexa-border)',
            },
          }}
        >
          {sidebarContent}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: '1px solid var(--plexa-border)',
              borderRadius: 0,
              overflowX: 'hidden',
              transition: 'width 250ms cubic-bezier(.4,0,.2,1)',
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          pt: `${TOPNAV_HEIGHT}px`,
          transition: 'margin 250ms cubic-bezier(.4,0,.2,1)',
        }}
      >
        <Box sx={{ p: { xs: 'var(--plexa-s4)', md: 'var(--plexa-s8)' } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
