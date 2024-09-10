import useBootcampStore from "@/stores/bootcamps/bootcamps.store"
import { useEffect } from "react"
import BootcampsBackofficeView from "./bootcamps.backoffice.view"

const BootcampsBackofficeContainer = () => {
  const { bootcamps, getBootcamps } = useBootcampStore((state) => state)

  const getAllBootcamps = async () => {
    getBootcamps()
  }

  useEffect(() => {
    getAllBootcamps()
  }, [])

  return (
    <>
      <BootcampsBackofficeView bootcamps={bootcamps} />
    </>
  )
}

export default BootcampsBackofficeContainer
