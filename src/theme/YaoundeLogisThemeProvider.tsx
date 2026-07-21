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
  yaoundeLogisDarkTheme,
  yaoundeLogisLightTheme,
} from './create-yaoundelogis-mui-theme';
import type { YaoundeLogisThemeMode } from '../tokens/yaoundelogis/surface-tokens';

export type YaoundeLogisColorMode = 'light' | 'dark' | 'system';

type ThemeStoreState = {
  colorMode: YaoundeLogisColorMode;
  setColorMode: (mode: YaoundeLogisColorMode) => void;
  toggleColorMode: () => void;
};

function createYaoundeThemeStore(storageKey: string) {
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

function resolveSystemMode(): YaoundeLogisThemeMode {
  if (typeof window === 'undefined') return 'light';
  if (typeof window.matchMedia !== 'function') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function resolveEffectiveYaoundeMode(
  colorMode: YaoundeLogisColorMode,
): YaoundeLogisThemeMode {
  if (colorMode === 'system') return resolveSystemMode();
  return colorMode;
}

type YaoundeThemeContextValue = {
  colorMode: YaoundeLogisColorMode;
  effectiveMode: YaoundeLogisThemeMode;
  setColorMode: (mode: YaoundeLogisColorMode) => void;
  toggleColorMode: () => void;
};

const YaoundeThemeContext = createContext<YaoundeThemeContextValue | null>(null);

export type YaoundeLogisThemeProviderProps = {
  storageKey?: string;
  defaultMode?: YaoundeLogisColorMode;
  /** Force un mode (ex. Storybook toolbar) — ignore le store */
  forcedMode?: YaoundeLogisThemeMode;
  children: ReactNode;
};

const storeCache = new Map<string, ReturnType<typeof createYaoundeThemeStore>>();

function getStore(key: string) {
  let store = storeCache.get(key);
  if (!store) {
    store = createYaoundeThemeStore(key);
    storeCache.set(key, store);
  }
  return store;
}

/**
 * Provider thème YaoundéLogis (clair / sombre / système).
 * Pose `data-theme` sur `<html>` pour les variables CSS `--yaoundelogis-*`.
 */
export function YaoundeLogisThemeProvider(props: YaoundeLogisThemeProviderProps) {
  const {
    storageKey = 'yaoundelogis-theme',
    defaultMode,
    forcedMode,
    children,
  } = props;
  const useStore = useMemo(() => getStore(storageKey), [storageKey]);
  const { colorMode, setColorMode, toggleColorMode } = useStore();
  const [systemMode, setSystemMode] = useState<YaoundeLogisThemeMode>(() =>
    resolveSystemMode(),
  );

  useEffect(() => {
    if (defaultMode && colorMode === 'system') {
      setColorMode(defaultMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hydrate once
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

  const effectiveMode: YaoundeLogisThemeMode =
    forcedMode ?? (colorMode === 'system' ? systemMode : colorMode);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', effectiveMode);
  }, [effectiveMode]);

  const theme = useMemo(
    () =>
      effectiveMode === 'dark' ? yaoundeLogisDarkTheme : yaoundeLogisLightTheme,
    [effectiveMode],
  );

  const ctx = useMemo<YaoundeThemeContextValue>(
    () => ({
      colorMode,
      effectiveMode,
      setColorMode,
      toggleColorMode,
    }),
    [colorMode, effectiveMode, setColorMode, toggleColorMode],
  );

  return (
    <YaoundeThemeContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </YaoundeThemeContext.Provider>
  );
}

export function useYaoundeLogisThemeMode(): YaoundeThemeContextValue {
  const ctx = useContext(YaoundeThemeContext);
  if (!ctx) {
    throw new Error(
      'useYaoundeLogisThemeMode must be used inside a <YaoundeLogisThemeProvider />',
    );
  }
  return ctx;
}

export function readYaoundeModeFromDOM(): YaoundeLogisThemeMode {
  if (typeof document === 'undefined') return 'light';
  return (
    (document.documentElement.getAttribute(
      'data-theme',
    ) as YaoundeLogisThemeMode) || 'light'
  );
}
