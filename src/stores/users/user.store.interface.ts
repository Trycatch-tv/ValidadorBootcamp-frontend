import { UserModel } from "../../models/user.model"
export interface UserState {
  user: UserModel
  users: UserModel[]
  getUsers: () => void
  searchUsers: (query: string) => void
}
