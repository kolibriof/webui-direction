import React from "react";
import { useCalendarContext } from "../context/CalendarContext";
import "../styles/calendar.css";

const Calendar = () => {
  const { days, year, month, daysOfWeek, today } = useCalendarContext();
  return (
    <div className="calendar-container">
      <div className="calendar-current-date">
        <h1>
          {month}
          <span> {year}</span>
        </h1>
      </div>

      <ul className="calendar-week">
        {days.map((day, index) => (
          <li
            key={index}
            className={`single-day ${
              day.getDay() === today.getDay() && `current-day`
            }`}
          >
            <p>{daysOfWeek[index]}</p>
            <p>{day.getDate()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
