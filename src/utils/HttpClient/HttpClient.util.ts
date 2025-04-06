import axios, { AxiosInstance } from "axios"

export default class HttpClient {
  private http: AxiosInstance
  private token: string | null = null
  private contentType: object = {}
  private apiUrl = import.meta.env.VITE_API_URL

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    })

    this.http.interceptors.request.use((config) => {
      const accessToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
      if (accessToken.state) {
        config.headers.Authorization = `Bearer ${accessToken.state.token}`
      }
      return config
    })

    this.http.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const refreshToken = JSON.parse(localStorage.getItem("auth") ?? "{}")
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true

          try {
            const response = await axios.post(
              `${this.apiUrl}/users/refresh-token`,
              {
                refreshToken: refreshToken.state.user.refreshToken,
              }
            )

            refreshToken.state.token = response.data.newToken
            refreshToken.state.user.token = response.data.newToken
            localStorage.setItem("auth", JSON.stringify(refreshToken))

            originalRequest.headers.Authorization = `Bearer ${response.data.newToken}`
            return this.http(originalRequest)
          } catch (refreshError) {
            refreshToken.state.token = null
            refreshToken.state.user.refreshToken = null
            refreshToken.state.user.token = null
            refreshToken.state.user.isLogedIn = false
            localStorage.setItem("auth", JSON.stringify(refreshToken))
            window.location.href = "/signin"
          }
        }
        return Promise.reject(error)
      }
    )
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
