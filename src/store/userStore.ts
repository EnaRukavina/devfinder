import { create } from 'zustand';

export interface IUser {
  name: string;
  login: string;
  created_at: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  twitter_userName: null;
  location: string;
  blog: string;
  company: string;
  html_url: string;
}
interface IUserStore {
  user: IUser | undefined;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setUser: (user: any) => void;
}

export const useUserStore = create<IUserStore>()(set => ({
  user: undefined,
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
  setUser: user => set({ user }),
}));
