import { useNavigate } from "react-router";
import { ShoppingBag } from "lucide-react";

export default function CartItem() {
    
    const navigate = useNavigate();

    return (
        <section className="cart-section">
            <div className="cart-container">
                <div className="cart-icon-box">
                    <ShoppingBag size={50} className="cart-page-icon" />
                </div>

                <h2>Your Cart is empty</h2>

                <p>Looks like you haven't added any products to your cart yet. <br /> Browse our collection of premium hair care products.</p>

                <button 
                className="cart-shop-button"
                onClick={() => navigate("/shop")}
                >
                    Continue Shopping
                </button>
            </div>
        </section>
    )
}