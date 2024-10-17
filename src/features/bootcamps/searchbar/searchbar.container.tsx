import { useAuthStore } from "@/stores/auth/auth.store"
import useBootcampStore from "@/stores/bootcamps/bootcamps.store"
import { useCallback, useEffect, useState } from "react"
import SearchBarView from "./searchbar.view"

const SearchBarContainer = () => {
  const { searchBootcamps, getBootcamps } = useBootcampStore((state) => state)
  const { user } = useAuthStore((state) => state)

  const [keyValue, setKeyValue] = useState("")
  const [isDialogOpen, setDialogOpen] = useState(false)

  const handleChangeKey = useCallback(
    (keyValue: string) => {
      setKeyValue(keyValue)
    },
    [keyValue]
  )

  const handleSearch = useCallback(async () => {
    if (keyValue === "") {
      getBootcamps()
    } else {
      searchBootcamps(keyValue)
    }
  }, [keyValue])

  const handleCleanFilter = () => {
    setKeyValue("")
    getBootcamps()
  }

  const controlDialog = () => {
    setDialogOpen(!isDialogOpen)
  }

  useEffect(() => {
    if (isDialogOpen === false) {
      getBootcamps()
    }
  }, [isDialogOpen])

  return (
    <>
      <SearchBarView
        keyValue={keyValue}
        onChangeKey={handleChangeKey}
        onClickSearch={handleSearch}
        onClickCleanFilter={handleCleanFilter}
        user={user}
        controlDialog={controlDialog}
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </>
  )
}

export default SearchBarContainer
