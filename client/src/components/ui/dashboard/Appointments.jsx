import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const appointmentData = {
    Upcoming: {
        title: "Volume Lash Extensions",
        date: "Wednesday, June 10, 2026",
        time: "10:00 AM",
        location: "VIP Beauty Studio",
        price: "$250",
        note: "Please arrive 10 minutes early for your consultation.",
    },
    Completed: {
        title: "Luxury Facial Ritual",
        date: "Monday, May 25, 2026",
        time: "2:30 PM",
        location: "VIP Beauty Studio",
        price: "$180",
        note: "Your glow treatment was completed successfully.",
    },
    Cancelled: {
        title: "Signature Blowout",
        date: "Friday, May 15, 2026",
        time: "4:00 PM",
        location: "VIP Beauty Studio",
        price: "$90",
        note: "This appointment was cancelled and can be rescheduled anytime.",
    },
};

export default function Appointments() {
    const [activeTab, setActiveTab] = useState("Upcoming");

    const appointmentSections = ["Upcoming", "Completed", "Cancelled"];
    const selectedAppointment = appointmentData[activeTab];

    return (
        <div className="panel-card appointments-card">
            <div className="panel-header">
                <div>
                    <p className="section-eyebrow">Schedule</p>
                    <h2>My Appointments</h2>
                </div>
                <button type="button" className="primary-button">Book New</button>
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
                            {apt}
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
                </div>
                <div className="apt-second-section">
                    <button type="button" className="secondary-button">Reschedule</button>
                    <button type="button" className="primary-button">Manage</button>
                </div>
            </div>

            <div className="apt-price">
                <p>{selectedAppointment.price}</p>
            </div>
        </div>
    );
}