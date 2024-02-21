import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        // backgroundColor: '#c2d4ff',
        margin: '0 auto',
        padding: '0 128px',
      }}
    >
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
