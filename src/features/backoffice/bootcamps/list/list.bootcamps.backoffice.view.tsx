import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import { BootcampModel } from "@/models/bootcamp.model"
import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  bootcamps: BootcampModel[]
}

const ListBootcampsBackofficeView: FC<Props> = ({ bootcamps }) => {
  return (
    <>
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
                      src={bootcamp.avatar}
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
                <TableCell>
                  <Link to={`/bootcamp/${bootcamp.id}`}>
                    <Button size={"sm"} className="text-xs">
                      Administrar
                    </Button>
                  </Link>
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
