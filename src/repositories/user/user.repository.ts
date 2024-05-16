import { UserModel } from "../../models/user.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

const apiUrl = import.meta.env.VITE_API_URL

export class UserRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/users`)
  constructor() {}

  async findOne(id: string): Promise<UserModel> {
    const getOneResponse = await this.httpClient.get(`/${id}`)
    return getOneResponse.data
  }
}
