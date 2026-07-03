import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle, Package, Truck, Clock } from "lucide-react";
import { useCart } from "../hooks/useCart";

export default function OrderSuccessPage() {
    const navigate = useNavigate();
    const { clearCart } = useCart();
    const [orderData, setOrderData] = useState(null);
    const [shippingData, setShippingData] = useState(null);

    useEffect(() => {
        // Get order and shipping data
        const order = localStorage.getItem("vip-last-order");
        const shipping = localStorage.getItem("vip-shipping-data");

        if (order) {
            setOrderData(JSON.parse(order));
        }
        if (shipping) {
            setShippingData(JSON.parse(shipping));
        }

        // Clear cart after successful order
        clearCart();

        // Clear payment flag
        localStorage.removeItem("vip-payment-completed");
    }, [clearCart]);

    if (!orderData) {
        return (
            <section className="order-success-section">
                <div className="success-container">
                    <p className="loading">Loading order information...</p>
                </div>
            </section>
        );
    }

    // Generate a random order number
    const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
        .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    return (
        <section className="order-success-section">
            <div className="success-container">
                <div className="success-icon-wrapper">
                    <CheckCircle size={80} className="success-icon" />
                </div>

                <h1 className="success-title">Order Placed Successfully!</h1>
                <p className="success-message">
                    Thank you for your purchase. Your order has been confirmed and will be processed shortly.
                </p>

                <div className="order-number">
                    <p>Order Number: <span className="number">{orderData.orderNumber}</span></p>
                    <p className="order-date">
                        Ordered on {new Date(orderData.timestamp).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </p>
                </div>

                <div className="order-timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Package size={24} />
                        </div>
                        <div className="timeline-content">
                            <h4>Order Confirmed</h4>
                            <p>We've received your order</p>
                        </div>
                    </div>

                    <div className="timeline-connector"></div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Clock size={24} />
                        </div>
                        <div className="timeline-content">
                            <h4>Processing</h4>
                            <p>Your order is being prepared</p>
                        </div>
                    </div>

                    <div className="timeline-connector"></div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Truck size={24} />
                        </div>
                        <div className="timeline-content">
                            <h4>On the Way</h4>
                            <p>Expected delivery: {estimatedDelivery}</p>
                        </div>
                    </div>
                </div>

                <div className="order-details">
                    <div className="details-section">
                        <h3>Order Summary</h3>
                        <div className="items-summary">
                            {orderData.items.map((item) => (
                                <div key={item.id} className="summary-item-row">
                                    <span className="item-info">
                                        {item.name} <span className="qty">x {item.quantity}</span>
                                    </span>
                                    <span className="item-cost">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="totals">
                            <div className="total-row">
                                <span>Subtotal:</span>
                                <span>${orderData.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="total-row">
                                <span>Tax:</span>
                                <span>${orderData.tax.toFixed(2)}</span>
                            </div>
                            <div className="total-row total-final">
                                <span>Total:</span>
                                <span>${orderData.total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {shippingData && (
                        <div className="details-section">
                            <h3>Shipping Address</h3>
                            <div className="address-info">
                                <p className="name">
                                    {shippingData.firstName} {shippingData.lastName}
                                </p>
                                <p>{shippingData.address}</p>
                                <p>
                                    {shippingData.city}, {shippingData.state} {shippingData.zipCode}
                                </p>
                                <p>{shippingData.country}</p>
                                <p className="contact-info">{shippingData.email}</p>
                                <p className="contact-info">{shippingData.phone}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="confirmation-message">
                    <p>A confirmation email has been sent to your email address with order details and tracking information.</p>
                </div>

                <div className="success-buttons">
                    <button
                        className="btn-primary"
                        onClick={() => navigate("/shop")}
                    >
                        Continue Shopping
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </section>
    );
}
