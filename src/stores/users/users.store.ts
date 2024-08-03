import { create } from "zustand"
import { UserModel } from "../../models/user.model"
import { UserState } from "./user.store.interface"

export const useUserStore = create<UserState>(() => ({
  user: new Object() as UserModel,
}))
