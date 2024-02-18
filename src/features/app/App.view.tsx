import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import Layout from "../../layout/Layout"

library.add(faStar)

interface Props {}

const AppView: FC<Props> = () => {
  return (
    <Layout>
      <h1>GlassCamp</h1>
    </Layout>
  )
}

export default AppView
