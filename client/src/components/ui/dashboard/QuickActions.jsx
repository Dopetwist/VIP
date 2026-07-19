import { useNavigate } from "react-router";
import { useBooking } from "../../../context/BookingContext";

export default function QuickActions({ onNavigate }) {

    const { clearBooking } = useBooking();
    const navigate = useNavigate();

    return (
        <div className="quick-actions">
            <h3>Quick Actions</h3>

            <div className="quick-actions-buttons">
                <button 
                type="button" 
                onClick={() => {
                    clearBooking();
                    navigate("/book");
                }}
                >
                    Book New Appointment
                </button>

                <button type="button" onClick={() => onNavigate("orders")}>View Orders</button>
                <button type="button" onClick={() => onNavigate("profile")}>Edit Profile</button>
            </div>
        </div>
    );
}