import { ProgramService } from "../../services/program/program.service"

export class ProgramController {
  private programService: ProgramService = new ProgramService()
  constructor() {}

  async findManyByBootcampId(id: string) {
    return this.programService.findManyByBootcampId(id)
  }
}
