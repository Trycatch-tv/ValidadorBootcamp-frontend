export interface BootcampModel {
  id: string;
  name: string;
  description: string;
  url: string;
  facebook_url: string;
  instragram_url: string;
  is_endorsed: boolean;
  endorsed_by: string;
  is_verified: boolean;
  score: number;
  country_name: string;
  country_iso: string;
  mode: string;
  email: string;
  phone: string;
  avatar: string;
  terms_and_conditions: string;
  user_id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
