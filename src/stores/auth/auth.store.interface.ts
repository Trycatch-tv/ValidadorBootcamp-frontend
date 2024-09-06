import { UserModel } from "../../models/user.model"
export interface AuthState {
  user: UserModel
  token: string | null
  isAuth: () => boolean
  signIn: (email: string, password: string) => void
  signOut: () => void
}
