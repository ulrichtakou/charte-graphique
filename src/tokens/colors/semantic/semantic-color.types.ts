import type { PrimitiveColorRef, PrimitiveHue } from '../primitives/primitive-colors';

/**
 * Semantic naming: `property.role.tone.state`
 *
 * - **Property**: surface the color applies to.
 * - **Role**: meaning (primary, neutral, negative, positive).
 * - **Tone**: emphasis (accent vs subtle).
 * - **State**: interaction or resting; diagram lists hover, press, focus, disabled.
 *   `default` is the resting appearance (required for base styles).
 */

export const SEMANTIC_PROPERTIES = [
  'text',
  'icon',
  'border',
  'background',
] as const;

export type SemanticProperty = (typeof SEMANTIC_PROPERTIES)[number];

export const SEMANTIC_ROLES = [
  'primary',
  'neutral',
  'negative',
  'positive',
] as const;

export type SemanticRole = (typeof SEMANTIC_ROLES)[number];

export const SEMANTIC_TONES = ['accent', 'subtle'] as const;

export type SemanticTone = (typeof SEMANTIC_TONES)[number];

/** Diagram: hover, press, focus, disabled. `default` = resting / non-interaction. */
export const SEMANTIC_STATES = [
  'default',
  'hover',
  'press',
  'focus',
  'disabled',
] as const;

export type SemanticState = (typeof SEMANTIC_STATES)[number];

export type SemanticPrimitiveRef = PrimitiveColorRef;

export type SemanticColorTree = {
  [P in SemanticProperty]: {
    [R in SemanticRole]: {
      [T in SemanticTone]: {
        [S in SemanticState]: SemanticPrimitiveRef;
      };
    };
  };
};

export type SemanticRoleHueMap = Record<SemanticRole, PrimitiveHue>;
