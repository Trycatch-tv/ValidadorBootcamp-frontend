import {create} from "zustand"
import { UserState } from "./user.store.interface"

export const useUserStore = create<UserState>(() => ({
    users: [],
}))
