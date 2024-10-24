import { ProgramModel } from "../../models/program.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

const apiUrl = import.meta.env.VITE_API_URL

export class ProgramRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/programs`)
  constructor() {}

  async findManyByBootcampId(id: string): Promise<ProgramModel[]> {
    const getManyReviewsResponse = await this.httpClient.get(
      `/bootcamp/many/${id}`
    )
    return getManyReviewsResponse.data
  }

  findOneContent(id: string): string {
    return `${apiUrl}/programs/content/${id}`
  }

  async createOne(program: Partial<ProgramModel>): Promise<ProgramModel> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const createOneResponse = await this.httpClient.post("/", program)
    return createOneResponse.data
  }

  async findAll(): Promise<ProgramModel[]> {
    const findAllResponse = await this.httpClient.get("/list")
    return findAllResponse.data
  }
}
