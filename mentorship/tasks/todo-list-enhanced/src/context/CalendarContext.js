import React, { createContext, useContext, useMemo } from "react";

export const CalendarContextView = createContext();

export const useCalendarContext = () => useContext(CalendarContextView);

const CalendarContext = ({ children }) => {
  const today = useMemo(() => new Date(), []);
  const daysOfWeek = useMemo(
    () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    []
  );
  const year = useMemo(() => today.getFullYear(), [today]);
  const month = useMemo(
    () => today.toLocaleString("en-US", { month: "long" }),
    [today]
  );
  const startOfWeek = useMemo(
    () =>
      new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay() + 1
      ),
    [today]
  );

  const days = useMemo(
    () =>
      Array.from(
        { length: 7 },
        (_, i) =>
          new Date(
            startOfWeek.getFullYear(),
            startOfWeek.getMonth(),
            startOfWeek.getDate() + i
          )
      ),
    [startOfWeek]
  );
  return (
    <CalendarContextView.Provider
      value={{ days, year, month, daysOfWeek, today }}
    >
      {children}
    </CalendarContextView.Provider>
  );
};

export default CalendarContext;
