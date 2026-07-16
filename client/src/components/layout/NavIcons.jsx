import { useNavigate } from "react-router";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import BookButton from "./BookButton";


function NavIcons({ bookingData = {} }) {

    const navigate = useNavigate();
    const { getTotalItems } = useCart();
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
                    onClick={() => {
                        console.log("User icon data is: ", bookingData);
                        navigate("/dashboard", { state: { data: bookingData } });
                    }}
                />
            </div>

            <BookButton />
        </main>
        
    )
}

export default NavIcons;