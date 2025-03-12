import ModalContainer from "@/components/modal/modal.container"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import { BootcampModel } from "@/models/bootcamp.model"
import { BookCheck, Eye, Pencil, RotateCw } from "lucide-react"
import { FC } from "react"
import { Link } from "react-router-dom"
import ListAssessmentBootcampBackofficeContainer from "../assesments/list/list.assessment.bootcamp.backoffice.container"
import EditBootcampBackofficeContainer from "../edit/edit.bootcamp.backoffice.container"

interface Props {
  bootcamps: BootcampModel[]
  onRecalculateScore: (id: string) => void
  isDialogOpen: boolean
  setDialogOpen: (value: boolean) => void
  controlDialog: (modal: string, bootcamp: BootcampModel) => void
  bootcampSelected?: BootcampModel
  getAvatar: (id: string) => string
  isAssesstmentDialogOpen: boolean
  setAssesstmentDialogOpen: (value: boolean) => void
}

const ListBootcampsBackofficeView: FC<Props> = ({
  bootcamps,
  onRecalculateScore,
  isDialogOpen,
  setDialogOpen,
  controlDialog,
  bootcampSelected,
  getAvatar,
  isAssesstmentDialogOpen,
  setAssesstmentDialogOpen,
}) => {
  return (
    <>
      <ModalContainer
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        title="Editar Bootcamp"
      >
        <EditBootcampBackofficeContainer
          bootcamp={bootcampSelected ?? ({} as BootcampModel)}
        />
      </ModalContainer>
      <ModalContainer
        isDialogOpen={isAssesstmentDialogOpen}
        setDialogOpen={setAssesstmentDialogOpen}
        title="Evaluar Bootcamp"
      >
        <ListAssessmentBootcampBackofficeContainer
          bootcamp={bootcampSelected ?? ({} as BootcampModel)}
        />
      </ModalContainer>
      <div className="mt-4">
        <Table className="table table-bordered table-striped">
          <TableHeader>
            <TableRow>
              <TableHead>Avatar</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Teléfono</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Es Certificado?</TableHead>
              <TableHead>Está Verificado?</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>País</TableHead>
              <TableHead>Modo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Acciones</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bootcamps.map((bootcamp: BootcampModel) => (
              <TableRow key={bootcamp.id}>
                <TableCell>
                  {bootcamp.avatar ? (
                    <img
                      src={getAvatar(bootcamp.id)}
                      alt={bootcamp.name}
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    "Sin imagen"
                  )}
                </TableCell>
                <TableCell>{bootcamp.name}</TableCell>
                <TableCell>{bootcamp.email}</TableCell>
                <TableCell>{bootcamp.phone}</TableCell>
                <TableCell>{bootcamp.url}</TableCell>
                <TableCell>{bootcamp.is_endorsed ? "Sí" : "No"}</TableCell>
                <TableCell>{bootcamp.is_verified ? "Sí" : "No"}</TableCell>
                <TableCell>{bootcamp.score}</TableCell>
                <TableCell className="capitalize">
                  {bootcamp.country_name}
                </TableCell>
                <TableCell>{bootcamp.mode}</TableCell>
                <TableCell>
                  {bootcamp.is_active ? "Activo" : "Inactivo"}
                </TableCell>
                <TableCell className="flex justify-between">
                  <RotateCw
                    onClick={() => {
                      onRecalculateScore(bootcamp.id)
                    }}
                    className="cursor-pointer"
                  />
                  <Link to={`/bootcamp/${bootcamp.id}`}>
                    <Eye />
                  </Link>
                  <Pencil
                    className="cursor-pointer"
                    onClick={() => {
                      controlDialog("edit_bootcamp", bootcamp)
                    }}
                  />
                  <BookCheck
                    className="cursor-pointer"
                    onClick={() => {
                      controlDialog("assesstment_bootcamp", bootcamp)
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default ListBootcampsBackofficeView
