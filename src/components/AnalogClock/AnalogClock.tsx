ㄴimport React from 'react';
import { useDateDegree } from 'hooks';

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
  const { hourDegree,
    minDegree,
    secDegree } = useDateDegree(new Date());

  return (
    <AnalogClockWrapper>
      <OuterClockFace>
        <OuterMarkOne />
        <OuterMarkTwo />
        <OuterMarkThree />
        <InnerClockFace />
        <HandWrapper>
          <Hour degree={hourDegree} />
          <Minute degree={minDegree} />
          <Second degree={secDegree} />
        </HandWrapper>
      </OuterClockFace>
    </AnalogClockWrapper>
  );
};

export default AnalogClock;
