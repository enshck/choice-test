import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

export const VoucherPage = () => {
  const { t } = useTranslation();

  return <div className={styles.root}>{t`create a voucher`}</div>;
};
