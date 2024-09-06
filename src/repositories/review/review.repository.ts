import { ReviewModel } from "../../models/review.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

const apiUrl = import.meta.env.VITE_API_URL

export class ReviewRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/reviews`)
  constructor() {}

  async findAllByBootcampId(id: string): Promise<ReviewModel[]> {
    const getOneResponse = await this.httpClient.get(`/bootcamp/list/${id}`)
    return getOneResponse.data
  }

  async createOne(review: Partial<ReviewModel>): Promise<ReviewModel> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const createOneResponse = await this.httpClient.post("/", review)
    return createOneResponse.data
  }
}
