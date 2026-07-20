# Design system — `@croki-digital/shared-ui`

Documentation of the foundations already in place: goals, structure, and **rationale** for the choices made. Detailed values live in code (`src/tokens/`) and in **Storybook** (tokens + components).

---

## 1. Principles

| Principle | Choice | Rationale |
|-----------|--------|-----------|
| **Layers** | Primitives → semantic → components | Primitives stay stable when the product says “error” or “primary”; semantic maps UI meaning onto those hues; components consume either layer as needed. |
| **Units** | `rem` for typography and spacing (except occasional `1px`) | Tied to the document root size: better behavior with zoom / user preferences (accessibility). |
| **CSS prefix** | `--sparing-*` | Custom properties grouped by domain (`--sparing-primitive-*`, `--sparing-semantic-*`, `--sparing-typography-*`, `--sparing-spacing-*`) for predictable theming and overrides. |
| **Components** | Often **MUI** wrappers + in-house tokens | MUI speeds up accessibility and patterns (focus, ARIA); tokens keep palette and grid consistent across monorepo apps. |

---

## 2. Color

### 2.1 Primitives (`primitiveColors`)

- **Eight hues**: `blue`, `violet`, `green`, `gray`, `red`, `yellow`, `orange`, `cyan`.
- **50 → 950 scale** per hue (light → dark).

**Rationale**: Model aligned with widely used design systems (e.g. Tailwind-style scales)—easy to explain to designers, extend (new hue = same grid), and document in Storybook. Gray is neutral; other hues carry meaning or accent.

**API**: `resolvePrimitiveColor`, `primitiveColorCssVarName`, `primitiveColorsToRootStyleObject()`.

### 2.2 Semantic (`semanticColors`)

Naming: **`property.role.tone.state`**.

| Dimension | Values | Role |
|-----------|--------|------|
| **Property** | `text`, `icon`, `border`, `background` | Where the color applies (contrast and use differ by surface). |
| **Role** | `primary`, `neutral`, `negative`, `positive` | Meaning / action (blue, gray, red, green via `SEMANTIC_ROLE_HUE`). |
| **Tone** | `accent`, `subtle` | Strong vs quiet emphasis (different base steps per property). |
| **State** | `default`, `hover`, `press`, `focus`, `disabled` | Interaction consistency; `disabled` forces a shared **gray** reference for every property. |

**Rationale**: Splitting **role** and **property** avoids brittle names like `errorBorderHover`; the `BASE_STEP` grid (steps per property × tone) keeps relative contrast consistent; darkening one step on the same hue for `hover` / `press` gives predictable feedback without hand-maintaining many hex values.

**API**: `resolveSemanticColor`, `semanticColorCssVarName`, `semanticColorsToRootStyleObject()`, `flattenSemanticColors()` (audits / tables).

---

## 3. Typography

### 3.1 Families

- **Sans**: DM Sans first, then a system stack (Apple, Segoe, Roboto, etc.).
- **Mono**: `ui-monospace` + common dev faces + `monospace`.

**Rationale**: A readable brand face for UI; system fallbacks for performance (no blocking FOIT) and cross-platform coverage; mono aligned with code / technical strings.

### 3.2 Scale (`typeScale`)

- Sizes in **`rem`**, with documented px equivalents at a 16px root (3xs → 5xl).

**Rationale**: Modular scale (not strictly linear) for headings, body, and meta; `rem` respects the user’s browser text settings.

### 3.3 Weights (`fontWeights`)

- 400, 500, 600, 700 (regular → bold).

**Rationale**: Four steps are enough for UI hierarchy without bloating font payloads.

### 3.4 Styles (`fontStyles`)

- `normal`, `italic`, `oblique`.

**Rationale**: Standard CSS semantics—true italics vs oblique slant when the family has no dedicated italic.

### 3.5 Line height & letter spacing

- **Line height**: `tight` (1.25), `normal` (1.5), `relaxed` (1.75), unitless (multiple of font size).
- **Letter spacing**: `tight` / `normal` / `wide` in `em`.

**Rationale**: Unitless line-height scales correctly when size changes; 1.5 is a common readability baseline for body; `tight` for short headings; `em` on tracking keeps proportion when size changes.

### 3.6 Presets

- **`headingPresets` (h1–h6)**: size + weight + leading + tracking (larger headings, tighter lines, bold/semibold by level).
- **`bodyTextPresets`**: `large` (larger + relaxed leading), `base`, `small`, `xsmall`.

**Rationale**: Single source for “what an H3 looks like” or dense body copy; limits visual drift between apps.

### 3.7 Text state colors (`textStateColors`)

- Neutrals (gray), link (blue), error (red), warning (orange 700), success (green 700), info (cyan 700), disabled (light gray).

**Rationale**: Readable semantics on light backgrounds; orange/cyan at 700 for contrast closer to success/error without hue confusion; reuses **primitives** so copy stays tied to the palette.

**API**: `resolveHeadingStyle`, `resolveBodyTextStyle`, `typographyRootStyleObject()`.

---

## 4. Spacing (`spacing`)

- Values in **`rem`** plus `px` for hairlines and half-steps (`0.5` = 2px at a 16px root).
- **4px grid**: step `1` = 0.25rem = 4px; whole steps align to 4px multiples in px terms.

**Rationale**: 4px grid keeps design and CSS alignment simple; numbered scale familiar from utility-first CSS; `rem` matches typography for accessibility.

**API**: `spacing`, `spacingCssVar`, `spacingRootStyleObject()`.

---

## 5. Components (overview)

React library exported from `@croki-digital/shared-ui`: **Button**, **Card**, **EmptyState**, **LoadingState**, **ConfirmDialog**, **StatusBadge**, **FormSection**, **Header**, **Sidebar**, **AppLayout**, and more. Most lean on **MUI** for behavior; the **tokens** above align color, type, and spacing across screens and future components.

**Storybook**: configured under `libs/.storybook`; token stories under `Design System/Tokens/*`, components in their respective folders.

---

## 6. Quick consumption

```ts
import {
  primitiveColors,
  resolveSemanticColor,
  spacing,
  fontFamilies,
  typeScale,
  textStateColors,
} from '@croki-digital/shared-ui';
```

For a global theme, combine `*RootStyleObject()` / `*ToRootStyleObject()` on a root container (or `:root`), then use `*CssVar*` helpers in CSS.

---

## 7. Evolution

- **New hue**: extend `PRIMITIVE_HUES` + add an entry in `primitiveColors`; touch semantic only if a **new role** is required.
- **Heading size change**: prefer updating `headingPresets` or `typeScale` instead of editing components one by one.
- **New spacing need**: extend `spacing` and `ORDERED_SPACING_KEYS` so Storybook and display order stay consistent.
