import {create} from "zustand"
import { BootcampsState } from "./bootcamps.store.interface"


export const useBootcampStore = create<BootcampsState>(() => ({
    bootcamps: [],
}))

export default useBootcampStore
