import { RankingRepository } from "../../repositories/Ranking/Ranking.repository"

export default class RankingService {
  private rankingRepository: RankingRepository

  constructor() {
    this.rankingRepository = new RankingRepository()
  }

  getYear() {
    return this.rankingRepository.getYear()
  }
}
