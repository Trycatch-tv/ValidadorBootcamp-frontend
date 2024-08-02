import { BootcampModel } from "../../models/bootcamp.model"

export interface BootcampsState {
  bootcamps: BootcampModel[]
  getBootcamps: () => void
  searchBootcamps: (query: string) => void
}
