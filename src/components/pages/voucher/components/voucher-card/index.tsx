import { useTranslation } from 'react-i18next';

import style from './style.module.css';
import { getVoucherColors } from './utils';

type VoucherCardProps = {
  message: string;
  amount: number;
};

export const VoucherCard = ({ amount, message }: VoucherCardProps) => {
  const { t } = useTranslation();
  const background = getVoucherColors(amount);

  return (
    <div className={style.root} style={{ background }}>
      <h1>{t`Voucher`}</h1>
      <div className={style.voucherData}>
        <div className={style.messageContainer}>
          <p>{message || t`The voucher is valid for one year`}</p>
        </div>
        <div className={style.amountContainer}>
          <p>{amount}</p>
        </div>
      </div>
    </div>
  );
};
