import { Button, CardContent, CardHeader, Input } from "@/components/ui"
import Layout from "@/layout/Layout"
import { Filter } from "lucide-react"
import { FC } from "react"
import ListBootcampsBackofficeContainer from "./list/list.bootcamps.backoffice.container"

interface Props {
  bootcamps: any
}

const BootcampsBackofficeView: FC<Props> = ({ bootcamps }) => {
  return (
    <>
      <Layout>
        <CardHeader>
          <h5 className="font-semibold ">Directorio de Bootcamps</h5>
        </CardHeader>
        <CardContent className="w-fit">
          <div className="flex gap-3 mb-16">
            <Input
              className="max-w-[440px]"
              id="name"
              placeholder="Buscar bootcamp... "
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
          <ListBootcampsBackofficeContainer bootcamps={bootcamps} />
        </CardContent>
      </Layout>
    </>
  )
}

export default BootcampsBackofficeView
