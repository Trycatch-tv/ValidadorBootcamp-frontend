import { CurrencyType } from "@/enum/program/currencytype.enum"

export interface ProgramModel {
  id: string
  name: string
  mode: "virtual" | "presencial" | "hibrido"
  duration: number
  price: number
  currency: CurrencyType
  bootcamp_id: string
  user_id: string
  content: string
  is_active: boolean
  created_at: Date
  updated_at: Date
}
