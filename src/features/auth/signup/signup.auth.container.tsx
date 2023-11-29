import {useState} from 'react'
import SignupView from './signup.auth.view'

const SignupContainer = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)

  return (
    <>
      <SignupView 
      showPassword={showPassword} 
      setShowPassword={setShowPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      />
    </>
  )
}

export default SignupContainer
