import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthController } from "../../../controllers/auth/auth.controller";
import { showAlert } from "../../../utils/alerts/alert.util";
import SignupView from "./signup.auth.view";

const SignupContainer = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  const authController = new AuthController();

  useEffect(() => {
    if (password === confirmPassword) {
      setShowPasswordError(false);
    } else {
      setShowPasswordError(true);
    }
  }, [password, confirmPassword]);

  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handlerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlerShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlerConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handlerSignup = async () => {
    try {
      const signUpDto = {
        first_name,
        last_name,
        password,
        email,
      };
      const response = await authController.signUp(signUpDto);
      if (response.data.is_active) {
        showAlert(
          "Usuario Creado",
          `Usuario creado correctamente ${email}`,
          "success",
        );
        navigate("/signin");
      } else {
        showAlert("Error", `Error al crear el usuario ${email}`, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignupView
        showPassword={showPassword}
        onClickShowPassword={handlerShowPassword}
        showConfirmPassword={showConfirmPassword}
        onClickShowConfirmPassword={handlerShowConfirmPassword}
        email={email}
        onChangeEmail={handlerEmail}
        first_name={first_name}
        onChangeFirstName={handlerFirstName}
        last_name={last_name}
        onChangeLastName={handlerLastName}
        password={password}
        onChangePassword={handlerPassword}
        confirmPassword={confirmPassword}
        onChangeConfirmPassword={handlerConfirmPassword}
        showPasswordError={showPasswordError}
        onclickSignup={handlerSignup}
      />
    </>
  );
};

export default SignupContainer;
