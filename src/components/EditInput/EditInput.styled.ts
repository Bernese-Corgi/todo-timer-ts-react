import { InputStyle } from 'components/Input/Input.styled';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { EditInputProps } from './EditInput';

const { colors } = theme;

export const EditInputStyle = styled(InputStyle)<EditInputProps>`
  &:focus {
    border-bottom: 0.1rem solid ${colors.gray.base};
  }

  color: ${({ done }) => (done ? colors.gray.light : 'currentColor')};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

EditInputStyle.displayName = 'EditInputStyle';
