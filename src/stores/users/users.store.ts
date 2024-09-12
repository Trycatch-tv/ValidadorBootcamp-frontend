import { create } from "zustand"
import { UserController } from "../../controllers/user/user.controller"
import { UserModel } from "../../models/user.model"
import { UserState } from "./user.store.interface"

export const useUserStore = create<UserState>((set) => ({
  user: new Object() as UserModel,
  users: new Array<UserModel>(),
  getUsers: async () => {
    const usersController = new UserController()
    const usersResponse = await usersController.findAll()
    set((state) => ({ users: usersResponse }))
  },
  searchUsers: async (query: string) => {
    const usersController = new UserController()
    const usersResponse = await usersController.search(query)
    set((state) => ({ users: usersResponse }))
  },
}))
