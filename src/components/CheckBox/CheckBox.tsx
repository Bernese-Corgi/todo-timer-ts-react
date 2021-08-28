import Icon from 'components/Icon/Icon';
import React, { ChangeEvent } from 'react';
import {
  CheckBoxInput,
  CheckBoxLabel,
  CheckBoxWrapper,
} from './CheckBox.styled';

export type CheckBoxProps = CheckBoxWrapperProps &
  CheckBoxLabelProps &
  CheckBoxInputProps & {
    color?: string;
    children?: React.ReactNode;
  };

export type CheckBoxWrapperProps = {
  shape: string;
  iconSize: string;
};

export type CheckBoxLabelProps = {
  onKeyPress?: (e: React.KeyboardEvent<HTMLLabelElement>) => void;
};

export type CheckBoxInputProps = {
  id?: string;
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
  onKeyPress,
  shape,
  color,
  iconSize,
}: CheckBoxProps) => {
  return (
    <CheckBoxWrapper iconSize={iconSize} shape={shape}>
      <CheckBoxLabel tabIndex={0} onKeyPress={onKeyPress}>
        {checked ? (
          <Icon id={id} shape={`checked-${shape}`} color={color} />
        ) : (
          <Icon id={id} shape={`${shape}`} color={color} />
        )}
        <CheckBoxInput
          type="checkbox"
          name={name}
          value={value}
          title={title}
          aria-label={title}
          checked={checked}
          onChange={onChange}
          tabIndex={-1}
        />
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
