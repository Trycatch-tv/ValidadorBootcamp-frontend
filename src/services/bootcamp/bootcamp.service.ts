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

  async createOne(bootcamp: Partial<BootcampModel>): Promise<BootcampModel> {
    return this.bootcampRepository.createOne(bootcamp)
  }

  async recalculateScoreAverage(id: string): Promise<BootcampModel> {
    return this.bootcampRepository.recalculateScoreAverage(id)
  }

  async updateOne(
    id: string,
    bootcamp: Partial<BootcampModel>
  ): Promise<BootcampModel> {
    return this.bootcampRepository.updateOne(id, bootcamp)
  }

  async uploadAvatar(bootcampId: string, file: File): Promise<BootcampModel> {
    return this.bootcampRepository.uploadAvatar(bootcampId, file)
  }

  async uploadTermsAndConditions(
    bootcampId: string,
    file: File
  ): Promise<BootcampModel> {
    return this.bootcampRepository.uploadTermsAndConditions(bootcampId, file)
  }
}
