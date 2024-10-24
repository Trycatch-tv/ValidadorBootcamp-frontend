import { FC, useEffect } from "react"
import { useProgramStore } from "../../../stores/programs/programs.store"
import ListProgramView from "./list.program.view"

interface Props {
  bootcampId: string
}

const ListProgramContainer: FC<Props> = ({ bootcampId }) => {
  const { programsByBootcamp, getProgramsByBootcamp } = useProgramStore(
    (state) => state
  )
  const getPrograms = async () => {
    await getProgramsByBootcamp(bootcampId)
  }

  useEffect(() => {
    getPrograms()
  }, [])

  return (
    <>
      <ListProgramView programs={programsByBootcamp} />
    </>
  )
}

export default ListProgramContainer
