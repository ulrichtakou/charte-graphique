# YaoundéLogis — charte intégrée

La charte n’est **pas** une page à part : elle alimente tout le design system du repo.

## Ce qui a été aligné

| Couche | Fichiers | Effet |
|--------|----------|--------|
| Marque | `brand-foundation.ts` | Couleurs, statuts annonces, sémantique produit |
| Surfaces | `surface-tokens.ts` | Fonds / textes **clair + sombre** |
| Primitives | `primitive-colors.ts` | Échelles vert / gris / or recalées sur la marque |
| Sémantique | `semantic-colors.ts` | `primary` = vert (actions, liens DS) |
| Typo | `typography-tokens.ts` + presets contenu | Poppins, couleurs selon mode |
| Thème MUI | `create-yaoundelogis-mui-theme.ts` | `light` / `dark` |
| Provider | `YaoundeLogisThemeProvider` | light · dark · system + `data-theme` |
| Global CSS | `yaoundelogis-global.css` | Variables `--yaoundelogis-*` + `[data-theme=dark]` |
| Composant | `ListingStatusBadge` | Badges adaptés au mode |

## Mode sombre

- Fonds verts profonds (`#0A1F18` / `#122B22`), texte clair, or inchangé.
- Storybook : toolbar **Thème** (soleil / lune).
- Apps :

```ts
import {
  YaoundeLogisThemeProvider,
  createYaoundeLogisMuiTheme,
  yaoundeLogisDarkTheme,
} from 'charte-graphique';

<YaoundeLogisThemeProvider storageKey="mon-app-theme">
  {/* … */}
</YaoundeLogisThemeProvider>
```

## Storybook

- Toutes les stories **Shared/** utilisent le thème YaoundéLogis.
- **YaoundéLogis / Charte graphique** : vue d’ensemble + image de référence.
