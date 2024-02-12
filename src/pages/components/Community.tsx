import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "@/assets/images/img4.jpg";
import img2 from "@/assets/images/trycatch.png";
import img3 from "@/assets/images/img5.jpg";
import ButtonHero from "@/components/ui/buttonHero";
import { Heading } from "@/components/ui/Heading";

export const Community = () => {
  return (
    <div className="py-10 my-3 container mx-auto">
      <div className="text-center mx-24 mt-7 pt-12">
        <Heading
          title="Buscas un Bootcamp pero no sabes que elegir?"
          text="Te ayudamos a elegir tu bootcamp desde la experiencia.​"
        />
        <div className="flex justify-between mt-12">
          <div className="pb-10 w-full lg:w-1/3 relative">
            <img src={img1} alt="" className="w-[300px] rounded-lg object-cover mr-auto shadow-md" />
            <div className="absolute flex flex-col bottom-0 p-4 mx-6 bg-[#F5F7FA] rounded-md shadow-md">
              <h3 className="text-lg text-textColor2 font-semibold">
                Comunidad realista: conocemos tu realidad y queremos evitar que elijas un mal bootcamp
              </h3>
              <ButtonHero
                title="Leer más"
                icon={<FontAwesomeIcon icon={faArrowRight} />}
                classes="mt-4 text-green"
              />
            </div>
          </div>
          <div className="pb-10 w-full lg:w-1/3 relative">
            <img src={img2} alt="" className="w-[300px] rounded-lg object-cover mr-auto shadow-md" />
            <div className="absolute flex flex-col bottom-0 p-4 mx-6 bg-[#F5F7FA] rounded-md shadow-md">
              <h3 className="text-lg text-textColor2 font-semibold">
                Contenido: TryCatch.tv hace contenido todos los dias! ve a verlo y conoce más de nosotros!
              </h3>
              <ButtonHero
                title="Leer más"
                icon={<FontAwesomeIcon icon={faArrowRight} />}
                classes="mt-4 text-green"
              />
            </div>
          </div>
          <div className="pb-10 w-full lg:w-1/3 relative">
            <img src={img3} alt="" className="w-[300px] rounded-lg object-cover mr-auto shadow-md" />
            <div className="absolute flex flex-col bottom-0 p-4 mx-6 bg-[#F5F7FA] rounded-md shadow-md">
              <h3 className="text-lg text-textColor2 font-semibold">
               Comunidad sin fronteras, dispuesta a compartir información de valor. 
              </h3>
              <ButtonHero
                title="Leer más"
                icon={<FontAwesomeIcon icon={faArrowRight} />}
                classes="mt-4 text-green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
