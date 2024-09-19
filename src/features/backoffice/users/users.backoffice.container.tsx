import { useCallback, useEffect, useState } from "react"
import { useUserStore } from "../../../stores/users/users.store"
import UsersBackoffceView from "./users.backoffice.view"

const UsersBackofficeContainer = () => {
  const { users, getUsers, searchUsers } = useUserStore((state) => state)

  const [keyValue, setKeyValue] = useState("")

  const handleChangeKey = useCallback(
    (keyValue: string) => {
      setKeyValue(keyValue)
    },
    [keyValue]
  )

  const handleSearch = useCallback(async () => {
    if (keyValue === "") {
      getUsers()
    } else {
      searchUsers(keyValue)
    }
  }, [keyValue])

  const handleCleanFilter = () => {
    setKeyValue("")
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <UsersBackoffceView
        users={users}
        keyValue={keyValue}
        onChangeKey={handleChangeKey}
        onClickSearch={handleSearch}
        onClickCleanFilter={handleCleanFilter}
      />
    </>
  )
}

export default UsersBackofficeContainer
