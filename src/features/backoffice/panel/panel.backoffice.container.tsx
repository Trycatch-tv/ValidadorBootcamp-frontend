import type { FC } from "react";
import PanelBackofficeView from "./panel.backoffice.view";

interface Props {
  panel: any;
}

const PanelBackofficeContainer: FC<Props> = ({ panel }) => {
  return <PanelBackofficeView panel={panel} />;
};

export default PanelBackofficeContainer;
