import { useEffect, RefObject } from 'react';

export const useDetectClickOutside = (
  ref: RefObject<HTMLDivElement>,
  clickOutsideCallback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        clickOutsideCallback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
