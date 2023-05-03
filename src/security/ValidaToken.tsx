import jwt_decode from "jwt-decode";
import { parseCookies } from "nookies";

interface TokenPayload {
  sub: string;
  exp: number;
  iat: number;
  email: string;
  perfil: string;
  nome: string;
}

export function validarToken(): boolean {
  const token = localStorage.getItem("token");
  const cookies = parseCookies();

  const tokenWithBearer = cookies.token || null;
  if (tokenWithBearer) {
    const [bearer, token] = tokenWithBearer.split(' ');
    if (bearer === 'Bearer') {
      return true;
    }
  }
  if (token) {
   try {
        const decoded = jwt_decode<TokenPayload>(token);

        if (decoded.exp < Date.now() / 1000) {
          localStorage.removeItem("token");
          console.log("Token expirado");
          return false;
        }

        return true;
      } catch (error) {
        console.log("Token inválido");
        return false;
      }
  }

  console.log("Token não encontrado");
  return false;
}

export function getToken(): string | null {
  const cookies = parseCookies();
  const tokenWithBearer = cookies.token || null;
  if (tokenWithBearer) {
    const [bearer, token] = tokenWithBearer.split(' ');
    if (bearer === 'Bearer') {
      return token.replace(/^Bearer\s+/, '');
    }
  }
  return null;
}

export function getNome(): string | null {
  const token = getToken();
  if (token) {
    try {
      const decoded = jwt_decode<TokenPayload>(token);
      return decoded.nome;
    } catch (error) {
      console.log("Token inválido");
      return null;
    }
  }
  console.log("Token não encontrado");
  return null;
}
