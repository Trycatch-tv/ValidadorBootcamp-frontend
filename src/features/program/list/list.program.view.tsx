import type { ProgramModel } from "@/models/program.model";
import type { FC } from "react";
import CardProgramContainer from "../card/card.program.container";

interface Props {
  programs: ProgramModel[];
}

const ListProgramView: FC<Props> = ({ programs }) => {
  return (
    <div className="flex flex-row gap-4 ">
      {programs &&
        programs.map((program) => (
          <CardProgramContainer key={program.id} program={program} />
        ))}
      {!programs && (
        <div className="flex items-center justify-center w-full">
          <p className="bg-gray-100 py-3 px-2.5 rounded-md">
            No hay programas disponibles
          </p>
        </div>
      )}
    </div>
  );
};

export default ListProgramView;
