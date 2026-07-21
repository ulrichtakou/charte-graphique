import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { textStateColors, typeScale } from '../../tokens/typography/typography-tokens';
import { Alert, type AlertSemantic, type AlertVariant } from './Alert';

const SEMANTICS = ['neutral', 'info', 'success', 'warning', 'danger'] as const satisfies readonly AlertSemantic[];
const VARIANTS = ['soft', 'outline', 'solid'] as const satisfies readonly AlertVariant[];

const meta: Meta<typeof Alert> = {
  title: 'Shared/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          "Alerte persistante et contextuelle dans la page. Contrairement au toast, l'alerte est inline ou en bannière et inclut toujours une action de fermeture manuelle.",
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    semantic: { control: 'inline-radio', options: SEMANTICS },
    variant: { control: 'inline-radio', options: VARIANTS },
    layout: { control: 'inline-radio', options: ['single-line', 'multiline'] },
    showIcon: { control: 'boolean' },
    ctaLabel: { control: 'text' },
    linkLabel: { control: 'text' },
    onCtaClick: { action: 'cta clicked' },
    onLinkClick: { action: 'link clicked' },
    onClose: { action: 'close clicked' },
  },
  args: {
    title: 'Annonce non publiée',
    message: "Votre annonce n'a pas été enregistrée. Veuillez réessayer.",
    semantic: 'warning',
    variant: 'soft',
    layout: 'multiline',
    showIcon: true,
    ctaLabel: 'Réessayer',
    linkLabel: 'En savoir plus',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};

export const ObjectiveAndUseCases: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 900 }}>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.secondary }}>
        Alert objective: persistent, contextual communication in-page. Typical cases: validation
        summary, environment warning, permissions issue, billing notice, migration notice.
      </Box>
      <Alert
        title="Moyen de paiement expirant"
        message="Votre moyen de paiement expire bientôt. Mettez-le à jour pour éviter toute interruption."
        semantic="warning"
        variant="soft"
        ctaLabel="Mettre à jour"
        onClose={() => undefined}
      />
    </Box>
  ),
};

export const VariantsAndSemantics: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4] }}>
      {VARIANTS.map((variant) => (
        <Box key={variant} sx={{ display: 'grid', gap: spacing[2] }}>
          <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.primary, textTransform: 'capitalize' }}>
            {variant}
          </Box>
          <Box sx={{ display: 'grid', gap: spacing[2] }}>
            {SEMANTICS.map((semantic) => (
              <Alert
                key={`${variant}-${semantic}`}
                title={`Alerte ${semantic}`}
                message="Message de retour contextuel pour l'utilisateur."
                semantic={semantic}
                variant={variant}
                onClose={() => undefined}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const StructureAndActions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 900 }}>
      <Alert
        title="Annonce en attente de validation"
        message="Votre annonce est en cours de vérification par notre équipe."
        semantic="info"
        ctaLabel="Voir l'annonce"
        linkLabel="Détails"
        onClose={() => undefined}
      />
      <Alert
        title="Informations complémentaires requises"
        message="Veuillez compléter votre profil agent pour publier des annonces."
        semantic="neutral"
        variant="outline"
        onClose={() => undefined}
      />
    </Box>
  ),
};

export const LayoutVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3] }}>
      <Alert
        title="Annonce expirée"
        message="Votre annonce a expiré."
        layout="single-line"
        semantic="warning"
        ctaLabel="Renouveler"
        linkLabel="Historique"
        onClose={() => undefined}
      />
      <Alert
        title="Annonce supprimée"
        message="Cette annonce a été retirée de la plateforme. Contactez le support si vous pensez qu'il s'agit d'une erreur."
        layout="multiline"
        semantic="danger"
        onClose={() => undefined}
      />
      <Alert
        title="Annonce publiée avec succès"
        message="Votre logement est maintenant visible par les locataires."
        showIcon={false}
        semantic="success"
        onClose={() => undefined}
      />
    </Box>
  ),
};

export const PositioningExamples: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[4], maxWidth: 980 }}>
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.primary }}>Intégrée dans la page</Box>
        <Box sx={{ border: '1px dashed #d1d5db', p: spacing[3], display: 'grid', gap: spacing[3] }}>
          <Box sx={{ fontSize: typeScale.sm.fontSize }}>Paramètres du profil agent</Box>
          <Alert
            title="Modifications non enregistrées"
            message="Enregistrez ou annulez avant de quitter cette section."
            semantic="warning"
            onClose={() => undefined}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'grid', gap: spacing[2] }}>
        <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.primary }}>Bannière haut de page</Box>
        <Alert
          title="Maintenance planifiée"
          message="La plateforme sera en lecture seule de 02h00 à 02h30 (heure de Yaoundé)."
          semantic="info"
          variant="outline"
          onClose={() => undefined}
        />
      </Box>
    </Box>
  ),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'grid', gap: spacing[3], maxWidth: 860 }}>
      <Box sx={{ fontSize: typeScale.sm.fontSize, color: textStateColors.secondary }}>
        Les alertes non urgentes utilisent `role="status"`. Les alertes urgentes utilisent `role="alert"`.
        Le bouton de fermeture doit être accessible au clavier.
      </Box>
      <Alert
        title="Exemple accessibilité (urgent)"
        message="Ce contenu critique doit être annoncé immédiatement aux lecteurs d'écran."
        semantic="danger"
        ctaLabel="Résoudre"
        onClose={() => undefined}
      />
    </Box>
  ),
};
