import { useLayoutEffect, useState } from 'react';
import { Theme } from '../constants';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? Theme.Dark : Theme.Light;

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || defaultTheme,
  );

  const switchTheme = () => {
    document.documentElement.classList.toggle(theme);
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
  };

  useLayoutEffect(() => {
    document.documentElement.classList.toggle(theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, switchTheme };
};

export default useTheme;
