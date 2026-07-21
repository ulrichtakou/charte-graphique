/**
 * YaoundéLogis — fondation de marque (source de vérité produit).
 *
 * Principes :
 * - **Confiance** : verts profonds, contrastes lisibles, badges d’état explicites.
 * - **Clarté** : hiérarchie typo pour titre d’annonce → prix → détails → légendes.
 * - **Proximité locale** : tons chauds (crème), pas de palette « SaaS bleu » générique.
 *
 * Les échelles dans `primitive-colors` sont calées sur ces ancres (500 / 800),
 * pas l’inverse : on évite de « peindre » un DS existant sans recalibrer les niveaux.
 */

export const yaoundeLogisBrand = {
  greenDark: '#0F3D2E',
  green: '#2E7D4E',
  gold: '#F2B705',
  cream: '#FFF5E0',
  grayLight: '#F5F6F7',
  grayDark: '#333333',
  white: '#FFFFFF',
  border: '#D1D5DB',
} as const;

export type YaoundeLogisBrandKey = keyof typeof yaoundeLogisBrand;

/** Cycle de vie d’une annonce — vocabulaire métier UI */
export const yaoundeLogisListingStatus = {
  disponible: {
    label: 'Disponible',
    background: '#E8F5E9',
    text: '#1B5E20',
    border: '#A5D6A7',
    /** Rôle sémantique DS */
    role: 'positive' as const,
  },
  reserve: {
    label: 'Réservé',
    background: '#FFF3E0',
    text: '#E65100',
    border: '#FFCC80',
    role: 'warning' as const,
  },
  loue: {
    label: 'Loué',
    background: '#ECEFF1',
    text: '#546E7A',
    border: '#CFD8DC',
    role: 'neutral' as const,
  },
  agentVerifie: {
    label: 'Agent vérifié',
    background: '#E8F5E9',
    text: yaoundeLogisBrand.greenDark,
    border: '#81C784',
    role: 'positive' as const,
  },
  nouveau: {
    label: 'NOUVEAU',
    background: yaoundeLogisBrand.gold,
    text: yaoundeLogisBrand.greenDark,
    border: yaoundeLogisBrand.gold,
    role: 'accent' as const,
  },
} as const;

export type YaoundeLogisListingStatusKey =
  keyof typeof yaoundeLogisListingStatus;

export const yaoundeLogisChannels = {
  whatsapp: '#25D366',
  phone: yaoundeLogisBrand.greenDark,
} as const;

export const yaoundeLogisSemantic = {
  link: yaoundeLogisBrand.green,
  linkHover: yaoundeLogisBrand.greenDark,
  price: yaoundeLogisBrand.green,
  heading: yaoundeLogisBrand.greenDark,
} as const;

const PREFIX = '--yaoundelogis';

function toKebab(key: string): string {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export function yaoundeLogisColorCssVar(key: YaoundeLogisBrandKey): string {
  return `${PREFIX}-${toKebab(key)}`;
}

export function yaoundeLogisBrandToStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of Object.keys(yaoundeLogisBrand) as YaoundeLogisBrandKey[]) {
    style[yaoundeLogisColorCssVar(key)] = yaoundeLogisBrand[key];
  }
  return style;
}

/** @deprecated Utiliser `yaoundeLogisListingStatus` */
export const yaoundeLogisStatus = Object.fromEntries(
  Object.entries(yaoundeLogisListingStatus).map(([k, v]) => [
    k,
    { background: v.background, text: v.text, border: v.border },
  ]),
) as Record<
  YaoundeLogisListingStatusKey,
  { background: string; text: string; border: string }
>;
