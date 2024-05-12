import { ProgramModel } from "../../models/program.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

const apiUrl = import.meta.env.VITE_API_URL

export class ProgramRepository {
  private httpClient: HttpClient = new HttpClient(
    `${apiUrl}/programs`
  )
  constructor() {}

  async findManyByBootcampId(id: string): Promise<ProgramModel[]> {
    const getManyReviewsResponse = await this.httpClient.get(`/bootcamp/${id}`)
    return getManyReviewsResponse.data
  }

  findOneContent(id: string): string {
    return `${apiUrl}/programs/content/${id}`
  }
}
