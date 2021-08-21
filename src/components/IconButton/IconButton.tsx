import Icon from 'components/Icon/Icon';
import React from 'react';
import { CSSProperties } from 'styled-components';

type IconButtonProps = {
  shape: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const IconButton = ({ shape, style, onClick }: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon shape={shape} style={style} />
    </button>
  );
};

export default IconButton;
