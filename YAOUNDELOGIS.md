# YaoundéLogis — charte intégrée

La charte n’est **pas** une page à part : elle alimente tout le design system du repo.

## Ce qui a été aligné

| Couche | Fichiers | Effet |
|--------|----------|--------|
| Marque | `brand-foundation.ts` | Couleurs, statuts annonces, sémantique produit |
| Primitives | `primitive-colors.ts` | Échelles vert / gris / or recalées sur la marque |
| Sémantique | `semantic-colors.ts` | `primary` = vert (actions, liens DS) |
| Typo | `typography-tokens.ts` | Poppins, liens verts, texte `#333` |
| Thème MUI | `create-yaoundelogis-mui-theme.ts` | Storybook + apps |
| Global CSS | `yaoundelogis-global.css` | Variables `--yaoundelogis-*` |
| Composant | `ListingStatusBadge` | Badges Disponible / Réservé / Loué… |

## Storybook

- Toutes les stories **Shared/** utilisent le thème YaoundéLogis par défaut.
- **YaoundéLogis / Charte graphique** : vue d’ensemble + image de référence.

## Suite possible

- Logo SVG officiel, composants `PropertyCard`, header, bottom nav
- Remplacer ou retirer les tokens **Plexa** legacy si tu n’en as plus besoin
