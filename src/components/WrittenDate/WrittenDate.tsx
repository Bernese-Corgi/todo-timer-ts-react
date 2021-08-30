import React from 'react';

const WrittenDate = () => {
  const today: Date = new Date();

  const dayNamesKR = ['일', '월', '화', '수', '목', '금', '토'];

  const day = dayNamesKR[today.getDay()];

  const content: string = `${today
    .toLocaleDateString()
    .replaceAll('.', '/')
    .replaceAll(' ', '')} ${day}`;

  return <span>{content}</span>;
};

export default WrittenDate;
