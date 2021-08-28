import styled from 'styled-components';
import { theme } from 'styles/theme';
import { handlePaddingSize } from 'utils/style';

const { colors } = theme;

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

type TodoAddWrapperProps = {
  inputSize?: string;
};

export const TodoAddWrapper = styled.div<TodoAddWrapperProps>`
  ${({ theme }) => theme.flexes.row('start')};
  width: ${({ inputSize }) => handleWidthSize(inputSize)};
  padding: ${({ inputSize }) => handlePaddingSize(inputSize)};

  & Input {
    width: 90%;
    color: ${colors.gray.base};
    border-bottom: 0.1rem solid ${colors.gray.light};
    padding: ${({ inputSize }) => handlePaddingSize(inputSize)};

    &:focus {
      color: ${colors.gray.dark};
      border-bottom: 0.1rem solid ${colors.gray.dark};
    }
  }
`;

TodoAddWrapper.displayName = 'TodoAddWrapper';
