import type { SignInDto } from "@/dtos/auth/signin.dto";
import type { SignUpDto } from "@/dtos/auth/signup.dto";
import HttpClient from "../../utils/HttpClient/HttpClient.util";

const apiUrl = import.meta.env.VITE_API_URL;

export class AuthRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/users`);
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return await this.httpClient.post("/signup", signUpDto);
  }

  async signIn(signInDto: SignInDto) {
    return await this.httpClient.post("/signin", signInDto);
  }
}
