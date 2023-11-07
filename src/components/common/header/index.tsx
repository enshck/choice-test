import { useTranslation } from 'react-i18next';

import style from './style.module.css';
import { languages } from 'constants/languages';
import { languageKey } from 'constants/localstorage-keys';
import { LanguageSwitch } from './components/language-switch';

export const Header = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    void i18n.changeLanguage(value);
    localStorage.setItem(languageKey, value);
  };

  return (
    <header className={style.root}>
      <h2>Voucher App</h2>
      <LanguageSwitch
        options={languages}
        handleChange={handleChangeLanguage}
        value={i18n.language}
      />
    </header>
  );
};
