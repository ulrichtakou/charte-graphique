import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {
  COLOR_SCALE_STEPS,
  PRIMITIVE_HUES,
  primitiveColors,
} from '../tokens/colors/primitives/primitive-colors';
import { typeScale, fontWeights } from '../tokens/typography/typography-tokens';
import { spacing } from '../tokens/spacing/spacing-tokens';
import { radii } from '../tokens/radius/radius-tokens';
import { Button } from '../components/button/Button';
import { Badge } from '../components/badge/Badge';
import { Alert } from '../components/alert/Alert';

const TYPE_SAMPLES = ['sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
const RADIUS_SAMPLES = ['xs', 'sm', 'md', 'lg', 'full'] as const;

export function App() {
  const [showInfo, setShowInfo] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        px: { xs: 2, md: 4 },
        py: 4,
        maxWidth: 1100,
        mx: 'auto',
      }}
    >
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight={700}>
          Charte graphique
        </Typography>
        <Typography color="text.secondary">
          Design system — tokens, typographie et composants
        </Typography>
      </Stack>

      <Section title="Couleurs primitives">
        <Stack spacing={2}>
          {PRIMITIVE_HUES.map((hue) => (
            <Box key={hue}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, textTransform: 'capitalize' }}
              >
                {hue}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.75}>
                {COLOR_SCALE_STEPS.map((step) => (
                  <Box key={step} sx={{ width: 64, textAlign: 'center' }}>
                    <Box
                      sx={{
                        height: 40,
                        borderRadius: 1,
                        bgcolor: primitiveColors[hue][step],
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {step}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section title="Typographie">
        <Stack spacing={1.5}>
          {TYPE_SAMPLES.map((name) => {
            const scale = typeScale[name];
            return (
              <Box key={name}>
                <Typography
                  sx={{
                    fontSize: scale.fontSize,
                    fontWeight: fontWeights.semibold,
                  }}
                >
                  {name} — The quick brown fox
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {scale.fontSize} ({scale.pxEquivalent}px)
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Section>

      <Section title="Spacing & radius">
        <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mb: 2 }}>
          {([2, 3, 4, 6, 8] as const).map((key) => (
            <Box key={key} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: spacing[key],
                  height: spacing[key],
                  bgcolor: 'primary.main',
                  borderRadius: 0.5,
                  mx: 'auto',
                }}
              />
              <Typography variant="caption">
                {key} ({spacing[key]})
              </Typography>
            </Box>
          ))}
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {RADIUS_SAMPLES.map((key) => (
            <Box
              key={key}
              sx={{
                width: 72,
                height: 48,
                bgcolor: 'action.hover',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: radii[key],
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Typography variant="caption">{key}</Typography>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section title="Composants">
        <Stack spacing={2}>
          <Stack direction="row" flexWrap="wrap" gap={1.5} alignItems="center">
            <Button variant="contained">Primary</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Badge label="Badge" semantic="info" />
            <Badge label="Success" semantic="success" />
          </Stack>
          {showInfo ? (
            <Alert
              message="Exemple d'alerte info"
              semantic="info"
              onClose={() => setShowInfo(false)}
            />
          ) : null}
          {showSuccess ? (
            <Alert
              message="Exemple d'alerte succès"
              semantic="success"
              onClose={() => setShowSuccess(false)}
            />
          ) : null}
        </Stack>
      </Section>
    </Box>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}
