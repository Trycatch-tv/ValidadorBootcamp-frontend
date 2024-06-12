import type { FC } from "react";

interface PropsInterface {
  year: number;
}

const FooterView: FC<PropsInterface> = ({ year }) => {
  return (
    <>
      <div>
        <footer className="bg-gray-800 text-white py-4 absolute left-0 bottom-0 w-full">
          <div className="container text-center space-y-2">
            <p className="text-xs flex justify-center items-center">
              Desarrollado por Comunidad TryCatch
              <img
                className="h-10 w-10"
                src="https://trycatch.tv/_astro/nibble.a3d0ce1e.png"
              />
            </p>
            <p className="text-xs">&copy; {year} GlassCamp</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterView;
