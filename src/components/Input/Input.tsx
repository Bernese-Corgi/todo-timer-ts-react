import React from 'react';
import { InputStyle } from './Input.styled';

type InputProps = {
  type: string;
};

const Input = ({ type }: InputProps) => {
  return (
    <>
      <InputStyle type={type} />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
