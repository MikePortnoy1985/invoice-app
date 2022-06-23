import { FC } from 'react';
import logo from '../../../assets/logo/logo.png';

const Logo: FC = () => {
  return (
    <div className="w-18 h-18">
      <img className="object-fill" src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
