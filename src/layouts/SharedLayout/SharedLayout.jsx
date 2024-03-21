import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => (
  <>
    <p>Shared Layout</p>
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  </>
);

export default SharedLayout;
