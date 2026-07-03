import { useNavigate } from "react-router";
import { ShoppingCart, User } from "lucide-react";
import BookButton from "./BookButton";
import { useCart } from "../../hooks/useCart";


function NavIcons() {

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
                    onClick={() => navigate("/dashboard")}
                />
            </div>

            <BookButton />
        </main>
        
    )
}

export default NavIcons;