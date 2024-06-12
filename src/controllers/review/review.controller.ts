import type { ReviewModel } from "../../models/review.model";
import { ReviewService } from "../../services/review/review.service";

export class ReviewController {
  private reviewService: ReviewService = new ReviewService();
  constructor() {}

  async findAllByBootcampId(id: string): Promise<ReviewModel[]> {
    return await this.reviewService.findAllByBootcampId(id);
  }

  async createOne(review: Partial<ReviewModel>): Promise<ReviewModel> {
    return await this.reviewService.createOne(review);
  }
}
