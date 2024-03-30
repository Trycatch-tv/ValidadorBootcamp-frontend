import { ProgramModel } from "../../models/program.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

export class ProgramRepository {
  private httpClient: HttpClient = new HttpClient(
    "http://localhost:3000/programs"
  )
  constructor() {}

  async findManyByBootcampId(id: string): Promise<ProgramModel[]> {
    const getManyReviewsResponse = await this.httpClient.get(`/bootcamp/${id}`)
    return getManyReviewsResponse.data
  }
}
