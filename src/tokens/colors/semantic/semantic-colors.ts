import {
  COLOR_SCALE_STEPS,
  primitiveColors,
  resolvePrimitiveColor,
  type ColorScaleStep,
  type PrimitiveColorRef,
  type PrimitiveHue,
} from '../primitives/primitive-colors';
import type {
  SemanticColorTree,
  SemanticPrimitiveRef,
  SemanticProperty,
  SemanticRole,
  SemanticRoleHueMap,
  SemanticState,
  SemanticTone,
} from './semantic-color.types';
import {
  SEMANTIC_PROPERTIES,
  SEMANTIC_ROLES,
  SEMANTIC_STATES,
  SEMANTIC_TONES,
} from './semantic-color.types';

const CSS_VAR_PREFIX = '--sparing-semantic';

/** Role → primitive hue used for non-disabled tokens. */
export const SEMANTIC_ROLE_HUE: SemanticRoleHueMap = {
  primary: 'blue',
  neutral: 'gray',
  negative: 'red',
  positive: 'green',
};

/**
 * Default scale step per property × tone (resting / `default` state).
 * Accent = stronger; subtle = softer.
 */
const BASE_STEP: Record<
  SemanticProperty,
  Record<SemanticTone, ColorScaleStep>
> = {
  text: { accent: 800, subtle: 600 },
  icon: { accent: 700, subtle: 500 },
  border: { accent: 500, subtle: 300 },
  background: { accent: 500, subtle: 100 },
};

function darker(step: ColorScaleStep, by: number): ColorScaleStep {
  const i = COLOR_SCALE_STEPS.indexOf(step);
  return COLOR_SCALE_STEPS[Math.min(10, i + by)];
}

function ref(hue: PrimitiveHue, step: ColorScaleStep): SemanticPrimitiveRef {
  return { hue, step };
}

function disabledRef(property: SemanticProperty): SemanticPrimitiveRef {
  switch (property) {
    case 'text':
    case 'icon':
      return ref('gray', 400);
    case 'border':
      return ref('gray', 200);
    case 'background':
      return ref('gray', 100);
  }
}

function resolveStateRef(
  property: SemanticProperty,
  role: SemanticRole,
  tone: SemanticTone,
  state: SemanticState,
): SemanticPrimitiveRef {
  if (state === 'disabled') {
    return disabledRef(property);
  }

  const hue = SEMANTIC_ROLE_HUE[role];
  const base = BASE_STEP[property][tone];

  switch (state) {
    case 'default':
      return ref(hue, base);
    case 'hover':
      return ref(hue, darker(base, 1));
    case 'press':
      return ref(hue, darker(base, property === 'background' ? 2 : 2));
    case 'focus':
      if (property === 'border') {
        return ref(hue, 600);
      }
      return ref(
        hue,
        darker(base, property === 'background' ? 1 : 1),
      );
    default:
      return ref(hue, base);
  }
}

function buildSemanticColorTree(): SemanticColorTree {
  const tree = {} as SemanticColorTree;

  for (const property of SEMANTIC_PROPERTIES) {
    tree[property] = {} as SemanticColorTree[SemanticProperty];
    for (const role of SEMANTIC_ROLES) {
      tree[property][role] = {} as SemanticColorTree[SemanticProperty][SemanticRole];
      for (const tone of SEMANTIC_TONES) {
        tree[property][role][tone] = {} as SemanticColorTree[SemanticProperty][SemanticRole][SemanticTone];
        for (const state of SEMANTIC_STATES) {
          tree[property][role][tone][state] = resolveStateRef(
            property,
            role,
            tone,
            state,
          );
        }
      }
    }
  }

  return tree;
}

export const semanticColors: SemanticColorTree = buildSemanticColorTree();

export function formatSemanticTokenPath(
  property: SemanticProperty,
  role: SemanticRole,
  tone: SemanticTone,
  state: SemanticState,
): string {
  return `${property}.${role}.${tone}.${state}`;
}

export function semanticColorCssVarName(
  property: SemanticProperty,
  role: SemanticRole,
  tone: SemanticTone,
  state: SemanticState,
): string {
  return `${CSS_VAR_PREFIX}-${property}-${role}-${tone}-${state}`;
}

export function resolveSemanticColor(
  property: SemanticProperty,
  role: SemanticRole,
  tone: SemanticTone,
  state: SemanticState,
): string {
  const refObj = semanticColors[property][role][tone][state];
  return resolvePrimitiveColor(refObj);
}

export function semanticColorsToRootStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const property of SEMANTIC_PROPERTIES) {
    for (const role of SEMANTIC_ROLES) {
      for (const tone of SEMANTIC_TONES) {
        for (const state of SEMANTIC_STATES) {
          const key = semanticColorCssVarName(property, role, tone, state);
          style[key] = resolveSemanticColor(property, role, tone, state);
        }
      }
    }
  }
  return style;
}

export type FlatSemanticColorRow = {
  path: string;
  cssVar: string;
  primitive: PrimitiveColorRef;
  hex: string;
};

export function flattenSemanticColors(): FlatSemanticColorRow[] {
  const rows: FlatSemanticColorRow[] = [];
  for (const property of SEMANTIC_PROPERTIES) {
    for (const role of SEMANTIC_ROLES) {
      for (const tone of SEMANTIC_TONES) {
        for (const state of SEMANTIC_STATES) {
          const primitive = semanticColors[property][role][tone][state];
          rows.push({
            path: formatSemanticTokenPath(property, role, tone, state),
            cssVar: semanticColorCssVarName(property, role, tone, state),
            primitive,
            hex: primitiveColors[primitive.hue][primitive.step],
          });
        }
      }
    }
  }
  return rows;
}
