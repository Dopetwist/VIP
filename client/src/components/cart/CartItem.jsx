import { useNavigate } from "react-router";
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../../hooks/useCart";

export default function CartItem() {
    
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    if (cartItems.length === 0) {
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

    return (
        <section className="cart-section">
            <div className="cart-page-container">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <p className="items-count">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</p>
                </div>

                <div className="cart-content">
                    <div className="cart-items-container">
                        <div className="cart-items-list">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className="cart-item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-category">{item.category}</p>
                                        <p className="item-price">${item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="cart-item-quantity">
                                        <button 
                                            className="qty-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="qty-display">{item.quantity}</span>
                                        <button 
                                            className="qty-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <div className="cart-item-total">
                                        <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    <button 
                                        className="cart-item-remove"
                                        onClick={() => removeFromCart(item.id)}
                                        title="Remove from cart"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button 
                            className="continue-shopping-link"
                            onClick={() => navigate("/shop")}
                        >
                            ← Continue Shopping
                        </button>
                    </div>

                    <div className="cart-summary">
                        <div className="summary-header">
                            <h3>Order Summary</h3>
                        </div>

                        <div className="summary-rows">
                            <div className="summary-row">
                                <span>Subtotal:</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="summary-row">
                                <span>Tax:</span>
                                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row summary-total">
                                <span>Total:</span>
                                <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                            </div>
                        </div>

                        <button 
                            className="checkout-button"
                            onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </button>

                        <button 
                            className="continue-btn"
                            onClick={() => navigate("/shop")}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}