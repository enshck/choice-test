import { PropsWithChildren } from 'react';

import style from './style.module.css';

type ButtonProps = {
  onClick: () => void;
} & PropsWithChildren;

export const Button = ({ onClick, children }: ButtonProps) => (
  <button onClick={onClick} className={style.button}>
    {children}
  </button>
);
