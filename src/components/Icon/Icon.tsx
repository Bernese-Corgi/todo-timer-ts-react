import React from 'react';
import { Svg } from './Icon.styled';
import Sprite from './assets/sprites.svg';

export type IconProps = {
  shape?: string;
  color?: string;
  iconSize?: string;
};

const Icon = ({ shape, color, iconSize }: IconProps) => {
  return (
    <Svg color={color} shape={shape} iconSize={iconSize}>
      <use xlinkHref={`${Sprite}#icon-${shape}`} />
    </Svg>
  );
};

Icon.defaultProps = {
  shape: '',
};

export default Icon;
