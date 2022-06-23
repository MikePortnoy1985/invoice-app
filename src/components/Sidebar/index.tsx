import { FC } from 'react';
import Avatar from './Avatar';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Sidebar: FC = () => {
  return (
    <div className="absolute left-0 top-0 h-18 w-full bg-custom-dark-3 dark:bg-custom-dark-2 flex justify-between items-center">
      <Logo />
      <div className="flex h-full">
        <ThemeSwitcher />
        <Avatar />
      </div>
    </div>
  );
};

export default Sidebar;
