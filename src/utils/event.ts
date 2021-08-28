import { KeyboardEvent } from 'react';

export const keyPressUtils = (
  e: KeyboardEvent<HTMLElement>,
  key: string,
  callback: () => void
) => {
  console.log(key);
  if (e.key === key) callback();
};
