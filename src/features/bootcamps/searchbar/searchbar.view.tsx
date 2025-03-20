import ModalContainer from "@/components/modal/modal.container"
import { Button, Input } from "@/components/ui"
import { UserType } from "@/enum/users/usertype.enum"
import CreateBootcampBackofficeContainer from "@/features/backoffice/bootcamps/create/create.bootcamp.backoffice.container"
import { UserModel } from "@/models/user.model"
import { BookPlus, Paintbrush, Search } from "lucide-react"
import { FC } from "react"

interface Props {
  keyValue: string
  onChangeKey: (key: string) => void
  onClickSearch: () => void
  onClickCleanFilter: () => void
  user: UserModel
  controlDialog: () => void
  isDialogOpen: boolean
  setDialogOpen: (value: boolean) => void
}

const SearchBarView: FC<Props> = ({
  keyValue,
  onClickSearch,
  onChangeKey,
  onClickCleanFilter,
  user,
  controlDialog,
  isDialogOpen,
  setDialogOpen,
}) => {
  return (
    <>
      <div className="flex gap-3">
        <Input
          className="max-w-[440px]"
          id="key"
          placeholder="Buscar bootcamps..."
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
          {/* <Button size={"sm"} className="text-xs" variant="outline">
            <Filter className="mr-2 h-4 w-4" />
          </Button> */}
          {user?.role === UserType.ADMIN ? (
            <>
              <Button
                size={"sm"}
                className="text-xs"
                variant="outline"
                onClick={controlDialog}
              >
                <BookPlus className="mr-2 h-4 w-4" />
              </Button>

              <ModalContainer
                isDialogOpen={isDialogOpen}
                setDialogOpen={setDialogOpen}
                title="Crear Bootcamp"
              >
                <CreateBootcampBackofficeContainer />
              </ModalContainer>
            </>
          ) : undefined}
        </div>
      </div>
    </>
  )
}

export default SearchBarView
