export default class EnvironmentClient {
  private apiURL: string = process.env.REACT_APP_API_URL || ""

  constructor() {}

  getApiURL() {
    return this.apiURL
  }
}
