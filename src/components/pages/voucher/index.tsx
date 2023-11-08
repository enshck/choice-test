import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import styles from './style.module.css';
import { Button } from 'components/common/button';
import { CreateVoucherDialog } from './components/create-voucher-dialog';

export const VoucherPage = () => {
  const [isOpened, setOpened] = useState(false);
  const { t } = useTranslation();

  const openDialog = () => {
    setOpened(true);
  };

  const closeDialog = () => {
    setOpened(false);
  };

  return (
    <div className={styles.root}>
      <Button onClick={openDialog}>{t`Create a voucher`}</Button>
      <CreateVoucherDialog isOpened={isOpened} onClose={closeDialog} />
    </div>
  );
};
