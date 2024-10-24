import { ProgramModel } from "../../models/program.model"

export interface ProgramsState {
  programs: ProgramModel[]
  programsByBootcamp: ProgramModel[]
  getPrograms: () => void
  getProgramsByBootcamp: (id: string) => void
}
