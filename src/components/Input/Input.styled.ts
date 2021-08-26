import { theme } from 'styles/theme';
import styled from 'styled-components';
import { handleFontSize, handlePaddingSize } from 'utils/style';
import { InputStyleProps } from './Input';

const {
  colors: { gray },
} = theme;

export const InputStyle = styled.input<InputStyleProps>`
  font-size: ${({ inputSize }) => handleFontSize(inputSize)};
  color: ${gray.dark};
  padding: ${({ inputSize }) => handlePaddingSize(inputSize)};
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0);
`;
