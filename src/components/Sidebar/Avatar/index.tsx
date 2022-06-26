import { FC } from 'react';
import usePulse from '../../../hooks/usePulse';
import avatar from '../../../assets/avatar/avatar.png';

const Avatar: FC = () => {
  const [style, disablePulse] = usePulse('h-8 w-8 rounded-full');

  return (
    <div className="h-full w-20 border-l border-custom-dark-4 flex justify-center items-center xl:w-full xl:border-t xl:border-l-0">
      <div className={style}>
        <img
          className="object-contain"
          src={avatar}
          alt="avatar"
          onLoad={disablePulse}
        />
      </div>
    </div>
  );
};

export default Avatar;
