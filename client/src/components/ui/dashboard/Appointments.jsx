import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useBooking } from "../../../context/BookingContext";


export default function Appointments({ handleToast }) {

    const { bookingData } = useBooking();

    const navigate = useNavigate();

    const safeData = {
        service: bookingData.service || "No service selected",
        date: bookingData.date,
        time: bookingData.time || "No time selected",
        price: bookingData.price || "0.00",
    };

    // Format date from YYYY-MM-DD format
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

    const formattedDate = safeData.date ? `${formatDateForDisplay(safeData.date)}` : "No date selected";

    const [activeTab, setActiveTab] = useState("Upcoming");

    const appointmentData = {
        Upcoming: {
            title: safeData.service,
            date: formattedDate,
            time: safeData.time,
            location: "VIP Beauty Studio",
            price: safeData.price,
            note: "Please arrive 10 minutes early for your consultation.",
        },
        Completed: {
            title: "Luxury Facial Ritual",
            date: "Monday, May 25, 2026",
            time: "2:30 PM",
            location: "VIP Beauty Studio",
            price: 180,
            note: "Your glow treatment was completed successfully.",
        },
        Cancelled: {
            title: "Signature Blowout",
            date: "Friday, May 15, 2026",
            time: "4:00 PM",
            location: "VIP Beauty Studio",
            price: 90,
            note: "This appointment was cancelled and can be rescheduled anytime.",
        },
    };

    const appointmentSections = ["Upcoming", "Completed", "Cancelled"];
    const selectedAppointment = appointmentData[activeTab];

    return (
        <div className="panel-card appointments-card">
            <div className="panel-header">
                <div>
                    <p className="section-eyebrow">Schedule</p>
                    <h2>My Appointments</h2>
                </div>
                <button 
                type="button" 
                className="primary-button"
                onClick={() => navigate("/book")}
                >
                    Book New
                </button>
            </div>

            <div className="appointment-tab-container">
                <div className="appointment-tab">
                    {appointmentSections.map((apt) => (
                        <button
                            className={`appointment-tab-item ${activeTab === apt ? "active" : ""}`}
                            key={apt}
                            type="button"
                            onClick={() => setActiveTab(apt)}
                        >
                            {apt} (1)
                        </button>
                    ))}
                </div>
            </div>

            <div className="appointment-summary">
                <div className="apt-first-section">
                    <div className="apt-header">
                        <div className="apt-service-name">
                            <h3>{selectedAppointment.title}</h3>
                            <span>{activeTab}</span>
                        </div>
                    </div>

                    <p><Calendar size={14} /> {selectedAppointment.date}</p>
                    <p><Clock size={14} /> {selectedAppointment.time}</p>
                    <p><MapPin size={14} /> {selectedAppointment.location}</p>
                    <p className="appointment-note">{selectedAppointment.note}</p>

                    <div id="apt-price" className="apt-price">
                        <span>${selectedAppointment.price}</span>
                    </div>
                </div>
                <div className="apt-second-section">
                    {activeTab === "Upcoming" && (
                        <>
                            <button 
                            type="button" 
                            className="secondary-button" 
                            id="reschedule"
                            onClick={() => handleToast("Reschedule")}
                            >
                                Reschedule
                            </button>

                            <button 
                            type="button" 
                            className="primary-button" 
                            id="cancel"
                            onClick={() => handleToast("Cancel")}
                            >
                                Cancel
                            </button>
                        </>
                    )}

                    {(activeTab === "Completed" || activeTab === "Cancelled") && (
                        <button 
                        type="button" 
                        className="book-again-button"
                        onClick={() => navigate("/book")}
                        >
                            Book again
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}