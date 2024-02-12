import banner from "@/assets/images/img3.gif";
import ButtonHero from "@/components/ui/buttonHero";
import { SelectionTitle } from "@/components/ui/selectionTitle";
import { Frame } from "@/components/ui/frame";

export const Hero = () => {
  return (
    <div className="relative bg-backGround mt-6 py-8">
      <Frame classes="justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left max-w-prose md:max-w-none mx-auto">
          <SelectionTitle
            title1="Open Source"
            title2="Validador de Bootcamps"
            text="La mejor manera de encontrar el bootcamp adecuado para ti"
            sizeTitle="text-center text-5xl leading-[68px]"
            sizeText="text-lg mt-4"
          />
        <ButtonHero title="Registro" classes="bg-gray-500 text-White mt-4" />
      </div>
      <div className="hidden md:block">
        <img src={banner} alt="" className="w-full object-cover h-full min-h-screen" />
      </div>
      </div>
    </Frame>
  </div>
  );
}