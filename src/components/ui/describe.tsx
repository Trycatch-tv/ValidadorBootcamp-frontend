import { Heading } from "./Heading";
import ButtonHero from "./buttonHero";
import { describeProps } from "@/interface";
import { Frame } from "./frame";

export const Describe = ({ image, title, text }: describeProps) => {
  return (
    <Frame>
      <img src={image} alt="" className="h-[450px]" />
      <div>
        <Heading title={title} text={text} />
        <div className="mt-14 ml-2">
          <ButtonHero
            title="Learn More"
            classes="text-base font-semibold bg-gray-500 text-White mt-4 items-center ml-36"
          />
        </div>
      </div>
    </Frame>
  );
};