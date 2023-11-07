import { ChangeEvent } from 'react';

import style from './style.module.css';

type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
};

export const TextArea = ({ onChange, value }: TextAreaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea className={style.root} value={value} onChange={handleChange} />
  );
};
