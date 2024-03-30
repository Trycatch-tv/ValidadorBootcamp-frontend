export interface CreateOneReviewDto {
  bootcamp_id: string
  user_id: string
  title: string
  description: string
  score_overall: number
  score_curriculum: number
  score_job_support: number
}
