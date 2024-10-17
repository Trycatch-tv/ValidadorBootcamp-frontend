import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller"
import { BootcampModel } from "@/models/bootcamp.model"
import useBootcampStore from "@/stores/bootcamps/bootcamps.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { FC } from "react"
import ListBootcampsBackofficeView from "./list.bootcamps.backoffice.view"

interface Props {
  bootcamps: BootcampModel[]
}

const ListBootcampsBackofficeContainer: FC<Props> = ({ bootcamps }) => {
  const { getBootcamps } = useBootcampStore((state) => state)

  const handleRecalculateScore = async (id: string) => {
    alert("Recalculating score")
    const bootcampController = new BootcampController()
    try {
      const newBootcampScore = await bootcampController.recalculateScoreAverage(
        id
      )
      if (newBootcampScore.id) {
        showAlert(
          "Éxito",
          "El score del bootcamp ha sido recalculado con éxito",
          "success"
        )
        getBootcamps()
      }
    } catch (error) {
      showAlert(
        "Error",
        "Ha ocurrido un error al intentar recalcular el score del bootcamp",
        "error"
      )
    }
  }
  return (
    <>
      <ListBootcampsBackofficeView
        bootcamps={bootcamps}
        onRecalculateScore={handleRecalculateScore}
      />
    </>
  )
}

export default ListBootcampsBackofficeContainer
