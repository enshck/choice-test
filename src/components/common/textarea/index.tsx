import { ChangeEvent } from 'react';

import style from './style.module.css';

type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const TextArea = ({ onChange, value, placeholder }: TextAreaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      className={style.root}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
