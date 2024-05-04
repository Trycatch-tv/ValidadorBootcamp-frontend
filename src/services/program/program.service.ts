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
}
