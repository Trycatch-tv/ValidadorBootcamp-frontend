const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 absolute left-0 bottom-0 w-full">
        <div className="container text-center space-y-2">
          <p className="text-xs flex justify-center items-center">
            Desarrollado por Comunidad TryCatch{" "}
            <img
              className="h-10 w-10"
              src="https://trycatch.tv/_astro/nibble.a3d0ce1e.png"
            ></img>
          </p>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Validador Bootcamp
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
