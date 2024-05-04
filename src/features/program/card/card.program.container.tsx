import { ProgramController } from "@/controllers/program/program.controller"
import { ProgramModel } from "@/models/program.model"
import { FC, useEffect, useState } from "react"
import CardProgramView from "./card.program.view"

interface Props {
  program: ProgramModel
}

const CardProgramContainer: FC<Props> = ({ program }) => {
  const [programContent, setProgramContent] = useState("")

  const programController = new ProgramController()

  const getProgramContent = () => {
    setProgramContent(programController.findOneContent(program.id))
  }

  useEffect(() => {
    getProgramContent()
  }, [])
  return (
    <>
      <CardProgramView program={program} programContent={programContent} />
    </>
  )
}

export default CardProgramContainer
