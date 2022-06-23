import { FC } from 'react';
import avatar from '../../../assets/avatar/avatar.png';

const Avatar: FC = () => {
  return (
    <div className="h-full w-20 border-l border-custom-dark-4 flex justify-center items-center">
      <div className="h-8 w-8">
        <img className="object-contain" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Avatar;
