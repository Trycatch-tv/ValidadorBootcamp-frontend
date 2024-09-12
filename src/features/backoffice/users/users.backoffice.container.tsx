import { useEffect } from "react"
import { useUserStore } from "../../../stores/users/users.store"
import UsersBackoffceView from "./users.backoffice.view"

const UsersBackofficeContainer = () => {
  const { users, getUsers } = useUserStore((state) => state)

  const getAllBootcamps = async () => {
    getUsers()
  }

  useEffect(() => {
    getAllBootcamps()
  }, [])
  return (
    <>
      <UsersBackoffceView users={users} />
    </>
  )
}

export default UsersBackofficeContainer
