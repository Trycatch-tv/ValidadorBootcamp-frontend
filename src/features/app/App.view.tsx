import { FC } from "react"

interface Props {
  currentYear: number
}
const AppView: FC<Props> = ({ currentYear }) => {
  return <h1>Validador de Bootcamps {currentYear}</h1>
}

export default AppView
