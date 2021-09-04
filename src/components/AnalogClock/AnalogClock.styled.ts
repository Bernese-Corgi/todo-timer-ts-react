import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

const handleClockMark = (
  width: string = '0.13em',
  length: string = '100%',
  color: string = `${theme.colors.gray.base}`
) => {
  return css`
    position: absolute;
    left: calc(50% - ${width} / 2);
    content: '';
    width: ${width};
    height: ${length};
    background-color: ${color};
  `;
};

const handleMarkStyleAndRotate = (
  beforeDegree: number,
  afterDegree: number
) => {
  return css`
    &::before,
    &::after {
      ${handleClockMark()}
      border-radius: 0.4rem;
    }
    &::before {
      -webkit-transform: rotate(${beforeDegree}deg);
      -moz-transform: rotate(${beforeDegree}deg);
      transform: rotate(${beforeDegree}deg);
    }
    &::after {
      -webkit-transform: rotate(${afterDegree}deg);
      -moz-transform: rotate(${afterDegree}deg);
      transform: rotate(${afterDegree}deg);
    }
  `;
};

export const AnalogClockWrapper = styled.div`
  position: relative;
  background-color: ${theme.colors.white};
  width: 400px;
  height: 400px;
  font-size: 14px;
  border: 0.5em solid rgba(61, 63, 72, 0.7);
  border-radius: 50%;
  box-shadow: ${theme.boxShadow.default}, inset ${theme.boxShadow.default};
`;

const handleClockHandType = (
  size: string = '100%',
  width: string = '0.2em',
  color: string = `${theme.colors.gray.dark}`,
  zIndex: number = 1
) => {
  return css`
    position: absolute;
    width: ${size};
    height: ${size};
    z-index: ${zIndex};
    transform-origin: center;

    &::before {
      ${handleClockMark(`${width}`, '100%', color)}
      border-radius: 30%;

      background: linear-gradient(
        to bottom,
        ${color} 0%,
        ${color} 60%,
        ${color}00 61%,
        ${color}00 100%
      );
      background: -moz-linear-gradient(
        to bottom,
        ${color} 0%,
        ${color} 60%,
        ${color}00 61%,
        ${color}00 100%
      );
      background: -webkit-linear-gradient(
        to bottom,
        ${color} 0%,
        ${color} 60%,
        ${color}00 61%,
        ${color}00 100%
      );
    }
  `;
};
// transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);

export const HandWrapper = styled.div`
  ${theme.positions.absolute.center}
  ${theme.flexes.center}
  width: 95%;
  height: 95%;
`;

type HandProps = {
  degree: number;
};

export const Hour = styled.div<HandProps>`
  ${handleClockHandType('63%', '0.4em', `${theme.colors.gray.dark}`, 10)}
  ${({ degree }) => `transform: rotate(${degree}deg)`}
`;

export const Minute = styled.div<HandProps>`
  ${handleClockHandType('80%', '0.3em', `${theme.colors.gray.dark}`, 3)}
  ${({ degree }) => `transform: rotate(${degree}deg)`}
`;

export const Second = styled.div<HandProps>`
  ${handleClockHandType('85%', '0.2em', `${theme.colors.red}`, 1)}
  ${({ degree }) => `transform: rotate(${degree}deg)`}
`;

export const OuterClockFace = styled.div`
  ${theme.positions.absolute.center}
  width: 95%;
  height: 95%;
  border: 0.5em solid transparent;
  border-radius: 50%;
`;
export const OuterMarkOne = styled.div`
  ${handleMarkStyleAndRotate(0, 30)}
`;
export const OuterMarkThree = styled.div`
  ${handleMarkStyleAndRotate(60, 90)}
`;
export const OuterMarkTwo = styled.div`
  ${handleMarkStyleAndRotate(120, 150)}
`;
export const InnerClockFace = styled.div`
  ${theme.positions.absolute.center}
  width: 85%;
  height: 85%;
  border-radius: 50%;
  background-color: ${theme.colors.white};
`;

HandWrapper.displayName = 'HandWrapper';
Hour.displayName = 'Hour';
Minute.displayName = 'Minute';
Second.displayName = 'Second';
OuterClockFace.displayName = 'OuterClockFace';
OuterMarkOne.displayName = 'OuterMarkOne';
OuterMarkThree.displayName = 'OuterMarkThree';
OuterMarkTwo.displayName = 'OuterMarkTwo';
InnerClockFace.displayName = 'InnerClockFace';
