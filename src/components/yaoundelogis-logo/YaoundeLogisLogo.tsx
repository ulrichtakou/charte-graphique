import { Box, Stack, Typography, useTheme } from '@mui/material';
import { yaoundeLogisBrand } from '../../tokens/yaoundelogis/brand-foundation';
import { yaoundeLogisSurfacesByMode, type YaoundeLogisThemeMode } from '../../tokens/yaoundelogis/surface-tokens';
import { fontWeights } from '../../tokens/typography/typography-tokens';

export type YaoundeLogisLogoProps = {
  size?: 'sm' | 'md' | 'lg';
};

/** Wordmark + mark de marque YaoundéLogis — clair / sombre selon le thème MUI actif. */
export function YaoundeLogisLogo({ size = 'md' }: YaoundeLogisLogoProps) {
  const theme = useTheme();
  const mode = theme.palette.mode as YaoundeLogisThemeMode;
  const surfaces = yaoundeLogisSurfacesByMode[mode];
  const markColor = mode === 'dark' ? surfaces.heading : yaoundeLogisBrand.greenDark;
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.85 : 1;

  const markSize = 30 * scale;
  // Fond derrière la découpe de la maison — se fond dans la surface qui porte le logo (header, carte…).
  const cutout = surfaces.bgRaised;

  return (
    <Stack direction="row" alignItems="center" spacing={1.25 * scale}>
      <Box
        component="svg"
        viewBox="0 0 100 100"
        sx={{ width: markSize, height: markSize, flexShrink: 0 }}
      >
        {/* Repère de localisation dont le corps dessine une maison en réserve */}
        <path
          d="M50,92 C34,67 22,55 22,38 A28,28 0 1,1 78,38 C78,55 66,67 50,92 Z"
          fill={markColor}
        />
        <polygon points="50,25 65,40 35,40" fill={cutout} />
        <rect x={39} y={40} width={22} height={15} fill={cutout} />
      </Box>
      <Typography component="span" sx={{ fontSize: (size === 'lg' ? 28 : 22) * scale, fontWeight: fontWeights.bold, lineHeight: 1 }}>
        <Box component="span" sx={{ color: markColor }}>
          Yaoundé
        </Box>
        <Box component="span" sx={{ color: yaoundeLogisBrand.gold }}>
          Logis
        </Box>
      </Typography>
    </Stack>
  );
}
