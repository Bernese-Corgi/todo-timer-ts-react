import Icon from 'components/Icon/Icon';
import React, { ChangeEvent } from 'react';
import {
  CheckBoxInput,
  CheckBoxLabel,
  CheckBoxWrapper,
} from './CheckBox.styled';

export type CheckBoxProps = CheckBoxWrapperProps &
  CheckBoxInputProps & {
    color?: string;
    children?: React.ReactNode;
  };

export type CheckBoxWrapperProps = {
  shape: string;
  iconSize: string;
};

export type CheckBoxInputProps = {
  id: string;
  name: string;
  value: string;
  title: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({
  id,
  name,
  value,
  title,
  checked,
  children,
  onChange,
  shape,
  color,
  iconSize,
}: CheckBoxProps) => {
  return (
    <CheckBoxWrapper iconSize={iconSize} shape={shape}>
      <CheckBoxInput
        type="checkbox"
        id={id}
        name={name}
        value={value}
        title={title}
        aria-label={title}
        checked={checked}
        onChange={onChange}
      />
      <CheckBoxLabel htmlFor={id} tabIndex={0}>
        {checked ? (
          <Icon id={id} shape={`checked-${shape}`} color={color} />
        ) : (
          <Icon id={id} shape={`${shape}`} color={color} />
        )}
        {children}
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

CheckBox.defaultProps = {
  value: '',
  title: '',
  checked: false,
  shape: 'circle',
  iconSize: 'base',
};

export default CheckBox;
