import { FC } from 'react';
import Avatar from './Avatar';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Sidebar: FC = () => {
  return (
    <div className="theme-styles absolute left-0 top-0 h-18 md:h-20 w-full xl:h-full xl:w-[6.375rem] flex xl:flex-col justify-between items-center xl:rounded-r-2xl">
      <Logo />
      <div className="flex h-full xl:flex-col xl:justify-between xl:items-center xl:h-[12.75rem] xl:w-full">
        <ThemeSwitcher />
        <Avatar />
      </div>
    </div>
  );
};

export default Sidebar;
