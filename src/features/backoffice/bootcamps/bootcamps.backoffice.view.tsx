import { CardContent, CardHeader } from "@/components/ui"
import SearchBarContainer from "@/features/bootcamps/searchbar/searchbar.container"
import Layout from "@/layout/Layout"
import { BootcampModel } from "@/models/bootcamp.model"
import { FC } from "react"
import ListBootcampsBackofficeContainer from "./list/list.bootcamps.backoffice.container"

interface Props {
  bootcamps: BootcampModel[]
}

const BootcampsBackofficeView: FC<Props> = ({ bootcamps }) => {
  return (
    <>
      <Layout>
        <CardHeader>
          <h5 className="font-semibold ">Directorio de Bootcamps</h5>
        </CardHeader>
        <CardContent className="w-fit">
          <SearchBarContainer />
          <ListBootcampsBackofficeContainer bootcamps={bootcamps} />
        </CardContent>
      </Layout>
    </>
  )
}

export default BootcampsBackofficeView
