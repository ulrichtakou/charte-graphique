# Design system — YaoundéLogis (`charte-graphique`)

Charte graphique du site **YaoundéLogis** — plateforme immobilière à Yaoundé.  
Slogan : *« Trouvez le logement qui vous correspond »*.

Ce dépôt n’est pas une palette « générique » recolorée : les **primitives**, la **sémantique**, la **typographie** et le **thème MUI** sont calés sur la marque et le métier (annonces, confiance, contact local).

---

## 1. Principes

| Principe | Choix | Pourquoi |
|----------|--------|----------|
| **Marque** | Vert `#2E7D4E` / `#0F3D2E`, or `#F2B705`, neutres `#F5F6F7` / `#333` | Identité immo locale, pas de bleu SaaS par défaut |
| **Couches** | Primitives → sémantique → composants | Les boutons et champs lisent la sémantique ; les badges annonces lisent `yaoundeLogisListingStatus` |
| **Typo** | **Poppins**, presets contenu (`listingTitle`, `listingPrice`, …) | Hiérarchie lisible sur mobile (titres d’annonces, prix en FCFA) |
| **États métier** | Disponible, Réservé, Loué, Agent vérifié, NOUVEAU | Couleurs dédiées + composant `ListingStatusBadge` |
| **CSS** | `--sparing-*` (échelle DS) + `--yaoundelogis-*` (marque) | Compat composants existants + variables produit |

---

## 2. Fondation marque

Fichier source : `src/tokens/yaoundelogis/brand-foundation.ts`

- Ancres couleur officielles
- `yaoundeLogisListingStatus` — cycle de vie annonce
- `yaoundeLogisSemantic` — liens, titres, prix

---

## 3. Couleurs (échelle DS)

### Primitives

- **Vert** : ancré sur `#2E7D4E` (500) et `#0F3D2E` (800)
- **Gris** : ancré sur `#F5F6F7` (50) et `#333333` (800)
- **Jaune / or** : ancré sur `#F2B705` (500)

### Sémantique

- **`primary` → hue `green`** (plus `blue`)
- Rôles : `primary`, `neutral`, `negative`, `positive` — même modèle `property.role.tone.state`

---

## 4. Typographie

- Police : **Poppins** (`fontFamilies.sans`)
- Liens : vert marque (`textStateColors.link`)
- Presets contenu : `yaoundeLogisContentPresets` + `resolveYaoundeLogisContentStyle()`

---

## 5. Thème & Storybook

- Thème MUI : `createYaoundeLogisMuiTheme()`
- Storybook injecte primitives + sémantique + marque sur `:root` (`.storybook/preview.tsx`)
- Stories composants **Shared/** s’affichent déjà avec la charte YaoundéLogis

---

## 6. Composants métier

- **`ListingStatusBadge`** — états d’annonce conformes à la charte

---

## 7. Consommation

```ts
import {
  yaoundeLogisBrand,
  yaoundeLogisListingStatus,
  createYaoundeLogisMuiTheme,
  ListingStatusBadge,
  resolveYaoundeLogisContentStyle,
} from 'charte-graphique';
```

Voir aussi `YAOUNDELOGIS.md` et Storybook **YaoundéLogis / Charte graphique**.
