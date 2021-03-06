import React from 'react';
import { WrittenDateStyle } from './WrittenDate.styled';

type WrittenDateProps = {
  writtenDate: Date;
};

const WrittenDate = ({ writtenDate }: WrittenDateProps) => {
  const dayNamesKR: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];
  const dayNamesEN: Array<string> = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  const getDayByDeviceLanguage = (today: Date): string => {
    if (navigator.language === 'ko-KR') return dayNamesKR[today.getDay()];
    else return dayNamesEN[today.getDay()];
  };

  const content: string = `${writtenDate
    .toLocaleDateString()
    .replaceAll(' ', '')} ${getDayByDeviceLanguage(writtenDate)}`;

  return <WrittenDateStyle>{content}</WrittenDateStyle>;
};

export default WrittenDate;
