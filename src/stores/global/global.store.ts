import { create } from "zustand"
import { GlobalState } from "./global.store.interface"

export const useGlobalStore = create<GlobalState>((set) => ({
  modalState: "",
  setModalState: (state: string) => {
    set({ modalState: state })
  },
}))
