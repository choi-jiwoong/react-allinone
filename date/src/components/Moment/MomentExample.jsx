import React, { useState, useRef } from 'react'
import moment from 'moment-timezone';
import 'moment/locale/ko';

export default function MomentExample() {

  const momentDate = moment();
  const newMomentDate = momentDate.add(1, 'week');
  const clonedMomentDate = newMomentDate.clone().add(1, 'week');

  const birthDayRef = useRef(null);
  const startDayRef = useRef(null);
  const endDayRef = useRef(null);
  const [difference, setDifference] = useState(0);

  const [day, setDay] = useState(0);
  const handleBirthDayChange = (evnet) => {
    const birthDay = evnet.target.value;
    console.log(birthDay);
    setDay(moment(birthDay, "YYYY-MM-DD").format('dddd'));
  };

  const handleDifferenceChange = (evnet) => {
    const startDay = startDayRef.current.value;
    const endDay = endDayRef.current.value;
    console.log(startDay, endDay);
    setDifference(moment(endDay).diff(moment(startDay), 'days'));
  };

  return (
    <div>
      <h1>Moment Example</h1>
      <div>Immutable Check</div>
      <div>momentDate: {momentDate.format('YYYY-MM-DD')}</div>
      <div>newMomentDate: {newMomentDate.format('YYYY-MM-DD')}</div>
      <div>clonedMomentDate: {clonedMomentDate.format('YYYY-MM-DD')}</div>
      <div>Summer time (New-york)</div>
      <div>momentDate timezone: {moment.tz("2018-03-10 13:10:20", "America/New_York").add(1, "day").format('YYYY-MM-DD HH:mm:ss')}</div>
      <div>momentDate timezone: {moment.tz("2018-03-10 13:10:20", "America/New_York").add(24, "hour").format('YYYY-MM-DD HH:mm:ss')}</div>
      <div>Leap Year </div>
      <div>momentDate: {moment("2017-01-01").subtract(1, "year").format('YYYY-MM-DD')}</div>
      <div>momentDate: {moment("2017-01-01").subtract(365, "day").format('YYYY-MM-DD')}</div>
      <div>Korea Type</div>
      <div>momentDate: {moment("07-17-2023").format('YYYY년 M월 D일')}</div>
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
