import React, { useEffect, useRef, useState } from 'react';
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
  
  const initialState: initialStateType = {
    sec: (now.getSeconds() / 60) * 360,
    min: (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6,
    hour: (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30,
  };
  const [secDegree, setSecDegree] = useState(initialState.sec);
  const [minDegree, setMinDegree] = useState(initialState.min);
  const [hourDegree, setHourDegree] = useState(initialState.hour);

  useEffect(() => {
    let id = setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360;

      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;

      const hour = now.getHours();
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30;

      setSecDegree(secondsDegrees);
      setMinDegree(minsDegrees);
      setHourDegree(hourDegrees);

      console.log(now, seconds, mins, hour);
    }, 1000);

    return () => clearInterval(id);
  }, []);

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
