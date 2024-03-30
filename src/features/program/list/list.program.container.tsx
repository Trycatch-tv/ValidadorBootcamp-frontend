import { ProgramModel } from "@/models/program.model"
import { FC, useEffect, useState } from "react"
import { ProgramController } from "../../../controllers/program/program.controller"
import ListProgramView from "./list.program.view"

interface Props {
  bootcampId: string
}

const ListProgramContainer: FC<Props> = ({ bootcampId }) => {
  const programController = new ProgramController()
  const [programs, setPrograms] = useState<ProgramModel[]>([])
  const getPrograms = async () => {
    const getProgramsResponse = await programController.findManyByBootcampId(
      bootcampId
    )
    setPrograms(getProgramsResponse)
  }

  useEffect(() => {
    getPrograms()
  }, [])

  return (
    <>
      <ListProgramView programs={programs} />
    </>
  )
}

export default ListProgramContainer
