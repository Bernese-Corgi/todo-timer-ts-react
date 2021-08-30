import React from 'react';

const WrittenDate = () => {
  const writtenDate: Date = new Date();

  const dayNamesKR = ['일', '월', '화', '수', '목', '금', '토'];
  const dayNamesEN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDayByDeviceLanguage = (today: Date) => {
    if (navigator.language === 'ko-KR') return dayNamesKR[today.getDay()];
    else return dayNamesEN[today.getDay()];
  };

  const content: string = `${writtenDate
    .toLocaleDateString()
    .replaceAll('.', '/')
    .replaceAll(' ', '')} ${getDayByDeviceLanguage(writtenDate)}`;

  return <span>{content}</span>;
};

export default WrittenDate;
