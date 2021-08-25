import React from 'react';
import { Svg } from './Icon.styled';
import Sprite from './assets/sprites.svg';

export type IconProps = {
  ariaLabel?: string;
  shape: string;
  color?: string;
  iconSize?: string;
};

const Icon = ({ ariaLabel, shape, color, iconSize }: IconProps) => {
  return (
    <Svg color={color} shape={shape} iconSize={iconSize}>
      <use xlinkHref={`${Sprite}#icon-${shape}`} aria-label={ariaLabel} />
    </Svg>
  );
};

Icon.defaultProps = {
  ariaLabel: '',
  shape: '',
};

export default Icon;
