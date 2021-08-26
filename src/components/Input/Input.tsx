import React, { ChangeEvent, forwardRef } from 'react';
import { InputStyle } from './Input.styled';

export type InputProps = InputStyleProps & {
  type: string;
  id?: string;
  value: string;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type InputStyleProps = {
  inputSize?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, id, value, readOnly, onChange, inputSize }, ref) => {
    return (
      <InputStyle
        type={type}
        id={id}
        value={value}
        ref={ref}
        readOnly={readOnly}
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
