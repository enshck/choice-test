import {
  ChangeEvent,
  useState,
  useRef,
  useEffect,
  KeyboardEvent as KeyboardEventReact,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDebounce } from 'react-use';

import style from './style.module.css';
import { getUsers } from 'requests';
import { useDetectClickOutside } from 'hooks';
import { ReactComponent as Close } from 'assets/images/close.svg';
import { ReactComponent as Search } from 'assets/images/search.svg';

export type UserOption = {
  label: string;
  value: string;
};

type SearchFieldProps = {
  selectedValues: UserOption[];
  onChange: (values: UserOption[]) => void;
  placeholder: string;
  error?: string | null;
};

export const SearchUsers = ({
  onChange,
  selectedValues,
  placeholder,
  error,
}: SearchFieldProps) => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenedPopover, setOpenedPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState<UserOption[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedElementIndex, setSelectedElementIndex] = useState<
    number | null
  >(null);

  const openPopover = () => {
    setOpenedPopover(true);
  };

  const closePopover = () => {
    setOpenedPopover(false);

    setOptions([]);

    setSearchValue('');

    setSelectedElementIndex(null);

    inputRef?.current?.blur();
  };

  useDetectClickOutside(rootRef, closePopover);

  const getData = async () => {
    if (!searchValue) {
      return;
    }

    setLoading(true);
    const users = await getUsers(searchValue);

    const selectedUsersIds = selectedValues.map((elem) => elem.value);

    const filteredUsers = users
      .filter((elem) => !selectedUsersIds.includes(elem.id))
      .map((elem) => ({
        value: elem.id,
        label: elem.name,
      }));

    setOptions(filteredUsers);
    setLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);
  };

  const handleAddElement = (value: UserOption) => {
    onChange([...selectedValues, value]);
    closePopover();
  };

  const handleDeleteElement = (index: number) => {
    const selectedValuesClone = [...selectedValues];

    selectedValuesClone.splice(index, 1);

    onChange(selectedValuesClone);

    closePopover();
  };

  const onInputBlur = (e: KeyboardEventReact<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      closePopover();
    }
  };

  useDebounce(
    () => {
      void getData();
    },
    400,
    [searchValue]
  );

  useEffect(() => {
    const onArrowPressHandler = (e: KeyboardEvent) => {
      if (!isOpenedPopover) {
        return;
      }

      if (e.key === 'ArrowDown') {
        if (selectedElementIndex === null) {
          setSelectedElementIndex(0);
        } else if (selectedElementIndex + 1 > options.length - 1) {
          setSelectedElementIndex(selectedElementIndex);
        } else {
          setSelectedElementIndex(selectedElementIndex + 1);
        }
      } else if (e.key === 'ArrowUp') {
        if (selectedElementIndex === null) {
          setSelectedElementIndex(null);
        } else if (selectedElementIndex === 0) {
          setSelectedElementIndex(selectedElementIndex);
        } else {
          setSelectedElementIndex(selectedElementIndex - 1);
        }
      } else if (e.key === 'Enter' && selectedElementIndex !== null) {
        handleAddElement(options[selectedElementIndex]);
      }
    };

    window.addEventListener('keydown', onArrowPressHandler);

    return () => {
      window.removeEventListener('keydown', onArrowPressHandler);
    };
  }, [options, selectedElementIndex, isOpenedPopover, setSelectedElementIndex]);

  return (
    <div className={style.root} ref={rootRef}>
      <div
        className={
          error
            ? `${style.inputContainer} ${style.inputError}`
            : style.inputContainer
        }
      >
        <Search width={16} height={16} className={style.searchIcon} />
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholder}
          onFocus={openPopover}
          ref={inputRef}
          onKeyDown={(e) => onInputBlur(e)}
        />
      </div>
      {isOpenedPopover && (
        <div className={style.popover}>
          {options.length > 0 && searchValue.length > 0 ? (
            options.map((elem, index) => (
              <div
                className={
                  selectedElementIndex === index
                    ? `${style.popoverElement} ${style.selected}`
                    : style.popoverElement
                }
                key={elem.value}
                onClick={() => handleAddElement(elem)}
              >
                {elem.label}
              </div>
            ))
          ) : (
            <p>
              {isLoading
                ? t`Loading...`
                : searchValue
                ? t`Not found`
                : t`Start typing`}
            </p>
          )}
        </div>
      )}
      <div className={style.selectedUsersContainer}>
        {selectedValues.map((elem, index) => (
          <div className={style.selectedUser} key={elem.value}>
            {elem.label}
            <button onClick={() => handleDeleteElement(index)}>
              <Close width={12} height={12} />
            </button>
          </div>
        ))}
      </div>
      <div className={style.error}>
        <p>{error}</p>
      </div>
    </div>
  );
};
