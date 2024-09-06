import { UserModel } from "@/models/user.model"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { AuthController } from "../../controllers/auth/auth.controller"
import { AuthState } from "./auth.store.interface"

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      user: new Object() as UserModel,
      isAuth: () => {
        return get().user.isLogedIn
      },
      token: null,
      signIn: async (email: string, password: string) => {
        const authController = new AuthController()
        const signInResponse = await authController.signIn({ email, password })
        set((state: Partial<AuthState>) => ({ user: signInResponse.data }))
        set((state: Partial<AuthState>) => ({
          token: signInResponse.data.token,
        }))
      },
      signOut: () => {
        set((state: Partial<AuthState>) => ({
          user: new Object() as UserModel,
        }))
        set((state: Partial<AuthState>) => ({
          token: null,
        }))
      },
    }),

    { name: "auth" }
  )
)
