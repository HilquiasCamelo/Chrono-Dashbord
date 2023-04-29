import Login from ".";

interface LoginWrapperProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginWrapper({ setIsAuthenticated }: LoginWrapperProps) {
  return (
    <div>
      {/* Aqui você pode passar outras propriedades para o componente Login, se necessário */}
      <Login setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default LoginWrapper;
