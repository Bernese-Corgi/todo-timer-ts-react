import { theme } from 'styles/theme';
import styled from 'styled-components';

export const InputStyle = styled.input`
  font-size: ${theme.fonts.size.base};
  color: ${theme.colors.gray.light};
  border-bottom: 0.1rem solid ${theme.colors.gray.light};
  padding: ${theme.paddings.base};

  &:focus {
    color: ${theme.colors.gray.dark};
    border-bottom: 0.1rem solid ${theme.colors.gray.dark};
  }
`;
