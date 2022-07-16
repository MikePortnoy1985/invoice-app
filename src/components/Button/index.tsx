import { FC } from 'react';
import { ButtonProps, EButtonVariant } from './interfaces';
import Plus from '../../assets/icons/icon-button-plus.svg';
import getStyles from './helpers/getStyles';

const Button: FC<ButtonProps> = ({
  text = '',
  variant = EButtonVariant.Button1,
  ...restProps
}) => {
  const [minWidth, textColor, bgColor, hoveredBgColor, hoveredTextColor] =
    getStyles(variant);

  const padding = variant === EButtonVariant.Button1 ? 'p-1' : 'pr-2 pl-2';
  const justify =
    variant === EButtonVariant.Button6 ? 'justify-center' : 'justify-start';

  return (
    <button type="button" {...restProps}>
      <div
        className={`inline-flex items-center ${justify} ${padding} ${minWidth} rounded-3xl ${textColor} ${bgColor} ${hoveredBgColor} ${hoveredTextColor} transition-colors duration-700 active:translate-y-[1px]`}
      >
        {variant === EButtonVariant.Button1 && <Plus className="mr-2" />}
        <span className="p-2">{text}</span>
      </div>
    </button>
  );
};

export default Button;
