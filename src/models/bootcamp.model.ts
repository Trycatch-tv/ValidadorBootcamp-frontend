// export default class BootcampModel {
//   constructor(
//     public id: string = "",
//     public name: string = "",
//     public description: string = "",
//     public url: string = "",
//     public facebook_url: string = "",
//     public instragram_url: string = "",
//     public is_endorsed: boolean = false,
//     public endorsed_by: string = "",
//     public is_verified: boolean = false,
//     public score: number = 0.0,
//     public country_name: string = "",
//     public country_iso: string = "",
//     public mode: string = "",
//     public email: string = "",
//     public phone: string = "",
//     public avatar: string = "",
//     public terms_and_conditions: string = "",
//     public user_id: string = "",
//     public is_active: boolean = true,
//     public created_at: Date = new Date(),
//     public updated_at: Date = new Date()
//   ) {}
// }

export interface BootcampModel {
  id: string
  name: string
  description: string
  url: string
  facebook_url: string
  instragram_url: string
  is_endorsed: boolean
  endorsed_by: string
  is_verified: boolean
  score: number
  country_name: string
  country_iso: string
  mode: string
  email: string
  phone: string
  avatar: string
  terms_and_conditions: string
  user_id: string
  is_active: boolean
  created_at: Date
  updated_at: Date
}
