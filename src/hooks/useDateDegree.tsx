import { useEffect, useState } from 'react';

const useDateDegree = (now:Date) => {
  type initialStateType = {
    sec: number;
    min: number;
    hour: number;
  };
  
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
    }, 1000);

    return () => clearInterval(id);
  }, [now]);
  
  return {
    secDegree,
    minDegree,
    hourDegree,
  };
};

export default useDateDegree;
