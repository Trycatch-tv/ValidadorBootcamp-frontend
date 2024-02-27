import { CardContent, CardHeader } from "@/components/ui"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import Layout from "../../layout/Layout"
import ListBootcampContainer from "../bootcamps/list/list.bootcamp.container"
import SearchBarContainer from "../bootcamps/searchbar/searchbar.container"

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
          <SearchBarContainer />
          <ListBootcampContainer />
        </CardContent>
      </div>
    </Layout>
  )
}

export default HomeView
