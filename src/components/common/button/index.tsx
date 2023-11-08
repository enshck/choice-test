import { PropsWithChildren } from 'react';

import style from './style.module.css';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
} & PropsWithChildren;

export const Button = ({ onClick, children, disabled }: ButtonProps) => (
  <button
    onClick={onClick}
    className={disabled ? `${style.button} ${style.disabled}` : style.button}
    disabled={disabled}
  >
    {children}
  </button>
);
