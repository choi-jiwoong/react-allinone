import React, { useState, useRef } from 'react'
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.locale('ko');
dayjs.extend(utc);
dayjs.extend(timezone);


export default function DayExample() {

  const dayjstDate = dayjs();
  const newDayjsDate = dayjstDate.add(1, 'week');
  const clonedayjstDate = newDayjsDate.clone().add(1, 'week');

  const birthDayRef = useRef(null);
  const startDayRef = useRef(null);
  const endDayRef = useRef(null);
  const [difference, setDifference] = useState(0);

  const [day, setDay] = useState(0);
  const handleBirthDayChange = (evnet) => {
    const birthDay = evnet.target.value;
    console.log(birthDay);
    setDay(dayjs(birthDay, "YYYY-MM-DD").format('dddd'));
  };

  const handleDifferenceChange = (evnet) => {
    const startDay = startDayRef.current.value;
    const endDay = endDayRef.current.value;
    console.log(startDay, endDay);
    setDifference(dayjs(endDay).diff(dayjs(startDay), 'days'));
  };

  return (
    <div>
      <h1>Dayjs Example</h1>
      <div>Immutable Check</div>
      <div>momentDate: {dayjstDate.format('YYYY-MM-DD')}</div>
      <div>newMomentDate: {newDayjsDate.format('YYYY-MM-DD')}</div>
      <div>clonedMomentDate: {clonedayjstDate.format('YYYY-MM-DD')}</div>
      <div>Summer time {dayjs.tz.guess()}</div>
      <div>momentDate timezone: {dayjs.tz("2018-03-10 13:10:20", "America/New_York").add(1, "day").format()}</div>
      <div>momentDate timezone: {dayjs.tz("2018-03-10 13:10:20", "America/New_York").add(24, "hour").format()}</div>
      <div>Leap Year </div>
      <div>momentDate: {dayjs("2017-01-01").subtract(1, "year").format('YYYY-MM-DD')}</div>
      <div>momentDate: {dayjs("2017-01-01").subtract(365, "day").format('YYYY-MM-DD')}</div>
      <div>Korea Type</div>
      <div>momentDate: {dayjs("07-17-2023").format('YYYY년 M월 D일')}</div>
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
