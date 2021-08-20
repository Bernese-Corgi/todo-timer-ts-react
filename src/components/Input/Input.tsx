import React from 'react';

type InputProps = {
  type: string;
};

const Input = ({ type }: InputProps) => {
  return (
    <>
      <input type={type} />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
