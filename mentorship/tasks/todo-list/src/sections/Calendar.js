import React from "react";
import "../styles/calendar.css";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const today = new Date();
const startOfWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - today.getDay()
);
const days = Array.from(
  { length: 7 },
  (_, i) =>
    new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate() + i
    )
);
const year = today.getFullYear();
const month = today.toLocaleString("en-US", { month: "long" });

const Calendar = () => {
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
