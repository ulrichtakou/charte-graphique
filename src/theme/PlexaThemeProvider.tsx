import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  plexaDarkTheme,
  plexaLightTheme,
  type plexaLightTheme as PlexaTheme,
} from './create-plexa-one-mui-theme';
import type { PlexaThemeMode } from '../tokens/plexa-one/plexa-colors';

export type PlexaColorMode = 'light' | 'dark' | 'system';

type ThemeStoreState = {
  colorMode: PlexaColorMode;
  setColorMode: (mode: PlexaColorMode) => void;
  toggleColorMode: () => void;
};

function createPlexaThemeStore(storageKey: string) {
  return create<ThemeStoreState>()(
    persist(
      (set, get) => ({
        colorMode: 'system',
        setColorMode: (mode) => set({ colorMode: mode }),
        toggleColorMode: () => {
          const current = get().colorMode;
          const resolved =
            current === 'system' ? resolveSystemMode() : current;
          set({ colorMode: resolved === 'light' ? 'dark' : 'light' });
        },
      }),
      { name: storageKey },
    ),
  );
}

function resolveSystemMode(): PlexaThemeMode {
  if (typeof window === 'undefined') return 'light';
  if (typeof window.matchMedia !== 'function') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function resolveEffectivePlexaMode(
  colorMode: PlexaColorMode,
): PlexaThemeMode {
  if (colorMode === 'system') return resolveSystemMode();
  return colorMode;
}

type PlexaThemeContextValue = {
  colorMode: PlexaColorMode;
  effectiveMode: PlexaThemeMode;
  setColorMode: (mode: PlexaColorMode) => void;
  toggleColorMode: () => void;
};

const PlexaThemeContext = createContext<PlexaThemeContextValue | null>(null);

export type PlexaThemeProviderProps = {
  /** localStorage key — namespace per app so theme stays isolated. */
  storageKey: string;
  /** Optional default when nothing is persisted. */
  defaultMode?: PlexaColorMode;
  children: ReactNode;
};

const storeCache = new Map<string, ReturnType<typeof createPlexaThemeStore>>();
function getStore(key: string) {
  let store = storeCache.get(key);
  if (!store) {
    store = createPlexaThemeStore(key);
    storeCache.set(key, store);
  }
  return store;
}

/**
 * Top-level theme provider for Plexa One DS.
 *  - Persists user preference via Zustand + localStorage.
 *  - Listens to system color-scheme changes when mode is 'system'.
 *  - Sets `data-theme` on documentElement to drive --plexa-* CSS variables.
 *  - Wraps the tree in MUI ThemeProvider + CssBaseline.
 *
 * Apps should import `plexa-global.css` once in their entry to enable the dot matrix + scrollbar styles.
 */
export function PlexaThemeProvider(props: PlexaThemeProviderProps) {
  const { storageKey, defaultMode, children } = props;
  const useStore = useMemo(() => getStore(storageKey), [storageKey]);
  const { colorMode, setColorMode, toggleColorMode } = useStore();
  const [systemMode, setSystemMode] = useState<PlexaThemeMode>(() =>
    resolveSystemMode(),
  );

  useEffect(() => {
    if (defaultMode && colorMode === 'system') {
      setColorMode(defaultMode);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      setSystemMode(e.matches ? 'dark' : 'light');
    };
    media.addEventListener?.('change', listener);
    return () => media.removeEventListener?.('change', listener);
  }, []);

  const effectiveMode: PlexaThemeMode =
    colorMode === 'system' ? systemMode : colorMode;

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', effectiveMode);
  }, [effectiveMode]);

  const theme = useMemo(
    () => (effectiveMode === 'dark' ? plexaDarkTheme : plexaLightTheme),
    [effectiveMode],
  );

  const ctx = useMemo<PlexaThemeContextValue>(
    () => ({
      colorMode,
      effectiveMode,
      setColorMode,
      toggleColorMode,
    }),
    [colorMode, effectiveMode, setColorMode, toggleColorMode],
  );

  return (
    <PlexaThemeContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </PlexaThemeContext.Provider>
  );
}

export function usePlexaThemeMode(): PlexaThemeContextValue {
  const ctx = useContext(PlexaThemeContext);
  if (!ctx) {
    throw new Error(
      'usePlexaThemeMode must be used inside a <PlexaThemeProvider />',
    );
  }
  return ctx;
}

/** Hook-free getter for environments where ctx is awkward (e.g. tests). */
export function readPlexaModeFromDOM(): PlexaThemeMode {
  if (typeof document === 'undefined') return 'light';
  return (
    (document.documentElement.getAttribute('data-theme') as PlexaThemeMode) ||
    'light'
  );
}

// re-export the theme type for downstream typing
export type { PlexaTheme };
