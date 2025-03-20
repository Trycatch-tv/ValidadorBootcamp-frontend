import { BootcampModel } from "@/models/bootcamp.model"
import { FC } from "react"
import CardBootcampView from "./card.bootcamp.view"

interface Props {
  bootcamp: Partial<BootcampModel>
}
const CardBootcampContainer: FC<Props> = ({ bootcamp }) => {
  return (
    <>
      <CardBootcampView bootcamp={bootcamp} />
    </>
  )
}

export default CardBootcampContainer
