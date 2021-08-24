import styled from 'styled-components';
import { handlePaddingSize } from 'utils/style';

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
  }
`;
