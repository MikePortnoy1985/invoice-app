import { FC } from 'react';
import { ITextFieldProps } from './interfaces';

const TextField: FC<ITextFieldProps> = ({ labelText = '', ...restProps }) => {
  return (
    <div>
      {labelText && (
        <label
          className="block text-custom-purple dark:text-custom-lavender text-base-medium mb-2.5 transition-colors duration-700"
          htmlFor={labelText}
        >
          {labelText}
        </label>
      )}
      <input
        className="w-60 h-12 text-base-bold block rounded py-4 px-5 bg-white border border-custom-lavender dark:border-custom-dark-gray focus:border-custom-lilac caret-custom-lilac
        outline-none dark:bg-custom-dark-2 dark:focus:border-custom-dark-2 transition-colors duration-700"
        id={labelText}
        {...restProps}
      />
    </div>
  );
};

export default TextField;
