import { UserModel } from "../../models/user.model"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

const apiUrl = import.meta.env.VITE_API_URL

export class UserRepository {
  private httpClient: HttpClient = new HttpClient(`${apiUrl}/users`)
  constructor() {}

  async findOne(id: string): Promise<UserModel> {
    // TODO: En el backend falta agregar la validación en el endpoint para el rol de usuario
    // y validar que si la petición la hace un admin pueda ver la información, si la hace un usuario
    // solo pueda ver su información comparando el id del token con el id del usuario que se quiere ver,
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const getOneResponse = await this.httpClient.get(`/${id}`)
    return getOneResponse.data
  }

  async findAll(): Promise<UserModel[]> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const getAllResponse = await this.httpClient.get("/list")
    return getAllResponse.data
  }

  async search(query: string): Promise<UserModel[]> {
    const getToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
    this.httpClient.setToken(getToken.state.token)
    const searchResponse = await this.httpClient.get(`/search/${query}`)
    return searchResponse.data
  }
}
