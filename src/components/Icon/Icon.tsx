import React from 'react';
import { Svg } from './Icon.styled';
import Sprite from './assets/sprites.svg';

export type IconProps = {
  id?: string;
  ariaLabel?: string;
  shape: string;
  color?: string;
  iconSize?: string;
};

const Icon = ({ id, ariaLabel, shape, color, iconSize }: IconProps) => {
  return (
    <Svg id={id} color={color} shape={shape} iconSize={iconSize}>
      <use
        id={id}
        xlinkHref={`${Sprite}#icon-${shape}`}
        aria-label={ariaLabel}
      />
    </Svg>
  );
};

Icon.defaultProps = {
  ariaLabel: '',
  shape: '',
};

export default Icon;
