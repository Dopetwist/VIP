import { useNavigate } from "react-router";

function BookButton() {

    const navigate = useNavigate();

    return (
        <button 
        id="header-book-btn"
        className="book-button"
        onClick={() => navigate("/book")}
        >
            Book Now
        </button>
    )
}

export default BookButton;