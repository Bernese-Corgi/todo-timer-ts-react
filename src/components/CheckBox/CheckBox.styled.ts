import styled from 'styled-components';
import { theme } from 'styles/theme';
import {
  handleFontSize,
  handleHoverColorType,
  handleMarginSize,
} from 'utils/style';
import { CheckBoxWrapperProps } from './CheckBox';

export const CheckBoxWrapper = styled.div<CheckBoxWrapperProps>`
  position: relative;
  ${theme.flexes.center}
  width: ${({ iconSize }) => handleFontSize(iconSize)};
  height: ${({ iconSize }) => handleFontSize(iconSize)};
  margin: ${({ iconSize }) => handleMarginSize(iconSize)};

  &:hover Svg {
    color: ${({ shape }) => handleHoverColorType(shape)};
  }
`;

export const CheckBoxInput = styled.input`
  ${({ theme }) => theme.positions.absolute.center}
  cursor: pointer;
  z-index: 100;
  opacity: 0;
`;

export const CheckBoxLabel = styled.label`
  ${({ theme }) => theme.positions.absolute.center}
`;

CheckBoxWrapper.displayName = 'CheckBoxWrapper';
CheckBoxInput.displayName = 'CheckBoxInput';
CheckBoxLabel.displayName = 'CheckBoxLabel';
