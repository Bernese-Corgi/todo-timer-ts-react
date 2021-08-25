import Input from 'components/Input/Input';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { EditInputProps } from './EditInput';

const { colors } = theme;

export const EditInputStyle = styled(Input)<EditInputProps>`
  &:focus {
    border-bottom: 0.1rem solid ${colors.gray.dark};
  }
`;
