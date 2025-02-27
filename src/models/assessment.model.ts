export interface AssessmentModel {
  id?: string
  bootcamp_id: string
  category_id: number
  criteria_id: string
  weight: number
  is_active?: boolean
  created_at?: Date
  updated_at?: Date
}
