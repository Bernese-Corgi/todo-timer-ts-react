import styled, { css } from 'styled-components';
import {
  handleColorType,
  handleFontSize,
  handleHoverColorType,
} from 'utils/style';
import { IconProps } from './Icon';

export const Svg = styled.svg<IconProps>`
  ${({ color, shape, iconSize }) => {
    return css`
      color: ${handleColorType(color)};
      width: calc(${handleFontSize(iconSize)} * 2);
      height: calc(${handleFontSize(iconSize)} * 2);
      transition: 200ms;
      transition-timing-function: ease-in-out;
      -webkit-transition: 200ms;
      -webkit-transition-timing-function: ease-in-out;

      &:hover {
        color: ${handleHoverColorType(shape)};
      }
    `;
  }}
`;
