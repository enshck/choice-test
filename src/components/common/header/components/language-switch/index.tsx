import style from './style.module.css';

type LanguageSwitchProps = {
  handleChange: (value: string) => void;
  options: string[];
  value: string;
};

export const LanguageSwitch = ({
  handleChange,
  options,
  value,
}: LanguageSwitchProps) => {
  return (
    <div className={style.root}>
      {options.map((elem, index) => (
        <div className={style.element} key={elem}>
          <button
            onClick={() => handleChange(elem)}
            style={elem === value ? { color: 'var(--main-color)' } : {}}
          >
            {elem}
          </button>
          {options.length - 1 !== index && (
            <div className={style.separateLine} />
          )}
        </div>
      ))}
    </div>
  );
};
