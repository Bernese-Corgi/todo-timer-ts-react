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
  position: 'absolute';
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
