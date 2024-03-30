import { ProgramModel } from "@/models/program.model"
import { FC } from "react"
import CardProgramContainer from "../card/card.program.container"

interface Props {
  programs: ProgramModel[]
}

const ListProgramView: FC<Props> = ({ programs }) => {
  return (
    <div className="flex flex-row gap-4 ">
      {programs.map((program) => (
        <CardProgramContainer key={program.id} program={program} />
      ))}
    </div>
  )
}

export default ListProgramView
