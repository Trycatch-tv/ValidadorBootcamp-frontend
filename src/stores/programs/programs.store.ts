import { create } from "zustand"
import { ProgramController } from "../../controllers/program/program.controller"
import { ProgramModel } from "../../models/program.model"
import { ProgramsState } from "./programs.store.interface"

export const useProgramStore = create<ProgramsState>((set) => ({
  programs: [] as ProgramModel[],
  programsByBootcamp: [] as ProgramModel[],
  getPrograms: async () => {
    const programsController = new ProgramController()
    const programsResponse = await programsController.findAll()
    set(() => ({ programs: programsResponse }))
  },
  getProgramsByBootcamp: async (id: string) => {
    const programsController = new ProgramController()
    const programResponse = await programsController.findManyByBootcampId(id)
    set(() => ({ programsByBootcamp: programResponse }))
  },
}))

export default useProgramStore
