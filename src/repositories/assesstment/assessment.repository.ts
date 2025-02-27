import { AssessmentModel } from "../../models/assessment.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

const apiUrl = import.meta.env.VITE_API_URL

export class AssessmentRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/assessments`)
  constructor() {}

  async findAllByBootcampId(bootcampId: string): Promise<AssessmentModel[]> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const getAllByBootcampIdResponse = await this.httpClient.get(
      `/bootcamp/many/${bootcampId}`
    )
    return getAllByBootcampIdResponse.data
  }

  async createMany(
    bootcampId: string,
    assessments: Partial<AssessmentModel[]>
  ): Promise<AssessmentModel[]> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const createManyResponse = await this.httpClient.post(
      `/many/${bootcampId}`,
      assessments
    )
    return createManyResponse.data
  }

  // async updateOne(
  //   id: string,
  //   bootcamp: Partial<BootcampModel>
  // ): Promise<BootcampModel> {
  //   const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
  //   this.httpClient.setToken(getToken.state.token)
  //   const updateResponse = await this.httpClient.put(`/update/${id}`, bootcamp)
  //   return updateResponse.data
  // }
}
