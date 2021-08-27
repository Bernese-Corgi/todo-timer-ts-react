import React from 'react';
import { Svg } from './Icon.styled';
import Sprite from './assets/sprites.svg';

export type IconProps = {
  id?: string;
  title?: string;
  shape: string;
  color?: string;
  iconSize?: string;
};

const Icon = ({ id, title, shape, color, iconSize }: IconProps) => {
  return (
    <Svg id={id} color={color} shape={shape} iconSize={iconSize}>
      <use id={id} xlinkHref={`${Sprite}#icon-${shape}`} aria-label={title} />
    </Svg>
  );
};

Icon.defaultProps = {
  title: '',
  shape: '',
};

export default Icon;
