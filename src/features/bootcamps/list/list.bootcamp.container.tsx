import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller";
import type { BootcampModel } from "@/models/bootcamp.model";
import { useEffect, useState } from "react";
import ListBootcampView from "./list.bootcamp.view";

const ListBootcampContainer = () => {
  const bootcampController = new BootcampController();
  const [bootcamps, setBootcamps] = useState<BootcampModel[]>([]);

  const getAllBootcamps = async () => {
    const response = await bootcampController.findAll();
    setBootcamps(response);
  };

  useEffect(() => {
    getAllBootcamps();
  }, []);
  return (
    <>
      <ListBootcampView bootcamps={bootcamps} />
    </>
  );
};

export default ListBootcampContainer;
