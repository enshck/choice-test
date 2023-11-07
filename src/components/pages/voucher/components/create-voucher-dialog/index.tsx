import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { Dialog } from 'components/common/dialog';
import style from './style.module.css';
import { RangeSlider } from 'components/common/range-slider';
import { SearchUsers, UserOption } from 'components/common/search-users';
import { TextArea } from 'components/common/textarea';
import { Button } from 'components/common/button';

type CreateVoucherDialogProps = {
  isOpened: boolean;
  onClose: () => void;
};

type FormData = {
  amount: number;
  users: UserOption[];
  message: string;
};

export const CreateVoucherDialog = ({
  isOpened,
  onClose,
}: CreateVoucherDialogProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    amount: 100,
    users: [],
    message: '',
  });

  const onChangeField = (value: string | UserOption[], key: keyof FormData) => {
    setFormData((oldData) => ({
      ...oldData,
      [key]: value,
    }));
  };

  const onSubmit = () => {};

  return (
    <Dialog onClose={onClose} title={t`create a voucher`} isOpened={isOpened}>
      <div className={style.root}>
        <div className={style.voucherContainer}>
          <div className={style.voucher}>
            <h1>Voucher</h1>
            <div className={style.voucherData}>
              <h3>Message</h3>
              <h3>500</h3>
            </div>
          </div>
        </div>
        <RangeSlider
          handleChange={(value) => onChangeField(value, 'amount')}
          value={formData.amount}
          min={100}
          max={5000}
        />
        <SearchUsers
          placeholder="search user"
          onChange={(value) => onChangeField(value, 'users')}
          selectedValues={formData.users}
        />
        <TextArea
          value={formData.message}
          onChange={(value) => onChangeField(value, 'message')}
        />
        <Button onClick={onSubmit}>Pay & Send</Button>
      </div>
    </Dialog>
  );
};
