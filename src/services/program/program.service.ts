import { ProgramModel } from "@/models/program.model"
import { ProgramRepository } from "../../repositories/program/program.repository"

export class ProgramService {
  private programRepository: ProgramRepository = new ProgramRepository()
  constructor() {}

  async findManyByBootcampId(id: string) {
    return this.programRepository.findManyByBootcampId(id)
  }

  findOneContent(id: string) {
    return this.programRepository.findOneContent(id)
  }

  async createOne(program: Partial<ProgramModel>) {
    return this.programRepository.createOne(program)
  }

  async findAll() {
    return this.programRepository.findAll()
  }
}
