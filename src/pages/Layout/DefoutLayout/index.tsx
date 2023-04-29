import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { LayoutContainer } from './style';

export function DefaultLayout() {
  const location = useLocation();

  if (location.pathname === '/login') {
    return <Outlet />;
  }

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
