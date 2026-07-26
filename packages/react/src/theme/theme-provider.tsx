import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type ColourScheme = 'yellow' | 'blue';

export type ThemeMode = 'light' | 'dark' | 'system';

export type ThemeContextValue = {
  colourScheme: ColourScheme;
  mode: ThemeMode;
  setColourScheme: (scheme: ColourScheme) => void;
  setMode: (mode: ThemeMode) => void;
  resolvedMode: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export type ThemeProviderProps = Readonly<{
  children: ReactNode;
  colourScheme?: ColourScheme;
  defaultMode?: ThemeMode;
  storageKey?: string;
}>;

function ThemeProvider({
  children,
  colourScheme = 'yellow',
  defaultMode = 'system',
  storageKey = 'forsyteco-theme',
}: ThemeProviderProps) {
  const [colourSchemeState, setColourSchemeState] = useState<ColourScheme>(() => {
    if (globalThis.window === undefined) return colourScheme;
    const stored = globalThis.localStorage.getItem(`${storageKey}-colour-scheme`);
    return (stored as ColourScheme) || colourScheme;
  });

  const [mode, setMode] = useState<ThemeMode>(() => {
    if (globalThis.window === undefined) return defaultMode;
    const stored = globalThis.localStorage.getItem(`${storageKey}-mode`);
    return (stored as ThemeMode) || defaultMode;
  });

  /**
   * ✅ Sync state when props change.
   * This is required for Storybook toolbar globals to take effect,
   * because the toolbar changes props at runtime.
   */
  useEffect(() => {
    setColourSchemeState(colourScheme);
  }, [colourScheme]);

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  const resolvedMode: 'light' | 'dark' = (() => {
    if (mode === 'system') {
      if (globalThis.window === undefined) return 'light';
      return globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return mode;
  })();

  // Set attributes on mount and when they change
  useEffect(() => {
    if (globalThis.window === undefined) return;
    const root = document.documentElement;

    // Expose selected colour scheme for CSS hooks
    root.dataset.colourScheme = colourSchemeState;
    root.dataset.colourMode = resolvedMode;

  }, [colourSchemeState, resolvedMode]);

  // Persist to storage
  useEffect(() => {
    if (globalThis.window === undefined) return;
    globalThis.localStorage.setItem(`${storageKey}-colour-scheme`, colourSchemeState);
  }, [colourSchemeState, storageKey]);

  useEffect(() => {
    if (globalThis.window === undefined) return;
    globalThis.localStorage.setItem(`${storageKey}-mode`, mode);
  }, [mode, storageKey]);

  // Track system changes when in system mode
  useEffect(() => {
    if (mode !== 'system' || globalThis.window === undefined) return;

    const mediaQuery = globalThis.window.matchMedia('(prefers-color-scheme: dark)');

    const applyMode = (isDark: boolean) => {
      const root = document.documentElement;
      root.dataset.colourMode = isDark ? 'dark' : 'light';
    };

    const handleChange = () => applyMode(mediaQuery.matches);

    // Ensure we’re correct immediately in case system changed while running
    handleChange();

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const setColourScheme = useCallback((newScheme: ColourScheme) => {
    setColourSchemeState(newScheme);
  }, []);

  const setThemeMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  const contextValue = useMemo(
    () => ({
      colourScheme: colourSchemeState,
      mode,
      setColourScheme,
      setMode: setThemeMode,
      resolvedMode,
    }),
    [colourSchemeState, mode, setColourScheme, setThemeMode, resolvedMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
