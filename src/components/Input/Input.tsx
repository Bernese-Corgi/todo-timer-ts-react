import React, { ChangeEvent } from 'react';
import { InputStyle } from './Input.styled';

export type InputProps = InputStyleProps & {
  type: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type InputStyleProps = {
  inputSize?: string;
};

const Input = ({ type, value, onChange, inputSize }: InputProps) => {
  return (
    <InputStyle
      value={value}
      onChange={onChange}
      type={type}
      inputSize={inputSize}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
};

export default Input;
