import { InputStyle } from 'components/Input/Input.styled';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { EditInputProps } from './EditInput';

const { colors } = theme;

export const EditInputStyle = styled(InputStyle)<EditInputProps>`
  border-bottom: 0.1rem solid
    ${({ readOnly }) => (readOnly ? 'rgba(0, 0, 0, 0)' : colors.gray.base)};
  color: ${({ done }) => (done ? colors.gray.light : 'currentColor')};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

EditInputStyle.displayName = 'EditInputStyle';
