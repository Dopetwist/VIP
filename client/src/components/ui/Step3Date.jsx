import { useState, useMemo } from "react";
import { CalendarDays } from "lucide-react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Essential default styling
import './Step3Date.css';

function Step3Date({ data, updateBooking }) {
  
  const today = useMemo(() => new Date(), []);
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const [date, setDate] = useState(
    data?.date ? new Date(data.date) : startOfToday
  );

  function handleDateChange(nextDate) {
    setDate(nextDate);

    if (typeof updateBooking === 'function') {
      try {
        updateBooking(
          "date",
          nextDate
        );
      } catch (e) {
        // swallow errors to avoid breaking consumer
        // caller can handle their own updateBooking implementation
        // avoid console pollution in production code
      }
    }
  }

  return (
    <div className="date-section">
      <h2 className="select-days"><CalendarDays /> Select Date</h2>

      <div className="choose-date">
        <div className="date-container">
          <h3>Calendar</h3>

          <Calendar
            onChange={handleDateChange}
            value={date}
            minDate={startOfToday}
            tileDisabled={({ date: d, view }) => view === 'month' && d < startOfToday}
            showNeighboringMonth={false}
            className="vip-calendar"
          />

          <p className="selected">Selected Date: {date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Step3Date;