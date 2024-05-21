import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller"
import { BootcampModel } from "@/models/bootcamp.model"
import { useState } from "react"
import SearchBarView from "./searchbar.view"

const SearchBarContainer = () => {
  const bootcampController = new BootcampController()

  const [keyValue, setKeyValue] = useState("")
  const [bootcamps, setBootcamps] = useState<BootcampModel[]>([])

  const handleChangeKey = (keyValue: string) => {
    console.log(keyValue)
    setKeyValue(keyValue)
  }
  const handleSearch = async () => {
    const getSearchBootcamps = await bootcampController.search(keyValue)
    setBootcamps(getSearchBootcamps)
    // TODO: Pendiente enviar el resultado al storage de Zustand (cuando esté implementado)
    console.log(bootcamps)
  }

  return (
    <>
      <SearchBarView
        keyValue={keyValue}
        onChangeKey={handleChangeKey}
        onClickSearch={handleSearch}
      />
    </>
  )
}

export default SearchBarContainer
