import styled, { css } from 'styled-components';
import {
  handleColorType,
  handleFontSize,
  handleHoverColorType,
} from 'utils/style';
import { IconProps } from './Icon';

export const Svg = styled.svg<IconProps>`
  ${({ color, shape, iconSize }) => {
    if (shape === 'plus') {
      return css`
        color: ${handleColorType(color)};
        width: calc(${handleFontSize(iconSize)} * 2);
        height: calc(${handleFontSize(iconSize)} * 2);
      `;
    }
    return css`
      color: ${handleColorType(color)};
      width: ${handleFontSize(iconSize)};
      height: ${handleFontSize(iconSize)};
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
