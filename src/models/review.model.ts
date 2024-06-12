export interface ReviewModel {
  id: string;
  title: string;
  score_overall: number;
  score_curriculum: number;
  score_job_support: number;
  score: number;
  description: string;
  source: string;
  user_id: string;
  bootcamp_id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
