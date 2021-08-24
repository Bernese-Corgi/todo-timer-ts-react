import React from 'react';
import Icon from 'components/Icon/Icon';
import { IconButtonStyle } from './IconButton.style';

export type IconButtonProps = IconButtonStyleProps & {
  shape: string;
  color?: string;
  onClick?: () => void;
};

export type IconButtonStyleProps = {
  iconSize?: string;
};

const IconButton = ({ shape, color, onClick, iconSize }: IconButtonProps) => {
  return (
    <IconButtonStyle onClick={onClick} iconSize={iconSize}>
      <Icon shape={shape} color={color} iconSize={iconSize} />
    </IconButtonStyle>
  );
};

export default IconButton;
