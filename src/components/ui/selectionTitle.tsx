import { selectionTitleProps } from "@/interface";

export const SelectionTitle = ({
  title1,
  title2,
  text,
  sizeTitle,
  sizeText,
}: selectionTitleProps) => {
  const classesTitle: string = `font-bold font-serif  text-textColor ${sizeTitle}`;
  const classesText: string = `text-[#717171] ${sizeText}`;

  return (
    <div>
      <h1 className={classesTitle}>
        {title1}
        <br />
        <span className="text-green">{title2}</span>
      </h1>
      <p className={classesText}>{text}</p>
    </div>
  );
};
