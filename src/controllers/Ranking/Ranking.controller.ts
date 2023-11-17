import RankingService from "../../services/Ranking/Ranking.service"

export class RankingController {
  private rankingService: RankingService

  constructor() {
    this.rankingService = new RankingService()
  }

  getYear() {
    return this.rankingService.getYear()
  }
}
