import React, { ChangeEvent, FocusEvent, forwardRef } from 'react';
import { InputStyle } from './Input.styled';

export type InputProps = InputStyleProps & {
  type: string;
  value: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type InputStyleProps = {
  inputSize?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, value, onBlur, onChange, inputSize }, ref) => {
    return (
      <InputStyle
        type={type}
        value={value}
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        inputSize={inputSize}
      />
    );
  }
);

Input.defaultProps = {
  type: 'text',
  value: '',
};

Input.displayName = 'Input';

export default Input;
