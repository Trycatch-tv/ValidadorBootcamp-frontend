export interface CriteriaInterface {
  code: string
  criteriaDescription: string
  weight: number
  category_id: number
  bootcamp_id: string
  score: Array<ScoreCriteriaInterface>
}

export interface ScoreCriteriaInterface {
  score: number
  scoreDescription: string
}
