import { useNavigate } from "react-router";
import { useBooking } from "../../context/BookingContext";
import BookButton from "../layout/BookButton";

function HeroSection() {

    const { clearBooking } = useBooking();

    const navigate = useNavigate();
    
    return (
        
        <main className="hero-section">
            <span>The Art of Personal Care</span>

            <h1>Elevate Your Natural Beauty</h1>

            <p>Experience luxury beauty treatments at VIP Beauty Studio. From stunning lash extensions to flawless permanent makeup and exquisite nail art.</p>

            <div className="hero-buttons">
                <button 
                className="book-button"
                onClick={() => {
                    clearBooking();
                    navigate("/book");
                }}
                >
                    Book Appointment
                </button>

                <button 
                className="shop-button"
                onClick={() => navigate("/shop")}
                >
                    Shop Hair Products
                </button>
            </div>
        </main>
        
    )
}

export default HeroSection;