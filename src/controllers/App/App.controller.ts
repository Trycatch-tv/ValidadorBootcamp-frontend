import AppService from "../../services/App/App.service";

export class AppController {
  private apppService: AppService;

  constructor() {
    this.apppService = new AppService();
  }

  getYear() {
    return this.apppService.getYear();
  }
}
