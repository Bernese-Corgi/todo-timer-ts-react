import { IconButtonStyle } from 'components/IconButton/IconButton.style';
import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

type TodoItemLiProps = {
  inputFocus: boolean;
  key: number;
};

export const TodoItemLi = styled.li<TodoItemLiProps>`
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

  ${({ inputFocus }) => {
    if (inputFocus)
      return css`
        ${IconButtonStyle} {
          opacity: 100;
        }
      `;
  }}
`;
