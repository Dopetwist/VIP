import { useNavigate } from "react-router";
import { useBooking } from "../../context/BookingContext";

function BookButton() {

    const { clearBooking } = useBooking();
    const navigate = useNavigate();

    return (
        <button 
        id="header-book-btn"
        className="book-button"
        onClick={() => {
            clearBooking();
            navigate("/book");
        }}
        >
            Book Now
        </button>
    )
}

export default BookButton;