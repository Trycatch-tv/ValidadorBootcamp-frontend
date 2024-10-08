import { UserModel } from "../../models/user.model"
import { UserRepository } from "../../repositories/user/user.repository"

export class UserService {
  private userRepository: UserRepository = new UserRepository()
  constructor() {}

  async findOne(id: string): Promise<UserModel> {
    return await this.userRepository.findOne(id)
  }

  async findAll(): Promise<UserModel[]> {
    return await this.userRepository.findAll()
  }

  async search(query: string): Promise<UserModel[]> {
    return await this.userRepository.search(query)
  }
}
