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

  // Parse date string (YYYY-MM-DD format) in local timezone
  const parseStoredDate = (dateString) => {
    if (!dateString) return startOfToday;
    const [year, month, day] = dateString.split('-');
    if (!year || !month || !day) return startOfToday;
    const parsed = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return isNaN(parsed.getTime()) ? startOfToday : parsed;
  };

  const [date, setDate] = useState(parseStoredDate(data?.date));

  function handleDateChange(nextDate) {
    setDate(nextDate);

    if (typeof updateBooking === 'function') {
      try {
        // Store as YYYY-MM-DD format in local timezone (not UTC)
        const year = nextDate.getFullYear();
        const month = String(nextDate.getMonth() + 1).padStart(2, '0');
        const day = String(nextDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        updateBooking({
          date: formattedDate
        });
      } catch (e) {
        // swallow errors to avoid breaking consumer
        // caller can handle their own updateBooking implementation
        // avoid console pollution in production code
      }
    }
  }

  // Format date for display (e.g., "Monday, January 1, 2024")
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return 'Not selected';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Format Date object for display
  const formatDateObjectForDisplay = (dateObj) => {
    if (!dateObj) return 'Not selected';
    return dateObj.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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

          <p className="selected">Selected Date: {data?.date ? formatDateForDisplay(data.date) : formatDateObjectForDisplay(date)}</p>
        </div>
      </div>
    </div>
  );
}

export default Step3Date;