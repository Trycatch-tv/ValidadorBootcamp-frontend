import { RankingController } from "../../controllers/Ranking/Ranking.controller"
import RankingView from "./Ranking.view"

const RankingContainer = () => {
  const rankingController = new RankingController()
  const currentYear = rankingController.getYear()
  return (
    <>
      <RankingView currentYear={currentYear} />
    </>
  )
}

export default RankingContainer
