import { FC } from "react"

interface PropsInterface {
  year: number
}

const FooterView: FC<PropsInterface> = ({ year }) => {
  return (
    <>
      <div>
        <footer className="bg-gray-800 text-white py-4 absolute left-0 bottom-0 w-full">
          <div className="container text-center space-y-2">
            <p className="text-xs flex justify-center items-center">
              <p className="text-xs italic">
                &copy; {year} GlassCamp ❤️ Desarrollado por la Comunidad //
                TryCatch.tv
              </p>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default FooterView
