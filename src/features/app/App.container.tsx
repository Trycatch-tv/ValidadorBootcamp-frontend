import { AppController } from "../../controllers/App/App.controller";
import AppView from "./App.view";

const AppContainer = () => {
  const appController = new AppController();
  const currentYear = appController.getYear();
  console.log(currentYear);
  return (
    <>
      <AppView />
    </>
  );
};

export default AppContainer;
