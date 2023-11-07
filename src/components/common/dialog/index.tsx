import { createPortal } from 'react-dom';
import { PropsWithChildren, useEffect } from 'react';

import { Button } from 'components/common/button';
import { ReactComponent as Close } from 'assets/images/close.svg';
import style from './style.module.css';

export type DialogProps = {
  isOpened: boolean;
  onClose: () => void;
  title?: string;
} & PropsWithChildren;

export const Dialog = ({ isOpened, onClose, children, title }: DialogProps) => {
  useEffect(() => {
    const onCloseHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onCloseHandler);

    return () => {
      window.removeEventListener('keydown', onCloseHandler);
    };
  }, []);

  return createPortal(
    <div className={`${style.root} ${isOpened ? style.opened : ''}`}>
      <div className={`${style.container} ${isOpened ? style.opened : ''}`}>
        <div className={style.header}>
          <h3>{title}</h3>
          <Button onClick={onClose}>
            <Close width={15} height={15} />
          </Button>
        </div>
        <div className={style.content}>{children}</div>
      </div>
    </div>,
    document.getElementById('dialog') as Element
  );
};
