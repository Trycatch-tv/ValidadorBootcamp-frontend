import { ReviewModel } from "../../models/review.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

export class ReviewRepository {
  private httpClient: HttpClient = new HttpClient(
    "http://localhost:3000/reviews"
  )
  constructor() {}

  async findAllByBootcampId(id: string): Promise<ReviewModel[]> {
    const getOneResponse = await this.httpClient.get(`/bootcamp/list/${id}`)
    return getOneResponse.data
  }

  async createOne(review: Partial<ReviewModel>): Promise<ReviewModel> {
    const createOneResponse = await this.httpClient.post("/", review)
    return createOneResponse.data
  }
}
