import { buttonProps } from "../../interface";

const ButtonHero = ({
  icon,
  title,
  btnType,
  handleOnclick,
  classes,
}: buttonProps) => {
  const classButton: string = `${classes} flex justify-center items-center px-[12px] py-[10px] rounded-[4px]`;
  return (
    <button
      type={btnType || "button"}
      onClick={handleOnclick}
      className={classButton}
    >
      <span className="text-base font-semibold">{title}</span>
      {icon && <span className="ml-[8px] ">{icon}</span>}
    </button>
  );
};

export default ButtonHero;
