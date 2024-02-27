import { BootcampModel } from "@/models/bootcamp.model"
import { BootcampService } from "../../services/bootcamp/bootcamp.service"

export class BootcampController {
  private bootcampService: BootcampService = new BootcampService()
  constructor() {}

  async findAll(): Promise<BootcampModel[]> {
    return this.bootcampService.findAll()
  }

  async search(key: string): Promise<BootcampModel[]> {
    return this.bootcampService.search(key)
  }

  async findAllByScore(): Promise<BootcampModel[]> {
    return this.bootcampService.findAllByScore()
  }

  findOneAvatar(id: string): string {
    return this.bootcampService.findOneAvatar(id)
  }
}
