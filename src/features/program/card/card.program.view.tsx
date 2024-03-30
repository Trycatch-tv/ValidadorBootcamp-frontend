import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui"
import { ProgramModel } from "@/models/program.model"
import { FC } from "react"

interface Props {
  program: ProgramModel
}
const CardProgramView: FC<Props> = ({ program }) => {
  return (
    <>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-md">{program.name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <span>Modo:{program.mode}</span>
          </div>
          <div>
            <span>Duración:{program.duration}</span>
          </div>
          <div>
            <span>Ver Contenido (Modal)</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default CardProgramView
