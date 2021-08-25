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
  ariaLabel: string;
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
  ariaLabel,
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
        title={ariaLabel}
        aria-label={ariaLabel}
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
  ariaLabel: '',
  checked: false,
  shape: 'circle',
  iconSize: 'base',
};

export default CheckBox;
