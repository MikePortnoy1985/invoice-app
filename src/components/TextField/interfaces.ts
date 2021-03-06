import { HTMLAttributes } from 'react';

export interface ITextFieldProps extends HTMLAttributes<HTMLInputElement> {
  labelText?: string;
}
