import React from 'react';
import { Icon } from 'components';
import { IconButtonStyle } from './IconButton.style';

export type IconButtonProps = IconButtonStyleProps & {
  id: string;
  title: string;
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
  title,
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
      title={title}
      color={color}
      onClick={onClick}
      iconSize={iconSize}
      tabIndex={0}>
      <Icon
        id={id}
        title={title}
        shape={shape}
        color={color}
        iconSize={iconSize}
      />
    </IconButtonStyle>
  );
};

IconButton.defaultProps = {
  id: '',
  title: '',
  type: 'button',
};

IconButtonStyle.defaultProps = {
  shape: '',
};

export default IconButton;
