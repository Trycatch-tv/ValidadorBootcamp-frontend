import { AppController } from "../../controllers/App/App.controller"
import HomeView from "./Home.view"
import { useCountStore } from "../../stores/count/count.store"


const HomeContainer = () => {
  const appController = new AppController()
  const currentYear = appController.getYear()
  //llamada al store de count
  const {count}=useCountStore((state)=>state)
  console.log(currentYear)
  console.log("Valor inicial en el store count: " + count)
  return (
    <>
      <HomeView />
    </>
  )
}

export default HomeContainer
