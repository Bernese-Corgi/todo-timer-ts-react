import React from 'react';
import {
  AnalogClockWrapper,
  HandWrapper,
  Hour,
  Minute,
  Second,
  OuterClockFace,
  OuterMarkOne,
  OuterMarkThree,
  OuterMarkTwo,
  InnerClockFace,
} from './AnalogClock.styled';

const AnalogClock = () => {
  return (
    <AnalogClockWrapper>
      <OuterClockFace>
        <OuterMarkOne />
        <OuterMarkTwo />
        <OuterMarkThree />
        <InnerClockFace />
        <HandWrapper>
          <Hour />
          <Minute />
          <Second />
        </HandWrapper>
      </OuterClockFace>
    </AnalogClockWrapper>
  );
};

export default AnalogClock;
