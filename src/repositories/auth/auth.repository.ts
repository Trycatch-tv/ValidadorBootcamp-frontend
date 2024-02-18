import { SignUpDto } from "@/dtos/auth/signup.dto"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

export class AuthRepository {
  private httpClient: HttpClient = new HttpClient("http://localhost:3000/users")
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return await this.httpClient.post("/signup", signUpDto)
  }
}
