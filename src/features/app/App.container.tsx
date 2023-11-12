import { AppController } from "../../controllers/App/App.controller"
import AppView from "./App.view"

const AppContainer = () => {
  const appController = new AppController()
  const currentYear = appController.getYear()
  return (
    <>
      <AppView currentYear={currentYear} />
    </>
  )
}

export default AppContainer
