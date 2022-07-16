import { EButtonVariant } from '../interfaces';

export default function getStyles(variant: EButtonVariant) {
  switch (variant) {
    case EButtonVariant.Button1:
      return [
        'min-w-[4rem]',
        'text-white',
        'bg-custom-purple',
        'hover:bg-custom-lilac',
      ];
    case EButtonVariant.Button2:
      return [
        'min-w-[2rem]',
        'text-white',
        'bg-custom-purple',
        'hover:bg-custom-lilac',
      ];
    case EButtonVariant.Button3:
      return [
        'min-w-[2rem]',
        'text-custom-light-purple dark:text-custom-lavender',
        'bg-custom-light-1 dark:bg-custom-dark-gray',
        'hover:bg-custom-lavender dark:hover:bg-white',
        'hover:text-custom-light-purple dark:hover:text-custom-lavender',
      ];
    case EButtonVariant.Button4:
      return [
        'min-w-[2rem]',
        'text-custom-gray dark:text-custom-lavender',
        'bg-custom-dark-3',
        'hover:bg-custom-dark-5 dark:hover:bg-custom-dark-2',
        'hover:text-custom-gray dark:hover:text-custom-lavender',
      ];
    case EButtonVariant.Button5:
      return [
        'min-w-[2rem]',
        'text-white',
        'bg-custom-red',
        'hover:bg-custom-pink',
      ];
    case EButtonVariant.Button6:
      return [
        'w-[21.875rem]',
        'text-custom-light-purple dark:text-custom-lavender',
        'bg-custom-light-1 dark:bg-custom-dark-gray',
        'hover:bg-custom-lavender dark:hover:bg-white',
        'hover:text-custom-light-purple dark:hover:text-custom-lavender',
      ];

    default:
      return ['', '', '', '', ''];
  }
}
