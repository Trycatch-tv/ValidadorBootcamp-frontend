import { create } from "zustand";
import type { BootcampsState } from "./bootcamps.store.interface";

export const useBootcampStore = create<BootcampsState>(() => ({
  bootcamps: [],
}));

export default useBootcampStore;
