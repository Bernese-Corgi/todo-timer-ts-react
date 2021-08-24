import { theme } from 'styles/theme';
import styled from 'styled-components';
import { handleFontSize, handlePaddingSize } from 'utils/style';
import { InputStyleProps } from './Input';

const {
  colors: { gray },
} = theme;

export const InputStyle = styled.input<InputStyleProps>`
  font-size: ${({ inputSize }) => handleFontSize(inputSize)};
  color: ${gray.light};
  border-bottom: 0.1rem solid ${gray.light};
  padding: ${({ inputSize }) => handlePaddingSize(inputSize)};

  &:focus {
    color: ${gray.dark};
    border-bottom: 0.1rem solid ${gray.dark};
  }
`;
