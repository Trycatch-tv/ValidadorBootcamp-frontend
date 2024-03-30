import { UserModel } from "../../models/user.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

export class UserRepository {
  private httpClient: HttpClient = new HttpClient("http://localhost:3000/users")
  constructor() {}

  async findOne(id: string): Promise<UserModel> {
    const getOneResponse = await this.httpClient.get(`/${id}`)
    return getOneResponse.data
  }
}
