import { ChangeEvent } from 'react';

import style from './style.module.css';

type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
};

export const TextArea = ({
  onChange,
  value,
  placeholder,
  maxLength,
}: TextAreaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={style.root}>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
      />
      {maxLength && (
        <div className={style.countContainer}>
          <p>
            {value.length} / {maxLength}
          </p>
        </div>
      )}
    </div>
  );
};
