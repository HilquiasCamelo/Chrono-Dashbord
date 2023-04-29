import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import ListarCargos from "./pages/Cargo";
import { History } from "./pages/History";
import { Contador } from "./pages/Contador";
import { DefaultLayout } from "./pages/Layout/DefoutLayout";
import LoginWrapper from "./pages/Login/LoginPage";
import Home from "./pages/Home";
import { validarToken } from "./security/ValidaToken";
import { getToken } from "./security/ValidaToken";

export function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(validarToken());
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    const storedToken = getToken();
    if (storedToken !== null) {
      setToken(storedToken);
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/login" element={<LoginWrapper setIsAuthenticated={setIsAuthenticated} />} />
      {isAuthenticated ? (
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/contador" element={<Contador />} />
          <Route path='/lista-cargos' element={<ListarCargos token={token} history={undefined}  />} />

        </Route>
      ) : (
        <Route path="/" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}
