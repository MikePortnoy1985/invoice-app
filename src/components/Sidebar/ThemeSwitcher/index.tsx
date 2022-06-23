import { FC, KeyboardEvent } from 'react';
import { Theme } from '../../../constants';
import useTheme from '../../../hooks/useTheme';
import Moon from '../../../assets/icons/icon-moon.svg';
import Sun from '../../../assets/icons/icon-sun.svg';

const ThemeSwitcher: FC = () => {
  const { theme, switchTheme } = useTheme();

  const handleClickSwitchTheme = () => {
    switchTheme();
  };

  const handleSwitchThemeOnKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      switchTheme();
    }
  };

  return (
    <div className="h-full w-18 flex items-center justify-center">
      <div
        tabIndex={-1}
        role="button"
        onClick={handleClickSwitchTheme}
        onKeyDown={handleSwitchThemeOnKeyPress}
      >
        {theme === Theme.Light ? <Moon /> : <Sun />}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
