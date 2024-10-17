import { BootcampModel } from "@/models/bootcamp.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

const apiUrl = import.meta.env.VITE_API_URL

export class BootcampRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/bootcamps`)
  constructor() {}

  async findAll(): Promise<BootcampModel[]> {
    const getAllResponse = await this.httpClient.get("/list")
    return getAllResponse.data
  }

  async search(key: string): Promise<BootcampModel[]> {
    try {
      const searchResponse = await this.httpClient.get(`/search/${key}`)
      return searchResponse.data
    } catch (error) {
      return []
    }
  }

  async findAllByScore(): Promise<BootcampModel[]> {
    const getAllByScoreResponse = await this.httpClient.get("/ranking/list")
    return getAllByScoreResponse.data
  }

  findOneAvatar(id: string): string {
    return `${apiUrl}/bootcamps/avatar/${id}`
  }

  async findOne(id: string): Promise<BootcampModel> {
    const getOneResponse = await this.httpClient.get(`/${id}`)
    return getOneResponse.data
  }

  findOneTermsAndConditions(id: string): string {
    return `${apiUrl}/bootcamps/terms-and-conditions/${id}`
  }

  async createOne(bootcamp: Partial<BootcampModel>): Promise<BootcampModel> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const createResponse = await this.httpClient.post("/", bootcamp)
    return createResponse.data
  }

  async recalculateScoreAverage(id: string): Promise<BootcampModel> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const recalculateResponse = await this.httpClient.post(
      `/score/recalculate/${id}`
    )
    return recalculateResponse.data
  }
}
