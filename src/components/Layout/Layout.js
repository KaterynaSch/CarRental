import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '0 128px 150px',
        // background: 'linear-gradient(to  top, #3470ff, white)',
      }}
    >
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
