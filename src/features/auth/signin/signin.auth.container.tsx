import {useState} from 'react'
import SigninView from './signin.auth.view'

const SigninContainer = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <SigninView showPassword={showPassword} setShowPassword={setShowPassword}/>
    </>
  )
}

export default SigninContainer
