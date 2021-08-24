import { theme } from 'styles/theme';
import styled from 'styled-components';
import { handlePaddingSize } from 'utils/style';
import { TodoInputWrapperProps } from './TodoInput';

// todo: Move to utils directory
const handleWidthSize = (size: string | undefined) => {
  switch (size) {
    case 'sm':
      return '200px';
    case 'base':
      return '300px';
    case 'lg':
      return '500px';
    case 'xl':
      return '1000px';
    default:
      return '100px';
  }
};

export const TodoInputWrapper = styled.div<TodoInputWrapperProps>`
  ${({ theme }) => theme.flexes.row('start')};
  width: ${({ size }) => handleWidthSize(size)};
  background-color: ${theme.colors.primary.light};
  padding: ${({ size }) => handlePaddingSize(size)};

  & Input {
    width: 90%;
  }
`;
