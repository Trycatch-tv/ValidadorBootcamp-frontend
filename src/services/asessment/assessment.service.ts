import { AssessmentModel } from "@/models/assessment.model"
import { AssessmentRepository } from "../../repositories/assesstment/assessment.repository"

export class AssessmentService {
  private assessmentRepository: AssessmentRepository =
    new AssessmentRepository()
  constructor() {}

  async findAllByBootcampId(bootcampId: string) {
    return await this.assessmentRepository.findAllByBootcampId(bootcampId)
  }

  async createMany(
    bootcampId: string,
    assessments: Partial<AssessmentModel[]>
  ) {
    return await this.assessmentRepository.createMany(bootcampId, assessments)
  }

  async updateMany(
    bootcampId: string,
    assessments: Partial<AssessmentModel[]>
  ) {
    return await this.assessmentRepository.updateMany(bootcampId, assessments)
  }
}
