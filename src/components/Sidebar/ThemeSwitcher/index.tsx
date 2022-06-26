import { FC, KeyboardEvent, useEffect, useState } from 'react';
import useTheme from '../../../hooks/useTheme';
import Moon from '../../../assets/icons/icon-moon.svg';
import Sun from '../../../assets/icons/icon-sun.svg';
import { Theme } from '../../../constants';
import { DELAY, OPACITY_FULL, OPACITY_ZERO } from './constants';

const ThemeSwitcher: FC = () => {
  const { theme, switchTheme } = useTheme();
  const [opacity, setOpacity] = useState(OPACITY_ZERO);

  const handleSwitchThemeOnClick = () => {
    setTimeout(() => setOpacity(OPACITY_ZERO), DELAY);
  };

  const handleSwitchThemeOnEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setTimeout(() => setOpacity(OPACITY_ZERO), DELAY);
    }
  };

  const handleTransitionEnd = () => {
    if (opacity === OPACITY_ZERO) {
      switchTheme();
    }
  };

  useEffect(() => {
    setTimeout(() => setOpacity(OPACITY_FULL), DELAY);
  }, [theme]);

  return (
    <div className="h-full w-18 flex items-center justify-center xl:w-full">
      <div
        className={`${opacity} transition-opacity duration-700 cursor-default`}
        tabIndex={0}
        role="button"
        onClick={handleSwitchThemeOnClick}
        onKeyDown={handleSwitchThemeOnEnter}
        onTransitionEnd={handleTransitionEnd}
      >
        {theme === Theme.Light ? (
          <Moon className="child:text-custom-light-purple child:fill-current child-hover:text-custom-lavender child:transition-all child:duration-700" />
        ) : (
          <Sun className="child:text-custom-light-purple child:fill-current child-hover:text-custom-lavender child:transition-all child:duration-700" />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
