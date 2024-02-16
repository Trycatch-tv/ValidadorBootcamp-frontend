import { SignUpDto } from "@/dtos/auth/signup.dto"
import { AuthRepository } from "../../repositories/auth/auth.repository"

export class AuthService {
  private authRepository: AuthRepository = new AuthRepository()
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return this.authRepository.signUp(signUpDto)
  }
}
