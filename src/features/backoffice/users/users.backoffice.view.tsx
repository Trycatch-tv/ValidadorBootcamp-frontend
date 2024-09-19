import { Button, CardContent, CardHeader } from "@/components/ui"
import { Input } from "@/components/ui/input"
import Layout from "@/layout/Layout"
import { UserModel } from "@/models/user.model"
import { Filter, Paintbrush, Search } from "lucide-react"
import { FC } from "react"
import ListUsersBackofficeContainer from "./list/list.users.backoffice.container"

interface Props {
  users: UserModel[]
  keyValue: string
  onChangeKey: (key: string) => void
  onClickSearch: () => void
  onClickCleanFilter: () => void
}

const UsersBackoffceView: FC<Props> = ({
  users,
  keyValue,
  onChangeKey,
  onClickSearch,
  onClickCleanFilter,
}) => {
  return (
    <>
      <Layout>
        <CardHeader>
          <h5 className="font-semibold ">Directorio de usuarios</h5>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 mb-16">
            <Input
              className="max-w-[440px]"
              id="name"
              placeholder="Buscar usuario... "
              value={keyValue}
              onChange={(e) => {
                onChangeKey(e.target.value)
              }}
            />
            <div className="flex justify-content-between gap-2">
              <Button
                size={"sm"}
                className="text-xs"
                variant="outline"
                onClick={onClickSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
              <Button
                size={"sm"}
                className="text-xs"
                variant="outline"
                onClick={onClickCleanFilter}
              >
                <Paintbrush className="mr-2 h-4 w-4" />
              </Button>
              <Button size={"sm"} className="text-xs" variant="outline">
                <Filter className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <ListUsersBackofficeContainer users={users} />
        </CardContent>
      </Layout>
    </>
  )
}

export default UsersBackoffceView
