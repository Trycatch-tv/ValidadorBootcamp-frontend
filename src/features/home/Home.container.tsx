import { AppController } from "../../controllers/App/App.controller"
import HomeView from "./Home.view"

const HomeContainer = () => {
  const appController = new AppController()
  const currentYear = appController.getYear()
  console.log(currentYear)
  return (
    <>
      <HomeView />
    </>
  )
}

export default HomeContainer
