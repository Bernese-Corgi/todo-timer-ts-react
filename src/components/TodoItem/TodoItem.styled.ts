import { IconButtonStyle } from 'components/IconButton/IconButton.style';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const TodoItemWrapper = styled.div`
  ${theme.flexes.row('start')}

  ${IconButtonStyle} {
    opacity: 0;
    transition: 200ms;
    transition-timing-function: ease-in-out;
    -webkit-transition: 200ms;
    -webkit-transition-timing-function: ease-in-out;
  }

  &:hover ${IconButtonStyle} {
    opacity: 100;
  }
  input:focus ${IconButtonStyle} {
    opacity: 100;
  }
`;
