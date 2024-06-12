import { AppController } from "../../controllers/App/App.controller";
import { useCountStore } from "../../stores/count/count.store";
import HomeView from "./Home.view";

const HomeContainer = () => {
  const appController = new AppController();
  const currentYear = appController.getYear();
  //llamada al store de count
  const { count } = useCountStore((state) => state);
  console.log(currentYear);
  console.log("Valor inicial en el store count: " + count);
  return (
    <>
      <HomeView />
    </>
  );
};

export default HomeContainer;
