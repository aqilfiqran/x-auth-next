import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthActions {
  setToken: (token: string) => Promise<void>;
  clearToken: () => Promise<void>;
}

interface AuthStore {
  token?: string;
  actions: AuthActions;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      token: undefined,
      actions: {
        setToken: async (token: string) => {
          await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              auth: {
                token,
              },
            }),
          });

          set({
            token,
          });
        },
        clearToken: async () => {
          await fetch('/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          set({ token: undefined });
        },
      },
    }),
    {
      name: 'auth',
      partialize: ({ actions, ...rest }) => rest,
    }
  )
);

export const useAuthActions = () => useAuthStore(state => state.actions);
