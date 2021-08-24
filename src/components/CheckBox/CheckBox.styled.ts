import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;

  & svg {
    width: 100%;
    height: 100%;
    padding: 1em;
    cursor: pointer;
  }
`;

export const CheckBoxInput = styled.input`
  ${({ theme }) => theme.positions.absolute.topLeft}
  z-index: 100;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
`;

export const CheckBoxLabel = styled.label`
  ${({ theme }) => theme.positions.absolute.topLeft}
  width: 100%;
  height: 100%;
`;
