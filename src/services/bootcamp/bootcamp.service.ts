import { BootcampModel } from "@/models/bootcamp.model"
import { BootcampRepository } from "../../repositories/bootcamp/bootcamp.repository"

export class BootcampService {
  private bootcampRepository: BootcampRepository = new BootcampRepository()
  constructor() {}

  async findAll(): Promise<BootcampModel[]> {
    return this.bootcampRepository.findAll()
  }

  async search(key: string): Promise<BootcampModel[]> {
    return this.bootcampRepository.search(key)
  }

  async findAllByScore(): Promise<BootcampModel[]> {
    return this.bootcampRepository.findAllByScore()
  }

  findOneAvatar(id: string): string {
    return this.bootcampRepository.findOneAvatar(id)
  }

  async findOne(id: string): Promise<BootcampModel> {
    return this.bootcampRepository.findOne(id)
  }

  findOneTermsAndConditions(id: string): string {
    return this.bootcampRepository.findOneTermsAndConditions(id)
  }
}
