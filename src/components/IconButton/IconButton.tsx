import React, { ChangeEvent } from 'react';
import Icon from 'components/Icon/Icon';
import { IconButtonStyle } from './IconButton.style';

export type IconButtonProps = IconButtonStyleProps & {
  id: string;
  ariaLabel: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type IconButtonStyleProps = {
  shape: string;
  color?: string;
  iconSize?: string;
};

const IconButton = ({
  id,
  ariaLabel,
  type,
  shape,
  color,
  onClick,
  iconSize,
}: IconButtonProps) => {
  return (
    <IconButtonStyle
      id={id}
      type={type}
      shape={shape}
      title={ariaLabel}
      color={color}
      onClick={onClick}
      iconSize={iconSize}>
      <Icon
        ariaLabel={ariaLabel}
        shape={shape}
        color={color}
        iconSize={iconSize}
      />
    </IconButtonStyle>
  );
};

IconButton.defaultProps = {
  id: '',
  ariaLabel: '',
  type: 'button',
};

IconButtonStyle.defaultProps = {
  shape: '',
};

export default IconButton;
