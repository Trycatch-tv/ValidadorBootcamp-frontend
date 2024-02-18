import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Filter, Plus } from "lucide-react"
import { FC } from "react"
import Layout from "../../layout/Layout"
import { CardHeader, CardContent } from "@/components/ui"
import ListBootcampContainer from "../bootcamps/list/list.bootcamp.container"

library.add(faStar)

interface Props {}



const HomeView: FC<Props> = () => {
  return (
    <Layout>
      <div>
        <CardHeader>
          <h5 className="font-semibold ">Directorio de Bootcamps</h5>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              className="max-w-[440px]"
              id="name"
              placeholder="Name of your project"
            />
            <div className="flex justify-content-between gap-2">
              <Button size={"sm"} className="text-xs" variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
              <Button size={"sm"} className="text-xs">
                <Plus className="mr-2 h-4 w-4" />
                Agregar
              </Button>
            </div>
          </div>
        <ListBootcampContainer/>
          
        </CardContent>
      </div>
    </Layout>
  )
}

export default HomeView
