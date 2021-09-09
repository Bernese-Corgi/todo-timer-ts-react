import React, { useEffect, useState } from 'react';
import { useDateDegree } from 'hooks/useDateDegree';
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

type initialStateType = {
  sec: number;
  min: number;
  hour: number;
};

const AnalogClock = () => {
  const now = new Date();
  const degrees = useDateDegree(now);

  return (
    <AnalogClockWrapper>
      <OuterClockFace>
        <OuterMarkOne />
        <OuterMarkTwo />
        <OuterMarkThree />
        <InnerClockFace />
        <HandWrapper>
          <Hour degree={degrees.hourDegree} />
          <Minute degree={degrees.minDegree} />
          <Second degree={degrees.secDegree} />
        </HandWrapper>
      </OuterClockFace>
    </AnalogClockWrapper>
  );
};

export default AnalogClock;
