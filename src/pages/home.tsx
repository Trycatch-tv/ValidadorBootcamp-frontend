import { Hero } from "./components";
import { Community } from "./components";
import { Describe } from "./components";
import img1 from "../assets/images/img1.png"
import { Services } from "./components";

export const Home = () => {
  return (
    <div className="pt-[30px] lg:container xl:px-10 px-1 mx-auto w-full">
      <Hero />
      <Community />
      <div className="flex flex-col items-center justify-center p-12 mx-auto rounded-lg pb-5">
      <Services />
        <div className="flex flex-col items-center justify-center mt-16 p-14 mx-auto rounded-lg">
        <Describe 
          image={img1} 
          imageClass="absolute rounded-14"
          title="Valida el bootcamp adecuado para ti"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
          
        />
      </div>
      </div>
    </div>
  
  );
};