import {
  plexaBrandToStyleObject,
  plexaThemedColorsToStyleObject,
  type PlexaThemeMode,
} from './plexa-colors';
import { plexaSpacingToStyleObject } from './plexa-spacing';
import { plexaRadiiToStyleObject } from './plexa-radius';
import { plexaFontFamilyToStyleObject } from './plexa-typography';
import { plexaMotionToStyleObject } from './plexa-motion';

export * from './plexa-colors';
export * from './plexa-spacing';
export * from './plexa-radius';
export * from './plexa-typography';
export * from './plexa-motion';

/** All non-themed Plexa tokens (brand colors, spacing, radius, typography, motion). */
export function plexaStaticTokensToStyleObject(): Record<string, string> {
  return {
    ...plexaBrandToStyleObject(),
    ...plexaSpacingToStyleObject(),
    ...plexaRadiiToStyleObject(),
    ...plexaFontFamilyToStyleObject(),
    ...plexaMotionToStyleObject(),
  };
}

/** Themed tokens (surfaces, text, shadows, primary) — call once per theme. */
export function plexaThemedTokensToStyleObject(
  mode: PlexaThemeMode,
): Record<string, string> {
  return plexaThemedColorsToStyleObject(mode);
}
