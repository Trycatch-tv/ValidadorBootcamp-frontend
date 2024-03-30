import { BootcampModel } from "@/models/bootcamp.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

export class BootcampRepository {
  private httpClient: HttpClient = new HttpClient(
    "http://localhost:3000/bootcamps"
  )
  constructor() {}

  async findAll(): Promise<BootcampModel[]> {
    const getAllResponse = await this.httpClient.get("/list")
    return getAllResponse.data
  }

  async search(key: string): Promise<BootcampModel[]> {
    const searchResponse = await this.httpClient.get(`/search/${key}`)
    return searchResponse.data
  }

  async findAllByScore(): Promise<BootcampModel[]> {
    const getAllByScoreResponse = await this.httpClient.get("/ranking/list")
    return getAllByScoreResponse.data
  }

  findOneAvatar(id: string): string {
    return `http://localhost:3000/bootcamps/avatar/${id}`
  }

  async findOne(id: string): Promise<BootcampModel> {
    const getOneResponse = await this.httpClient.get(`/${id}`)
    return getOneResponse.data
  }

  findOneTermsAndConditions(id: string): string {
    return `http://localhost:3000/bootcamps/terms-and-conditions/${id}`
  }
}
