import { create } from "zustand";
import type { UserState } from "./user.store.interface";

export const useUserStore = create<UserState>(() => ({
  users: [],
}));
