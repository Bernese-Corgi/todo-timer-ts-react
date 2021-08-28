import { InputStyle } from 'components/Input/Input.styled';
import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';
import { EditInputProps } from './EditInput';

const { colors } = theme;

export const EditInputStyle = styled(InputStyle)<EditInputProps>`
  ${({ readOnly, done }) => {
    if (readOnly && !done)
      return css`
        outline: transparent;

        ::-moz-selection {
          background: ${colors.primary.base}60;
        }
        ::selection {
          background: ${colors.primary.base}60;
        }
      `;

    if (!readOnly && done)
      return css`
        border-bottom: 0.1rem solid ${colors.gray.base};
      `;

    if (readOnly && done)
      return css`
        color: ${colors.gray.base};
        text-decoration: line-through;

        &:focus {
          outline: transparent;

          ::-moz-selection {
            color: ${colors.gray.dark};
            text-decoration: line-through ${colors.gray.dark}60;
            background: ${colors.gray.light};
          }
          ::selection {
            color: ${colors.gray.dark};
            text-decoration: line-through ${colors.gray.dark}60;
            background: ${colors.gray.light};
          }
        }
      `;
  }}
`;

EditInputStyle.displayName = 'EditInputStyle';
