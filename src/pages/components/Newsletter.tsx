const Newsletter = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 rounded-18">
        <div className="pb-12 mt-12 md:pb-20">
          <h3 className="font-black text-laurenBlue pb-7 text-center text-4xl">
            Newsletter
          </h3>
          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block flex justify-center items-center" aria-hidden="true" >
              <svg width="300" height="300" viewBox="0 0 40 40" fill="#59CBE7" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5437 0.591709C27.425 0 34.9375 7.89096 34.9375 17.182C34.9375 21.1921 33.5628 24.885 31.2758 27.8224C31.3274 27.4728 31.3542 27.115 31.3542 26.7509C31.3542 22.7624 28.1455 19.5291 24.1875 19.5291C20.2295 19.5291 17.0208 22.7624 17.0208 26.7509C17.0208 30.7394 20.2295 33.9727 24.1875 33.9727C25.8663 33.9727 27.4103 33.3911 28.6318 32.4168C33.3197 29.0067 36.3708 23.4534 36.3708 17.182C36.3708 9.51085 31.8057 2.91411 25.2637 0C35.3433 1.79339 43 10.6629 43 21.3346C43 33.3001 33.3741 43 21.5 43C9.62588 43 0 33.3001 0 21.3346C0 10.3728 7.70417 1.31389 18.5437 0.591709Z" />
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <p className="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                    <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow p-3 rounded-14" href="#0">Suscríbete</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Gracias por suscribirte!</p> */}
                  <p className="text-sm text-gray-400 mt-3">Prueba gratuita de 7 días. No se requiere tarjeta de crédito.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;