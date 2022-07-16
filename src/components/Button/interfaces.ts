import { HTMLAttributes } from 'react';

export enum EButtonVariant {
  Button1 = 'Button-1',
  Button2 = 'Button-2',
  Button3 = 'Button-3',
  Button4 = 'Button-4',
  Button5 = 'Button-5',
  Button6 = 'Button-6',
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: EButtonVariant;
}
