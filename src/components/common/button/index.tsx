import { PropsWithChildren } from 'react';

import style from './style.module.css';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
} & PropsWithChildren;

export const Button = ({
  onClick,
  children,
  disabled,
  ariaLabel,
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={disabled ? `${style.button} ${style.disabled}` : style.button}
    disabled={disabled}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
