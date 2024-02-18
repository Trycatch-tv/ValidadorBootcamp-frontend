import {create} from "zustand"
import { CountState } from "./count.store.interface"

export const useCountStore = create<CountState>((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
}))


