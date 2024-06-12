import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  users: any;
}

const ListUsersView: FC<Props> = ({ users }) => {
  return (
    <>
      <div className="mt-4">
        <Table className="table table-bordered table-striped">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Apellidos</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Creado</TableHead>
              <TableHead>Actualizado</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.is_active ? "Activo" : "Inactivo"}</TableCell>
                <TableCell>{user.created_at}</TableCell>
                <TableCell>{user.updated_at}</TableCell>
                <TableCell>
                  <Link to={`/admin/user/${user.id}`}>
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
  );
};

export default ListUsersView;
