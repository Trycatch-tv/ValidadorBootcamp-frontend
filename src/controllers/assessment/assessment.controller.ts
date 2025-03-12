import { AssessmentModel } from "@/models/assessment.model"
import { AssessmentService } from "../../services/asessment/assessment.service"

export class AssessmentController {
  private assessmentService: AssessmentService = new AssessmentService()
  constructor() {}

  async findAllByBootcampId(bootcampId: string) {
    return await this.assessmentService.findAllByBootcampId(bootcampId)
  }

  async createMany(
    bootcampId: string,
    assessments: Partial<AssessmentModel[]>
  ) {
    return await this.assessmentService.createMany(bootcampId, assessments)
  }

  async updateMany(
    bootcampId: string,
    assessments: Partial<AssessmentModel[]>
  ) {
    return await this.assessmentService.updateMany(bootcampId, assessments)
  }
}
