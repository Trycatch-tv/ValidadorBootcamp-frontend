import { useBootcampStore } from "@/stores/bootcamps/bootcamps.store"
import { useEffect } from "react"
import ListBootcampView from "./list.bootcamp.view"

const ListBootcampContainer = () => {
  const { bootcamps, getBootcamps } = useBootcampStore((state) => state)

  const getAllBootcamps = async () => {
    getBootcamps()
  }

  useEffect(() => {
    getAllBootcamps()
  }, [])
  return (
    <>
      <ListBootcampView bootcamps={bootcamps} />
    </>
  )
}

export default ListBootcampContainer
