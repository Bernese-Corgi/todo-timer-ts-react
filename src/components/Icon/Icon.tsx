import React from 'react';
import { Svg } from './Icon.styled';
import Sprite from './assets/sprites.svg';
import { CSSProperties } from 'styled-components';

type IconProps = {
  shape: string;
  style?: CSSProperties;
};

const Icon = ({ shape, style }: IconProps) => {
  return (
    <Svg style={style} id={shape}>
      <use xlinkHref={`${Sprite}#icon-${shape}`} />
    </Svg>
  );
};

export default Icon;
