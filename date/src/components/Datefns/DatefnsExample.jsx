import React, { useState, useRef } from 'react'
import { add, sub, differenceInDays } from 'date-fns'
import { toDate, utcToZonedTime, format } from 'date-fns-tz'
import { ko } from 'date-fns/locale';

export default function DatefnsExample() {

  const dateFnsDate = new Date();
  const newDateFnsjsDate = add(dateFnsDate, { week: 1 });
  const clonedayjstDate = add(newDateFnsjsDate, { week: 1 });

  const birthDayRef = useRef(null);
  const startDayRef = useRef(null);
  const endDayRef = useRef(null);
  const [difference, setDifference] = useState(0);

  const [day, setDay] = useState(0);
  const handleBirthDayChange = (evnet) => {
    const birthDay = evnet.target.value;
    setDay(format(new Date(birthDay), 'EEEE', { locale: ko }));
  };

  const handleDifferenceChange = (evnet) => {
    const startDay = startDayRef.current.value;
    const endDay = endDayRef.current.value;
    setDifference(differenceInDays(new Date(endDay), new Date(startDay)));
  };

  return (
    <div>
      <h1>Datefns Example</h1>
      <div>Immutable Check</div>
      <div>momentDate: {format(dateFnsDate, 'yyyy-MM-dd')}</div>
      <div>newMomentDate: {format(newDateFnsjsDate, 'yyyy-MM-dd')}</div>
      <div>clonedMomentDate: {format(clonedayjstDate, 'yyyy-MM-dd')}</div>
      <div>momentDate timezone: {format(add(new Date("2018-03-10 13:10:20"), { days: 1 }), 'yyyy-MM-dd HH:mm:ss:xxx', { timeZone: "America/New_York" })}</div>
      <div>momentDate timezone: {format(add(new Date("2018-03-10 13:10:20"), { hours: 24 }), 'yyyy-MM-dd HH:mm:ss:xxx', { timeZone: "America/New_York" })}</div>
      <div>Leap Year </div>
      <div>momentDate: {format(sub(new Date("2017-01-01"), { years: 1 }), 'yyyy-MM-dd')}</div>
      <div>momentDate: {format(sub(new Date("2017-01-01"), { days: 365 }), 'yyyy-MM-dd')}</div>
      <div>Korea Type</div>
      <div>momentDate: {format(new Date("07-17-2023"), 'yyyy년 M월 d일')}</div>
      <div>The days of week</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>birthDay: {day}</div>
      </div>
      <div>To calculate the difference between two dates</div>
      <div>
        <input type="date" ref={startDayRef} />
        <input type="date" ref={endDayRef} onChange={handleDifferenceChange} />
        <div>difference: {difference}</div>
      </div>
    </div>
  );
}
