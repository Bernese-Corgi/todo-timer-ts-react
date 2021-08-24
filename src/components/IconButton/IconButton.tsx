import React from 'react';
import Icon from 'components/Icon/Icon';
import { IconButtonStyle } from './IconButton.style';

export type IconButtonProps = IconButtonStyleProps & {
  type: 'button' | 'submit' | 'reset';
  shape: string;
  color?: string;
  onClick: () => void;
};

export type IconButtonStyleProps = {
  iconSize?: string;
};

const IconButton = ({
  type,
  shape,
  color,
  onClick,
  iconSize,
}: IconButtonProps) => {
  return (
    <IconButtonStyle type={type} onClick={onClick} iconSize={iconSize}>
      <Icon shape={shape} color={color} iconSize={iconSize} />
    </IconButtonStyle>
  );
};

IconButton.defaultProps = {
  type: 'button',
};

export default IconButton;
