import type { FC } from "react";
import PanelBackofficeContainer from "../panel/panel.backoffice.container";

interface Props {
  panels: any;
}

const ListBackofficeView: FC<Props> = ({ panels }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-16">
      {panels.map((panel: any) => (
        <PanelBackofficeContainer panel={panel} />
      ))}
    </div>
  );
};

export default ListBackofficeView;
