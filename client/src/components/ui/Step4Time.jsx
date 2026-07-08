import { Clock } from "lucide-react";

function Step4Time({ data, updateBooking }) {

  const time = [
      { id: 1, timeSlot: "09:00", moment: "AM", availability: "free" },
      { id: 2, timeSlot: "10:00", moment: "AM", availability: "free" },
      { id: 3, timeSlot: "11:00", moment: "AM", availability: "booked" },
      { id: 4, timeSlot: "12:00", moment: "PM", availability: "free" },
      { id: 5, timeSlot: "01:00", moment: "PM", availability: "booked" },
      { id: 6, timeSlot: "02:00", moment: "PM", availability: "free" },
      { id: 7, timeSlot: "03:00", moment: "PM", availability: "free" },
      { id: 8, timeSlot: "04:00", moment: "PM", availability: "booked" },
      { id: 9, timeSlot: "05:00", moment: "PM", availability: "booked" },
      { id: 10, timeSlot: "06:00", moment: "PM", availability: "free" }
  ];

  return (
    <div className="time-section">
      <h2 className="select-time"><Clock /> Select Time Slot</h2>

      <div className="time-container">
        {time.map((t) => (
          <div key={t.id} className={`time-box 
              ${t.availability === "booked" ? "booked" : ""}
              ${data.time === `${t.timeSlot} ${t.moment}` ? "selected" : ""}
            `}
            onClick={() => 
              updateBooking({
                time: `${t.timeSlot} ${t.moment}`
              })
            }
          >
            <p>{t.timeSlot} {t.moment} 
              <span className="booked-span">
                {t.availability === "booked" && "Booked"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Step4Time;