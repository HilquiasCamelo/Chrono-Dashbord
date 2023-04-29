import { NavLink } from "react-router-dom";
import { HouseLine, Desktop, List, Scroll } from "phosphor-react";
import { HeaderContainer } from "./style";
import logoIgnite from "../../assets/superman.svg";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { getToken, validarToken } from "../../security/ValidaToken";

interface TokenPayload {

  sub: string;
  exp: number;
  iat: number;
  email: string;
  perfil: string;
  username: string;
}

export function Header() {
  const token = getToken(); // obtém o token JWT
  const isAuthenticated = validarToken(); // valida o token JWT
  const payload = token ? jwt_decode<TokenPayload>(token) : null; // decodifica o payload do token JWT

  console.log(payload);
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      {isAuthenticated && payload && (
        <div className="username">
          <span>Olá,</span>
          <strong>{payload.username}!</strong>
        </div>
      )}
      <nav>
        <NavLink to="/" title="Home">
          <HouseLine size={24} />
        </NavLink>
        <NavLink to="/contador" title="Contador">
          <Desktop size={24} />
        </NavLink>
        <NavLink to="/lista-cargos" title="Lista de Cargos">
          <List size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
       
      </nav>
    </HeaderContainer>
  );
}
