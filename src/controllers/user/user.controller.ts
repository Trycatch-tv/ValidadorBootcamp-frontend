import { UserModel } from "../../models/user.model"
import { UserService } from "../../services/user/user.service"

export class UserController {
  private userService: UserService = new UserService()
  constructor() {}

  async findOne(id: string): Promise<UserModel> {
    return await this.userService.findOne(id)
  }
}
