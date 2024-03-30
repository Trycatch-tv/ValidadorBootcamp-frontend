import { ProgramModel } from "@/models/program.model"
import { FC } from "react"
import CardProgramView from "./card.program.view"

interface Props {
  program: ProgramModel
}

const CardProgramContainer: FC<Props> = ({ program }) => {
  return (
    <>
      <CardProgramView program={program} />
    </>
  )
}

export default CardProgramContainer
