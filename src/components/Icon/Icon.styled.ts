import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

const handleColorType = (shape: string | undefined) => {
  switch (shape) {
    case 'pen':
      return theme.colors.green;
    case 'eraser':
      return theme.colors.red;
    default:
      return theme.colors.gray.dark;
  }
};

export const Svg = styled.svg`
  ${({ style, id }) => {
    return css`
      color: ${style?.color};
      width: ${style?.width};
      height: ${style?.height};

      &:hover {
        color: ${handleColorType(id)};
      }
    `;
  }}
`;