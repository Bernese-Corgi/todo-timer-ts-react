import React, { ChangeEvent } from 'react';
import { InputStyle } from './Input.styled';

type InputProps = {
  type: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, value, onChange }: InputProps) => {
  return <InputStyle value={value} onChange={onChange} type={type} />;
};

Input.defaultProps = {
  type: 'text',
  value: '',
};

export default Input;
