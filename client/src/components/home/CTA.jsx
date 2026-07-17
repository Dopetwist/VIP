import { useNavigate } from "react-router";
import { useBooking } from "../../context/BookingContext";

function CTA() {

    const { clearBooking } = useBooking();
    const navigate = useNavigate();
    
    return (

        <section className="cta-section">
            <main>
                <div className="cta-container">
                    <h1>Book your next <br /> <span>beauty session</span></h1>
                    <p>Reserve a private moment with our beauty experts.</p>

                    <button
                    onClick={() => {
                        clearBooking();
                        navigate("/book");
                    }}
                    >
                        Reserve Now
                    </button>
                </div>
            </main>
        </section>
    )
}

export default CTA;