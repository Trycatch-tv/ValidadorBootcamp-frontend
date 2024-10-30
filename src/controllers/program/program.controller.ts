import { ProgramModel } from "@/models/program.model"
import { ProgramService } from "../../services/program/program.service"

export class ProgramController {
  private programService: ProgramService = new ProgramService()
  constructor() {}

  async findManyByBootcampId(id: string) {
    return this.programService.findManyByBootcampId(id)
  }

  findOneContent(id: string) {
    return this.programService.findOneContent(id)
  }

  async createOne(program: Partial<ProgramModel>) {
    return this.programService.createOne(program)
  }

  async findAll() {
    return this.programService.findAll()
  }

  async uploadContent(programId: string, file: File): Promise<ProgramModel> {
    return this.programService.uploadContent(programId, file)
  }
}
