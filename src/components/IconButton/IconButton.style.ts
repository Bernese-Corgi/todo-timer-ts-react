import { handlePaddingSize } from 'utils/style';
import styled from 'styled-components';
import { IconButtonStyleProps } from './IconButton';

export const IconButtonStyle = styled.button<IconButtonStyleProps>`
  ${({ theme }) => theme.flexes.center}
  padding: ${({ iconSize }) => handlePaddingSize(iconSize)};
`;
