import { UserModel } from "@/models/user.model"
import { FC } from "react"
import ListUsersBackofficeView from "./list.users.backoffice.view"

interface Props {
  users: UserModel[]
}

const ListUsersBackofficeContainer: FC<Props> = ({ users }) => {
  return (
    <>
      <ListUsersBackofficeView users={users} />
    </>
  )
}

export default ListUsersBackofficeContainer
