import { EditInputStyle } from 'components/EditInput/EditInput.styled';
import { IconButtonStyle } from 'components/IconButton/IconButton.style';
import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

type TodoItemLiProps = {
  // key: number;
  inputFocus: boolean;
};

export const TodoItemLiStyle = styled.li<TodoItemLiProps>`
  ${theme.flexes.row('start')}

  background-color: ${theme.colors.white};
  margin: ${theme.margins.base};
  padding: ${theme.paddings.sm};
  border-radius: calc(${theme.borders.radius.square} * 3);

  transition: 200ms;
  transition-timing-function: ease-in-out;
  -webkit-transition: 200ms;
  -webkit-transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: ${theme.boxShadow.default};

    ${EditInputStyle} {
      cursor: initial;
    }
  }

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

  &:focus,
  Input:focus ${IconButtonStyle} {
    opacity: 100;
  }
  ${IconButtonStyle}:focus {
    opacity: 100;
  }

  ${({ inputFocus }) => {
    if (inputFocus)
      return css`
        background-color: ${theme.colors.primary.base}, 0.5;
        ${IconButtonStyle} {
          opacity: 100;
        }
      `;
  }}
`;

TodoItemLiStyle.displayName = 'TodoItemLiStyle';
