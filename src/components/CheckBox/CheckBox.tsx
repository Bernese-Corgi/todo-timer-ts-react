import Icon from 'components/Icon/Icon';
import React from 'react';
import {
  CheckBoxInput,
  CheckBoxLabel,
  CheckBoxWrapper,
} from './CheckBox.styled';

type CheckBoxProps = CheckBoxWrapperProps & {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange?: () => void;
  children?: React.ReactNode;
  shape: string;
};

export type CheckBoxWrapperProps = {
  iconSize: string;
};

const CheckBox = ({
  id,
  name,
  value,
  checked,
  children,
  onChange,
  shape,
  iconSize,
}: CheckBoxProps) => {
  return (
    <CheckBoxWrapper iconSize={iconSize}>
      <CheckBoxInput
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <CheckBoxLabel htmlFor={id}>
        {checked ? (
          <Icon shape={`checked-${shape}`} />
        ) : (
          <Icon shape={`${shape}`} />
        )}
        {children}
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

CheckBox.defaultProps = {
  value: '',
  checked: false,
  shape: 'circle',
  iconSize: 'base',
};

export default CheckBox;
