import BookButton from "../layout/BookButton";

function HeroSection() {
    
    return (

        
        <main className="hero-section">
            <span>The Art of Personal Care</span>

            <h1>Elevate Your Natural Beauty</h1>

            <p>Experience luxury beauty treatments at VIP Beauty Studio. From stunning lash extensions to flawless permanent makeup and exquisite nail art.</p>

            <div className="hero-buttons">
                <button className="book-button">
                    Book Appointment
                </button>

                <button className="shop-button">
                    Shop Hair Products
                </button>
            </div>
        </main>
        
    )
}

export default HeroSection;