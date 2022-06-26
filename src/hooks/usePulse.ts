import { useState } from 'react';

const PULSE = 'animate-pulse bg-custom-gray rounded-2xl';

const usePulse = (style: string): [string, VoidFunction] => {
  const [targetStyle, setTargetStyle] = useState(`${PULSE} ${style}`);

  const disablePulse = () => {
    setTargetStyle(targetStyle.replace(PULSE, ''));
  };

  return [targetStyle, disablePulse];
};

export default usePulse;
