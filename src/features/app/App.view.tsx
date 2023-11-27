import { FC } from "react"

interface Props {
  currentYear: number,
  actionName?: String
}
const AppView: FC<Props> = ({ currentYear, actionName }) => {
  return (
    <>
      <h1>Validador de Bootcamps {currentYear}</h1>
      <h2>Testeando el github action: {actionName = "Typescript Analizyer"}</h2>
    </>
  )
}

export default AppView
