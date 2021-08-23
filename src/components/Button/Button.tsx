import React from 'react';
import { ButtonStyle } from './Button.styled';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  value: string;
  shape: string;
  isLarge: boolean;
  children: React.ReactNode;
  disabled: boolean;
  primary: boolean;
  onClick?: () => void;
};

const Button = ({
  type,
  value,
  shape,
  isLarge,
  children,
  disabled,
  primary,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyle
      type={type}
      value={value}
      shape={shape}
      isLarge={isLarge}
      children={children}
      disabled={disabled}
      primary={primary}
      onClick={onClick}
    />
  );
};

Button.defaultProps = {
  type: 'button',
  value: '',
  shape: 'round',
  isLarge: false,
  children: '',
  disabled: false,
  primary: false,
};

export default Button;
