import { ReviewModel } from "../../models/review.model"
import { ReviewRepository } from "../../repositories/review/review.repository"

export class ReviewService {
  private reviewRepository: ReviewRepository = new ReviewRepository()
  constructor() {}

  async findAllByBootcampId(id: string): Promise<ReviewModel[]> {
    return await this.reviewRepository.findAllByBootcampId(id)
  }

  async createOne(review: Partial<ReviewModel>): Promise<ReviewModel> {
    return await this.reviewRepository.createOne(review)
  }
}
