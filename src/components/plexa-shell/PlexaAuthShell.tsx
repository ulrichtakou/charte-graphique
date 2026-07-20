import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Moon, Sun } from 'lucide-react';
import type { ReactNode } from 'react';
import { usePlexaThemeMode } from '../../theme/PlexaThemeProvider';

export type PlexaAuthShellProps = {
  wordmark: string;
  wordmarkAccent?: string;
  /** Tagline / pitch below the wordmark on the illustration panel. */
  tagline?: string;
  /** Illustration node (SVG component, image, etc.). */
  illustration?: ReactNode;
  /** Optional copyright / footer text on the illustration panel. */
  illustrationFooter?: ReactNode;
  /** The form / right panel. */
  children: ReactNode;
};

/**
 * Split-view auth layout matching Plexa One DS v5.
 *  - Left panel: surface `bg3` with illustration + branding.
 *  - Right panel: white surface with form, theme toggle in the top-right.
 */
export function PlexaAuthShell(props: PlexaAuthShellProps) {
  const {
    wordmark,
    wordmarkAccent,
    tagline,
    illustration,
    illustrationFooter,
    children,
  } = props;
  const { effectiveMode, toggleColorMode } = usePlexaThemeMode();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        zIndex: 1,
        background: 'var(--plexa-bg)',
      }}
    >
      {/* Theme toggle floating top-right */}
      <Box sx={{ position: 'absolute', top: 'var(--plexa-s4)', right: 'var(--plexa-s4)', zIndex: 10 }}>
        <Tooltip title="Toggle theme">
          <IconButton
            onClick={toggleColorMode}
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

      {/* Illustration panel */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '46%',
          minHeight: '100vh',
          background: 'var(--plexa-bg3)',
          color: 'var(--plexa-text1)',
          p: 'var(--plexa-s10)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box>
          <Typography
            component="div"
            sx={{
              fontFamily: 'var(--plexa-font-display)',
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--plexa-text1)',
              mb: 'var(--plexa-s3)',
            }}
          >
            {wordmark}
            {wordmarkAccent && (
              <Box component="span" sx={{ color: 'var(--plexa-primary)' }}>
                {wordmarkAccent}
              </Box>
            )}
          </Typography>
          {tagline && (
            <Typography
              component="p"
              sx={{
                fontSize: 15,
                color: 'var(--plexa-text2)',
                maxWidth: 380,
                lineHeight: 1.6,
              }}
            >
              {tagline}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 'var(--plexa-s8)',
          }}
        >
          {illustration}
        </Box>

        {illustrationFooter && (
          <Typography
            component="span"
            sx={{
              fontFamily: 'var(--plexa-font-mono)',
              fontSize: 11,
              color: 'var(--plexa-text3)',
              letterSpacing: '0.06em',
            }}
          >
            {illustrationFooter}
          </Typography>
        )}
      </Box>

      {/* Form panel */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--plexa-bg2)',
          p: { xs: 'var(--plexa-s5)', md: 'var(--plexa-s10)' },
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 440 }}>{children}</Box>
      </Box>
    </Box>
  );
}
