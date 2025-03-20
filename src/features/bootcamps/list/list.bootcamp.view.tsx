import { FC } from "react"
import { BootcampModel } from "../../../models/bootcamp.model"
import CardBootcampContainer from "../card/card.bootcamp.container"

interface Props {
  bootcamps: BootcampModel[]
}
const ListBootcampView: FC<Props> = ({ bootcamps }) => {
  return (
    <>
      {bootcamps.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-2xl text-gray-400">No hay bootcamps</h1>
        </div>
      )}
      <div className="flex flex-wrap gap-4 mt-16 overflow-y-auto max-h-[66vh] overflow-hidden mb-16">
        {bootcamps.map((bootcamp: BootcampModel) => (
          <CardBootcampContainer bootcamp={bootcamp} />
        ))}
      </div>
    </>
  )
}

export default ListBootcampView
