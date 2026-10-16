import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Stack, Typography, useTheme } from '@mui/material';
import { yaoundeLogisBrand } from '../../tokens/yaoundelogis/brand-foundation';
import { yaoundeLogisSurfacesByMode, type YaoundeLogisThemeMode } from '../../tokens/yaoundelogis/surface-tokens';

const pinDrop = keyframes`
  0%   { transform: translateY(-60px); opacity: 0; }
  40%  { opacity: 1; }
  58%  { transform: translateY(0); }
  70%  { transform: translateY(-8px); }
  82%  { transform: translateY(0); }
  90%  { opacity: 1; transform: translateY(0); }
  97%  { opacity: 0; transform: translateY(-18px); }
  100% { opacity: 0; transform: translateY(-60px); }
`;

const ringPulse = keyframes`
  0%   { transform: scale(0.3); opacity: 0.6; }
  70%  { transform: scale(2.4); opacity: 0; }
  100% { transform: scale(2.4); opacity: 0; }
`;

const PinGroup = styled.g`
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: ${pinDrop} 2.6s cubic-bezier(0.34, 1.3, 0.64, 1) infinite;
`;

const RingCircle = styled.circle`
  transform-box: fill-box;
  transform-origin: center;
  animation: ${ringPulse} 2.6s ease-out infinite;
  animation-delay: 1.45s;
`;

export type YaoundeLogisLoaderProps = {
  /** Taille du repère en pixels. */
  size?: number;
  /** Texte optionnel affiché sous l'animation. */
  label?: string;
  /** Centre le loader sur toute la hauteur disponible (pages plein écran). */
  fullHeight?: boolean;
};

/**
 * Loader de marque — le repère YaoundéLogis tombe et marque l'emplacement en boucle.
 * À utiliser pour tous les états de chargement de l'app (pages, listes, écran de démarrage).
 */
export function YaoundeLogisLoader({ size = 64, label, fullHeight }: YaoundeLogisLoaderProps) {
  const theme = useTheme();
  const mode = theme.palette.mode as YaoundeLogisThemeMode;
  const surfaces = yaoundeLogisSurfacesByMode[mode];
  const markColor = mode === 'dark' ? surfaces.heading : yaoundeLogisBrand.greenDark;
  const cutout = surfaces.bg;

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ py: 6, minHeight: fullHeight ? '100vh' : undefined }}
    >
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ overflow: 'visible' }} role="img" aria-label="Chargement">
        <RingCircle cx={50} cy={90} r={6} fill="none" stroke={yaoundeLogisBrand.gold} strokeWidth={2.5} />
        <PinGroup>
          <path
            d="M50,92 C34,67 22,55 22,38 A28,28 0 1,1 78,38 C78,55 66,67 50,92 Z"
            fill={markColor}
          />
          <polygon points="50,25 65,40 35,40" fill={cutout} />
          <rect x={39} y={40} width={22} height={15} fill={cutout} />
        </PinGroup>
      </svg>
      {label && (
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      )}
    </Stack>
  );
}
