import { theme } from 'styles/theme';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const handleButtonShape = (shape: string) => {
  switch (shape) {
    case 'round':
      return theme.borders.radius.round;
    case 'square':
      return theme.borders.radius.square;
    default:
      return theme.borders.radius.square;
  }
};

export const ButtonStyle = styled.button<ButtonProps>`
  margin: ${theme.margins.base};
  font-weight: ${theme.fonts.weight.bold};

  border-radius: ${({ shape }) => handleButtonShape(shape)};
  background-color: ${({ primary, disabled }) =>
    disabled
      ? theme.colors.gray.light
      : primary
      ? theme.colors.primary.base
      : theme.colors.secondary.base};
  color: ${({ disabled }) =>
    disabled ? theme.colors.gray.base : theme.colors.white};

  ${({ isLarge }) =>
    isLarge
      ? css`
          width: 100%;
          padding: ${theme.paddings.sm};
        `
      : css`
          padding: ${theme.paddings.sm} ${theme.paddings.lg};
        `};

  &:hover {
    ${({ disabled }) =>
      disabled
        ? css`
            cursor: not-allowed;
          `
        : css`
            box-shadow: ${theme.boxShadow.default};
          `}
  }
`;

ButtonStyle.displayName = 'ButtonStyle';
