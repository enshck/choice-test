import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { Dialog } from 'components/common/dialog';
import style from './style.module.css';
import { RangeSlider } from 'components/common/range-slider';
import { SearchUsers, UserOption } from 'components/common/search-users';
import { TextArea } from 'components/common/textarea';
import { Button } from 'components/common/button';
import { VoucherCard } from '../voucher-card';

type CreateVoucherDialogProps = {
  isOpened: boolean;
  onClose: () => void;
};

type FormData = {
  amount: number;
  users: UserOption[];
  message: string;
};

const initialData: FormData = {
  amount: 100,
  users: [],
  message: '',
};

export const CreateVoucherDialog = ({
  isOpened,
  onClose,
}: CreateVoucherDialogProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isFormError, setFormError] = useState(false);

  const onChangeField = (value: string | UserOption[], key: keyof FormData) => {
    setFormError(false);
    setFormData((oldData) => ({
      ...oldData,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (formData.users.length === 0) {
      setFormError(true);
      return;
    }

    setFormError(false);

    alert(t`Request to the payment system. Not implemented`);
  };

  useEffect(() => {
    if (isOpened) {
      setFormData(initialData);
    }
  }, [isOpened]);

  return (
    <Dialog onClose={onClose} title={t`Create a voucher`} isOpened={isOpened}>
      <div className={style.root}>
        <div className={style.voucherContainer}>
          <VoucherCard amount={formData.amount} message={formData.message} />
        </div>
        <div className={style.formContainer}>
          <RangeSlider
            handleChange={(value) => onChangeField(value, 'amount')}
            value={formData.amount}
            min={100}
            max={5000}
          />
          <SearchUsers
            placeholder={t`Search users (by phone or name)`}
            onChange={(value) => onChangeField(value, 'users')}
            selectedValues={formData.users}
            error={isFormError ? t`Please select more users` : null}
          />
          <TextArea
            value={formData.message}
            onChange={(value) => onChangeField(value, 'message')}
            placeholder={t`Enter a message for the voucher`}
          />
          <Button onClick={onSubmit}>{t`Pay & Send`}</Button>
        </div>
      </div>
    </Dialog>
  );
};
