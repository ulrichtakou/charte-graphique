import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CssBaseline,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import {
  Bed,
  Car,
  Heart,
  MapPin,
  Shield,
  ShowerHead,
  Target,
  Users,
} from 'lucide-react';
import {
  yaoundeLogisBrand,
  yaoundeLogisListingStatus,
} from './brand-foundation';
import {
  yaoundeLogisContentPresets,
  resolveYaoundeLogisContentStyle,
} from './yaoundelogis-typography';
import { fontWeights } from '../typography/typography-tokens';
import { ListingStatusBadge } from '../../components/listing-status';
import { createYaoundeLogisMuiTheme } from '../../theme/create-yaoundelogis-mui-theme';

const theme = createYaoundeLogisMuiTheme();

function YaoundeLogisLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.85 : 1;
  return (
    <Stack direction="row" alignItems="center" spacing={1.5 * scale}>
      <Box
        sx={{
          width: 40 * scale,
          height: 36 * scale,
          position: 'relative',
        }}
      >
        <Box
          component="span"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 4 * scale,
            width: 28 * scale,
            height: 22 * scale,
            border: `3px solid ${yaoundeLogisBrand.greenDark}`,
            borderTop: 'none',
            borderRadius: '0 0 4px 4px',
          }}
        />
        <Box
          component="span"
          sx={{
            position: 'absolute',
            top: 2 * scale,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: `${14 * scale}px solid transparent`,
            borderRight: `${14 * scale}px solid transparent`,
            borderBottom: `${12 * scale}px solid ${yaoundeLogisBrand.gold}`,
          }}
        />
      </Box>
      <Typography
        component="span"
        sx={{
          fontSize: (size === 'lg' ? 28 : 22) * scale,
          fontWeight: fontWeights.bold,
          lineHeight: 1,
        }}
      >
        <Box component="span" sx={{ color: yaoundeLogisBrand.greenDark }}>
          Yaoundé
        </Box>
        <Box component="span" sx={{ color: yaoundeLogisBrand.gold }}>
          Logis
        </Box>
      </Typography>
    </Stack>
  );
}

function BrandShowcase() {
  const colorRows: { name: string; hex: string; note: string }[] = [
    { name: 'Vert foncé', hex: yaoundeLogisBrand.greenDark, note: 'Titres, logo' },
    { name: 'Vert', hex: yaoundeLogisBrand.green, note: 'Actions primaires' },
    { name: 'Or', hex: yaoundeLogisBrand.gold, note: 'Accent marque' },
    { name: 'Crème', hex: yaoundeLogisBrand.cream, note: 'Fond chaud' },
    { name: 'Gris clair', hex: yaoundeLogisBrand.grayLight, note: 'Sections' },
    { name: 'Texte', hex: yaoundeLogisBrand.grayDark, note: 'Corps de texte' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 960, mx: 'auto' }}>
        <Stack spacing={4}>
          <Box>
            <YaoundeLogisLogo size="lg" />
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Trouvez le logement qui vous correspond
            </Typography>
          </Box>

          <Box
            component="img"
            src="/yaoundelogis-charte-reference.png"
            alt="Référence charte graphique YaoundéLogis"
            sx={{
              width: '100%',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          />

          <Section title="Couleurs">
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {colorRows.map((c) => (
                <Box key={c.hex} sx={{ width: 140 }}>
                  <Box
                    sx={{
                      height: 72,
                      bgcolor: c.hex,
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    {c.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {c.hex}
                  </Typography>
                  <Typography variant="caption" display="block">
                    {c.note}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Section>

          <Section title="Typographie — presets contenu">
            <Stack spacing={2}>
              {(
                Object.keys(yaoundeLogisContentPresets) as Array<
                  keyof typeof yaoundeLogisContentPresets
                >
              ).map((key) => (
                <Box key={key}>
                  <Typography sx={resolveYaoundeLogisContentStyle(key)}>
                    {key} — Appartement 2 chambres · 120 000 FCFA / mois
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Section>

          <Section title="Boutons">
            <Stack direction="row" flexWrap="wrap" gap={2} alignItems="center">
              <Button variant="contained">Rechercher</Button>
              <Button variant="outlined">Se connecter</Button>
              <Link href="#" underline="hover">
                Voir toutes les annonces →
              </Link>
            </Stack>
          </Section>

          <Section title="Badges / statuts (ListingStatusBadge)">
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {(
                Object.keys(yaoundeLogisListingStatus) as Array<
                  keyof typeof yaoundeLogisListingStatus
                >
              ).map((status) => (
                <ListingStatusBadge key={status} status={status} />
              ))}
            </Stack>
          </Section>

          <Section title="Champs de recherche">
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.5}>
              <TextField placeholder="Quartier" size="small" fullWidth />
              <TextField placeholder="Type de bien" size="small" fullWidth />
              <TextField placeholder="Budget max (FCFA)" size="small" fullWidth />
              <Button variant="contained" sx={{ px: 3, flexShrink: 0 }}>
                Rechercher
              </Button>
            </Stack>
          </Section>

          <Section title="Carte annonce (exemple)">
            <Card sx={{ maxWidth: 320 }}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    height: 180,
                    bgcolor: yaoundeLogisBrand.grayLight,
                    backgroundImage:
                      'linear-gradient(135deg, #e8f0ea 0%, #c5d9cc 100%)',
                  }}
                />
                <ListingStatusBadge
                  status="nouveau"
                  sx={{ position: 'absolute', top: 12, left: 12 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    bgcolor: 'white',
                    borderRadius: '50%',
                    p: 0.75,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Heart size={18} color={yaoundeLogisBrand.greenDark} />
                </Box>
              </Box>
              <CardContent>
                <Typography sx={resolveYaoundeLogisContentStyle('listingTitle')}>
                  Appartement 2 chambres à Jouvence
                </Typography>
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5 }}>
                  <MapPin size={14} />
                  <Typography sx={resolveYaoundeLogisContentStyle('listingLocation')}>
                    Yaoundé, Jouvence
                  </Typography>
                </Stack>
                <Typography sx={{ ...resolveYaoundeLogisContentStyle('listingPrice'), mt: 1 }}>
                  120 000 FCFA / mois
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 1.5 }}>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Bed size={16} />
                    <Typography variant="caption">2</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <ShowerHead size={16} />
                    <Typography variant="caption">1</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Car size={16} />
                    <Typography variant="caption">Parking</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Section>

          <Section title="Valeurs de marque">
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
              <ValueCard
                icon={<Shield size={28} color={yaoundeLogisBrand.green} />}
                title="Fiabilité"
                text="Annonces claires et agents vérifiés."
              />
              <ValueCard
                icon={<Target size={28} color={yaoundeLogisBrand.green} />}
                title="Simplicité"
                text="Recherche rapide par quartier et budget."
              />
              <ValueCard
                icon={<Users size={28} color={yaoundeLogisBrand.green} />}
                title="Proximité"
                text="Une offre pensée pour Yaoundé."
              />
            </Stack>
          </Section>
        </Stack>
      </Box>
    </ThemeProvider>
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
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: yaoundeLogisBrand.grayLight,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2, color: yaoundeLogisBrand.greenDark }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card sx={{ flex: 1, p: 2 }}>
      {icon}
      <Typography fontWeight={600} sx={{ mt: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </Card>
  );
}

const meta: Meta<typeof BrandShowcase> = {
  title: 'YaoundéLogis / Charte graphique',
  component: BrandShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Charte officielle YaoundéLogis — couleurs, typo Poppins, composants UI immobilier.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BrandShowcase>;

export const Overview: Story = {
  render: () => <BrandShowcase />,
};
