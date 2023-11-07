import { Route, Routes, Navigate } from 'react-router-dom';

import { routes } from 'constants/routes';
import { Page } from 'components/common/page';
import { VoucherPage } from './pages/voucher';
import { NotFound } from './pages/not-found';

export const Router = () => (
  <Routes>
    <Route index element={<Navigate to={routes.voucher} replace />} />
    <Route element={<Page />}>
      <Route path={routes.voucher} element={<VoucherPage />} />
    </Route>
    <Route path={routes.any} element={<NotFound />} />
  </Routes>
);
