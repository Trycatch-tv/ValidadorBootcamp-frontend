import { AssessmentService } from "../../services/asessment/assessment.service"

export class AssessmentController {
  private assessmentService: AssessmentService = new AssessmentService()
  constructor() {}

  async findAllByBootcampId(bootcampId: string) {
    return await this.assessmentService.findAllByBootcampId(bootcampId)
  }
}
