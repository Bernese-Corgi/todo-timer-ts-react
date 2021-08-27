import styled from 'styled-components';
import {
  handleFontSize,
  handleHoverColorType,
  handleMarginSize,
} from 'utils/style';
import {
  CheckBoxInputProps,
  CheckBoxLabelProps,
  CheckBoxWrapperProps,
} from './CheckBox';

export const CheckBoxWrapper = styled.div<CheckBoxWrapperProps>`
  position: relative;
  width: ${({ iconSize }) => handleFontSize(iconSize)};
  height: ${({ iconSize }) => handleFontSize(iconSize)};
  margin: ${({ iconSize }) => handleMarginSize(iconSize)};

  &:hover Svg {
    color: ${({ shape }) => handleHoverColorType(shape)};
  }
`;

export const CheckBoxLabel = styled.label<CheckBoxLabelProps>`
  ${({ theme }) => theme.positions.absolute.center}
  cursor: pointer;
`;

export const CheckBoxInput = styled.input<CheckBoxInputProps>`
  ${({ theme }) => theme.positions.absolute.center}
  z-index: 100;
  opacity: 0;
`;

CheckBoxWrapper.displayName = 'CheckBoxWrapper';
CheckBoxInput.displayName = 'CheckBoxInput';
CheckBoxLabel.displayName = 'CheckBoxLabel';
