import axios, { AxiosInstance } from "axios"

export default class HttpClient {
  private http: AxiosInstance
  private token: string | null = null
  private contentType: object = {}

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    })
  }

  setToken(token: string) {
    this.token = token
  }

  setContentType(type: "json" | "form-data") {
    this.contentType = {
      "Content-Type":
        type === "json" ? "application/json" : "multipart/form-data",
    }
  }

  getAuthHeader() {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {}
  }

  async get(url: string, config = {}) {
    return this.http.get(url, {
      ...config,
      headers: {
        ...this.contentType,
        ...this.getAuthHeader(),
      },
    })
  }

  async post(url: string, data = {}, config = {}) {
    return this.http.post(url, data, {
      ...config,
      headers: {
        ...this.contentType,
        ...this.getAuthHeader(),
      },
    })
  }

  async put(url: string, data = {}, config = {}) {
    return this.http.put(url, data, {
      ...config,
      headers: {
        ...this.contentType,
        ...this.getAuthHeader(),
      },
    })
  }

  async patch(url: string, data = {}, config = {}) {
    return this.http.patch(url, data, {
      ...config,
      headers: {
        ...this.contentType,
        ...this.getAuthHeader(),
      },
    })
  }

  async delete(url: string, config = {}) {
    return this.http.delete(url, {
      ...config,
      headers: {
        ...this.contentType,
        ...this.getAuthHeader(),
      },
    })
  }
}
