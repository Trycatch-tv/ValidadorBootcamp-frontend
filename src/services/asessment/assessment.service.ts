import { AssessmentRepository } from "../../repositories/assesstment/assessment.repository"

export class AssessmentService {
  private assessmentRepository: AssessmentRepository =
    new AssessmentRepository()
  constructor() {}

  async findAllByBootcampId(bootcampId: string) {
    return await this.assessmentRepository.findAllByBootcampId(bootcampId)
  }
}
