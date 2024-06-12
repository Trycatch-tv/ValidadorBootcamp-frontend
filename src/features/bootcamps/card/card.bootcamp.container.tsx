import type { FC } from "react";
import CardBootcampView from "./card.bootcamp.view";

interface Props {
  bootcamp: any;
}
const CardBootcampContainer: FC<Props> = ({ bootcamp }) => {
  return (
    <>
      <CardBootcampView bootcamp={bootcamp} />
    </>
  );
};

export default CardBootcampContainer;
