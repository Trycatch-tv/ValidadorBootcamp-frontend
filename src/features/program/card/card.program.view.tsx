import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { UserType } from "@/enum/users/usertype.enum"
import { ProgramModel } from "@/models/program.model"
import { UserModel } from "@/models/user.model"
import { Album } from "lucide-react"
import { ChangeEvent, FC } from "react"

interface Props {
  program: ProgramModel
  programContent: string
  user: UserModel
  onProgramContentChange: (file: File) => void
  selectedFile: File | undefined
  isProgramContentDialogOpen: boolean
  openProgramContentDialog: () => void
  controlDialog: () => void
}
const CardProgramView: FC<Props> = ({
  program,
  programContent,
  user,
  onProgramContentChange,
  selectedFile,
  isProgramContentDialogOpen,
  openProgramContentDialog,
  controlDialog,
}) => {
  return (
    <>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-md">{program.name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="px-2 py-2.5 bg-slate-100 rounded-md w-fit flex items-center justify-center">
              <span className="text-xs">
                <span className="font-bold mr-1">Modo:</span>
                {program.mode}
              </span>
            </div>
            <div className="px-2 py-2.5 bg-slate-100 rounded-md w-fit flex items-center justify-center">
              <span className="text-xs whitespace-nowrap">
                <span className="font-bold mr-1">Duración:</span>
                {program.duration} meses
              </span>
            </div>
            <div className="px-2 py-2.5 bg-slate-100 rounded-md w-fit flex items-center justify-center">
              <span className="text-xs whitespace-nowrap">
                <span className="font-bold mr-1">Precio:</span>
                {program.price} {program.currency}
              </span>
            </div>
          </div>
          <div className="w-full mt-2 flex justify-center flex-col">
            <Dialog
              open={isProgramContentDialogOpen}
              onOpenChange={controlDialog}
            >
              {program.content ? (
                <Button size="xs">
                  <Album width="16" height="16" className="mr-1" />
                  <span
                    className="ml-2"
                    onClick={() => {
                      openProgramContentDialog()
                    }}
                  >
                    Ver Contenido
                  </span>
                </Button>
              ) : (
                <>
                  <div>No se ha cargado el contenido aún </div>
                </>
              )}
              {user.role === UserType.ADMIN ? (
                <>
                  <input
                    className="mt-2"
                    type="file"
                    accept=".pdf"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      onProgramContentChange(e.target.files![0])
                    }}
                  />
                  {selectedFile ? (
                    <>{selectedFile.name}</>
                  ) : (
                    <div>PDF no seleccionado</div>
                  )}
                </>
              ) : (
                ""
              )}
              {/* <DialogTrigger>
                <Button size="xs">
                  <Album width="16" height="16" className="mr-1" />
                  <span className="ml-2">Ver Contenido</span>
                </Button>
              </DialogTrigger> */}
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contenido del Programa</DialogTitle>
                  <DialogDescription className="w-screen h-11/12">
                    <iframe
                      src={programContent}
                      style={{ width: "28vw", height: "80vh" }}
                    ></iframe>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default CardProgramView
