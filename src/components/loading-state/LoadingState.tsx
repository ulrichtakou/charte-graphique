import { Box, CircularProgress, Typography } from '@mui/material';

export type LoadingStateProps = {
  message?: string;
  fullScreen?: boolean;
  size?: number;
};

export function LoadingState({
  message,
  fullScreen,
  size = 40,
}: LoadingStateProps) {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 2,
      }}
    >
      <CircularProgress size={size} />
      {message ? (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      ) : null}
    </Box>
  );

  if (fullScreen) {
    return (
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          zIndex: (theme) => theme.zIndex.modal,
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
}
