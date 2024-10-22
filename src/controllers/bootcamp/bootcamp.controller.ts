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

  async findOne(id: string): Promise<BootcampModel> {
    return this.bootcampService.findOne(id)
  }

  findOneTermsAndConditions(id: string = ""): string {
    return this.bootcampService.findOneTermsAndConditions(id)
  }

  async createOne(bootcamp: Partial<BootcampModel>): Promise<BootcampModel> {
    return this.bootcampService.createOne(bootcamp)
  }

  async recalculateScoreAverage(id: string): Promise<BootcampModel> {
    return this.bootcampService.recalculateScoreAverage(id)
  }

  async updateOne(
    id: string,
    bootcamp: Partial<BootcampModel>
  ): Promise<BootcampModel> {
    return this.bootcampService.updateOne(id, bootcamp)
  }

  async uploadAvatar(bootcampId: string, file: File): Promise<BootcampModel> {
    return this.bootcampService.uploadAvatar(bootcampId, file)
  }
}
