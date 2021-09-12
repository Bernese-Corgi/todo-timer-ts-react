import React, { useEffect, useRef, useState } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    // savedCallback의 current에는 인수로 받은 callback의 함수 객체의 참조값이 담긴다.
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // delay가 null이 아니면
    if (delay !== null) {
      // id 변수에 setInterval을 담는다.
      // setInterval에 savedCallback.current를 호출문을 반환하는 콜백 함수를
      let id = setInterval(() => savedCallback.current(), delay);
      // cleanup 함수를 반환 (unmount 전, 업데이트 직전에 실행)
      return () => clearInterval(id);
    }
  }, [delay]);
};

const TestTest = () => {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
};

export default TestTest;
