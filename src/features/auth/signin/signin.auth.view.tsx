import { Button, Input } from "@/components/ui"
import Layout from "@/layout/Layout"
import { Eye, EyeOff } from "lucide-react"
import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  showPassword: boolean
  onClickShowPassword: () => void
  email: string
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  password: string
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClickSignIn: () => void
}
const SigninView: FC<Props> = ({
  showPassword,
  onClickShowPassword,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onClickSignIn,
}) => {
  return (
    <Layout>
      <section>
        <div className="container container-lg  w-full mx-auto flex justify-center ">
          {/* container form para del login */}
          <div className="lg:flex-1 flex-col flex items-center justify-center">
            <div className="w-full">
              <div className="mb-16">
                <small className="text-gray-400 text-2xl">Bienvenidos a</small>
                <h2 className="text-4xl font-semibold max-w-md">
                  Validador de bootcamp{" "}
                </h2>
              </div>
              <form className="max-w-md min-w-[350px] w-full">
                <div className="my-5">
                  <label className="text-gray-700 text-xs font-semibold block my-1">
                    Usuario
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                  />
                </div>
                <div className="my-5">
                  <label className="text-gray-700 text-xs font-semibold block my-1">
                    Contraseña
                  </label>
                  <div className="flex border rounded-md items-center px-3">
                    <Input
                      className="border-none px-0"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={onChangePassword}
                      placeholder="Enter your password"
                      required
                    />
                    {showPassword ? (
                      <Eye
                        onClick={onClickShowPassword}
                        className="h-4 text-gray-500 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={onClickShowPassword}
                        className="h-4 text-gray-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <div className="my-5">
                  <Button
                    type="button"
                    className="w-full"
                    onClick={onClickSignIn}
                  >
                    Inicia sesión
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-4 my-5">
                  <span className="h-[2px] w-full bg-gray-200 my-1" />
                  <p className="text-gray-400 text-xs">O</p>
                  <span className="h-[2px] w-full bg-gray-200 my-1" />
                </div>
                <Button type="button" className="w-full" variant={"outline"}>
                  Continua con Google
                </Button>
                <p className="text-xs mt-10 text-center">
                  No tienes una cuenta?{" "}
                  <Link className="text-blue-500" to="/signup">
                    Registrate
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* //container para el banner del login */}
          <div className="flex-1 hidden min-h-full   overflow-hidden lg:flex items-center justify-center">
            <div className="w-full h-full max-h-[500px] rounded-md overflow-hidden">
              {/* imagen ramdom */}
              <img
                className="h-full w-full object-cover object-center transform rotate-6"
                src="https://source.unsplash.com/random/?learning"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SigninView
