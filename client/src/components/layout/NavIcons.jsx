import { useNavigate } from "react-router";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useBooking } from "../../context/BookingContext";
import BookButton from "./BookButton";


function NavIcons() {

    const navigate = useNavigate();
    const { getTotalItems } = useCart();
    const { bookingData } = useBooking();
    const cartCount = getTotalItems();
    
    return (

        <main className="nav-icon-container">
            <div className="nav-icons">
                <div className="cart-icon-wrapper">
                    <ShoppingCart 
                        className="nav-icon"
                        onClick={() => navigate("/cart")}
                    />
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </div>
                <User 
                    className="nav-icon"
                    onClick={() => navigate("/dashboard")}
                />
            </div>

            <BookButton />
        </main>
        
    )
}

export default NavIcons;