import type { ReactNode } from 'react';

export type PlexaNavItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  path?: string;
  badge?: ReactNode;
  /** Yellow dot indicator (e.g. coming soon). */
  comingSoon?: boolean;
  active?: boolean;
  onClick?: () => void;
  /** Optional nested children (sub-nav). */
  children?: PlexaNavItem[];
  /** Hide the item entirely (e.g. role-based). */
  hidden?: boolean;
};

export type PlexaNavSection = {
  id: string;
  /** Optional uppercase mono label above the section. */
  label?: string;
  items: PlexaNavItem[];
};
