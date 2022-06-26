import { FC } from 'react';
import usePulse from '../../../hooks/usePulse';
import logo from '../../../assets/logo/logo.png';

const Logo: FC = () => {
  const [style, disablePulse] = usePulse(
    'w-18 h-full md:w-20 xl:w-full xl:h-[6.375rem]',
  );

  return (
    <div className={style}>
      <img
        className="object-fill"
        src={logo}
        alt="Logo"
        onLoad={disablePulse}
      />
    </div>
  );
};

export default Logo;
