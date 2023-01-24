import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ThemeStore {
  theme: 'LIGHT' | 'DARK';
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      set => ({
        theme: 'DARK',
        toggleTheme: () =>
          set(state => ({
            theme: state.theme === 'LIGHT' ? 'DARK' : 'LIGHT',
          })),
      }),
      {
        name: 'theme',
      }
    )
  )
);
