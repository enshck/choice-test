import { Outlet } from 'react-router-dom';

export const Page = () => (
  <div>
    <div>Header</div>
    <Outlet />
  </div>
);
