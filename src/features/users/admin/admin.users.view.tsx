import { Button, CardContent, CardHeader } from "@/components/ui";
import { Input } from "@/components/ui/input";
import Layout from "@/layout/Layout";
import { Filter } from "lucide-react";
import ListUsersContainer from "../list/list.users.container";

const AdminUsersView = () => {
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
            />
            <div className="flex justify-content-between gap-2">
              <Button size={"sm"} className="text-xs" variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
              <Button size={"sm"} className="text-xs">
                Buscar
              </Button>
            </div>
          </div>
          <ListUsersContainer />
        </CardContent>
      </Layout>
    </>
  );
};

export default AdminUsersView;
