import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { API_URL_BASE } from "../../environment/constant";

import {
  FieldErrors,
  FieldValues,
  FormState,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { FormContainer, LoginContainer, Message, GoogleButton } from "./style";
import axios from "axios";
import { useState } from "react";

interface LoginProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type CustomUseFormReturn<T extends FieldValues> = {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  formState?: FormState<T>;
  errors?: FieldErrors<T>;
  reset: () => void;
};

function Login({ setIsAuthenticated }: LoginProps) {
  const resolver = yupResolver(schema);
  const {
    register,
    handleSubmit,
    formState,
    errors,
    reset,
  }: CustomUseFormReturn<LoginFormData> = useForm<LoginFormData>({
    resolver,
    shouldFocusError: true,
  });

  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const onSubmitHandler: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await axios.post(API_URL_BASE + "login", {
        email: data.email,
        password: data.password,
      });

      const token = response.headers.authorization;

      document.cookie = `token=${token}; path=/`;

      setIsAuthenticated(true);
      reset();
      setError("");
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Usuário ou senha inválido(s).");
    }
  };

  return (
    <LoginContainer>
      <FormContainer>
        <h2>Entre com suas credenciais</h2>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} />
          {errors?.email && <span>{errors.email.message}</span>}

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" {...register("password")} />
          {errors?.password && <span>{errors.password.message}</span>}

          {error && <Message>{error}</Message>}

          <button type="submit">Entrar</button>
        </form>
        <div>
          <p>ou</p>
          <GoogleButton>Entrar com o Google</GoogleButton>
        </div>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;