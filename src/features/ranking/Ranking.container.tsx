import { BootcampController } from "@/controllers/bootcamp/bootcamp.controller";
import type { BootcampModel } from "@/models/bootcamp.model";
import { useEffect, useState } from "react";
import RankingView from "./Ranking.view";

const RankingContainer = () => {
  const bootcampController = new BootcampController();
  const [bootcamps, setBootcamps] = useState<BootcampModel[]>([]);

  const getRanking = async () => {
    const ranking = await bootcampController.findAllByScore();
    setBootcamps(ranking);
  };

  const getAvatarBootcamp = (id: string) => {
    return bootcampController.findOneAvatar(id);
  };

  useEffect(() => {
    getRanking();
  }, []);
  return (
    <>
      <RankingView ranking={bootcamps} getAvatarBootcamp={getAvatarBootcamp} />
    </>
  );
};

export default RankingContainer;
