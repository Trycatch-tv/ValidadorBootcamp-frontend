import { useAuthStore } from "@/stores/auth/auth.store"
import { showAlert } from "@/utils/alerts/alert.util"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SigninView from "./signin.auth.view"

const SigninContainer = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, isAuth } = useAuthStore()

  const handlerShowPassword = () => setShowPassword(!showPassword)

  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  useEffect(() => {
    if (isAuth()) {
      showAlert("Bienvenido", "Has iniciado sesión correctamente", "success")
      navigate("/")
    } else if (isAuth() === false) {
      showAlert("error", "Usuario o contraseña incorrectos")
    }
  }, [isAuth()])

  const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const handlerSignIn = async () => {
    signIn(email, password)
  }

  return (
    <>
      <SigninView
        showPassword={showPassword}
        onClickShowPassword={handlerShowPassword}
        email={email}
        onChangeEmail={handlerEmail}
        password={password}
        onChangePassword={handlerPassword}
        onClickSignIn={handlerSignIn}
      />
    </>
  )
}

export default SigninContainer
