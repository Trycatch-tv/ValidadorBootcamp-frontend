import { childrenProp } from "@/interface";

export const Frame = ({ children, classes }: childrenProp) => {
  const classFrame: string = `flex justify-center items-center mx-24 ${classes}`;
  return (
    <div>
      <div className={classFrame}>{children}</div>
    </div>
  );
};
