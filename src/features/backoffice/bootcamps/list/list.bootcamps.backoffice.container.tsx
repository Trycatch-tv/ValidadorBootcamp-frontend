import { BootcampModel } from "@/models/bootcamp.model"
import { FC } from "react"
import ListBootcampsBackofficeView from "./list.bootcamps.backoffice.view"

interface Props {
  bootcamps: BootcampModel[]
}

const ListBootcampsBackofficeContainer: FC<Props> = ({ bootcamps }) => {
  return (
    <>
      <ListBootcampsBackofficeView bootcamps={bootcamps} />
    </>
  )
}

export default ListBootcampsBackofficeContainer
