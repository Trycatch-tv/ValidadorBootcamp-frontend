import { create } from "zustand"
import { BootcampController } from "../../controllers/bootcamp/bootcamp.controller"
import { BootcampsState } from "./bootcamps.store.interface"

export const useBootcampStore = create<BootcampsState>((set) => ({
  bootcamps: [],
  getBootcamps: async () => {
    const bootcampsController = new BootcampController()
    const bootcampsResponse = await bootcampsController.findAll()
    set((state) => ({ bootcamps: bootcampsResponse }))
  },
}))

export default useBootcampStore
