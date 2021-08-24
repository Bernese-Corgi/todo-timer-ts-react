import styled from 'styled-components';
import { theme } from 'styles/theme';
import { handleFontSize, handleMarginSize } from 'utils/style';
import { CheckBoxWrapperProps } from './CheckBox';

export const CheckBoxWrapper = styled.div<CheckBoxWrapperProps>`
  position: relative;
  ${theme.flexes.center}
  width: ${({ iconSize }) => handleFontSize(iconSize)};
  height: ${({ iconSize }) => handleFontSize(iconSize)};
  margin: ${({ iconSize }) => handleMarginSize(iconSize)};
`;

export const CheckBoxInput = styled.input`
  ${({ theme }) => theme.positions.absolute.topLeft}
  z-index: 100;
  margin: 0;
  opacity: 0;
`;

export const CheckBoxLabel = styled.label`
  ${({ theme }) => theme.positions.absolute.topLeft}
`;
