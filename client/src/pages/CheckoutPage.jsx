import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";

export default function CheckoutPage() {
    const navigate = useNavigate();
    const { getTotalPrice, cartItems } = useCart();
    const [currentStep, setCurrentStep] = useState("shipping");

    const subtotal = getTotalPrice();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const handleNextStep = () => {
        if (currentStep === "shipping") {
            setCurrentStep("payment");
        }
    };

    const handlePreviousStep = () => {
        if (currentStep === "payment") {
            setCurrentStep("shipping");
        }
    };

    const handlePlaceOrder = () => {
        // Store order data (could be sent to server)
        const orderData = {
            items: cartItems,
            orderNumber: "VIP-" + Date.now().toString().slice(-8).toUpperCase(),
            subtotal,
            tax,
            total,
            timestamp: new Date().toISOString(),
        };
        
        localStorage.setItem('vip-last-order', JSON.stringify(orderData));
        navigate("/order-success");
    };

    if (cartItems.length === 0) {
        return (
            <section className="checkout-section">
                <div className="empty-checkout">
                    <p>Your cart is empty. Please add items before checkout.</p>
                    <button onClick={() => navigate("/shop")} className="cart-shop-button">
                        Continue Shopping
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="checkout-section">
            <div className="checkout-container">
                <div className="checkout-content">
                    <div className="checkout-steps">
                        <div className={`step ${currentStep === "shipping" ? "active" : ""}`}>
                            <div className="step-indicator">1</div>
                            <span>Shipping</span>
                        </div>
                        <div className="step-line"></div>
                        <div className={`step ${currentStep === "payment" ? "active" : ""}`}>
                            <div className="step-indicator">2</div>
                            <span>Payment</span>
                        </div>
                    </div>

                    <div className="checkout-form">
                        {currentStep === "shipping" && (
                            <ShippingForm 
                                onNext={handleNextStep}
                                onBack={() => navigate("/cart")}
                            />
                        )}
                        {currentStep === "payment" && (
                            <PaymentForm 
                                onNext={handlePlaceOrder}
                                onBack={handlePreviousStep}
                                total={total}
                            />
                        )}
                    </div>
                </div>

                <div className="checkout-summary">
                    <h3>Order Summary</h3>
                    
                    <div className="summary-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="summary-item">
                                <div className="summary-item-info">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-qty">Qty: {item.quantity}</p>
                                </div>
                                <p className="item-amount">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals">
                        <div className="total-row">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-row">
                            <span>Tax (8%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="total-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="total-divider"></div>
                        <div className="total-row total">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShippingForm({ onNext, onBack }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Save shipping data to localStorage
        localStorage.setItem("vip-shipping-data", JSON.stringify(formData));
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form-content">
            <h2>Shipping Information</h2>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "input-error" : ""}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "input-error" : ""}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "input-error" : ""}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
            </div>

            <div className="form-group full-width">
                <label htmlFor="address">Address *</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? "input-error" : ""}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={errors.city ? "input-error" : ""}
                    />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="state">State/Province *</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={errors.state ? "input-error" : ""}
                    />
                    {errors.state && <span className="error-message">{errors.state}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={errors.zipCode ? "input-error" : ""}
                    />
                    {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={errors.country ? "input-error" : ""}
                    />
                    {errors.country && <span className="error-message">{errors.country}</span>}
                </div>
            </div>

            <div className="form-buttons">
                <button type="button" className="btn-secondary" onClick={onBack}>
                    Back to Cart
                </button>
                <button type="submit" className="btn-primary">
                    Continue to Payment
                </button>
            </div>
        </form>
    );
}

function PaymentForm({ onNext, onBack, total }) {
    const [formData, setFormData] = useState({
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        billingAddress: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        // Format card number with spaces
        if (name === "cardNumber") {
            formattedValue = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
        }

        // Format expiry date
        if (name === "expiryDate") {
            formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").slice(0, 5);
        }

        // Limit CVV to 4 digits
        if (name === "cvv") {
            formattedValue = value.replace(/\D/g, "").slice(0, 4);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: formattedValue,
        }));

        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.cardName.trim()) newErrors.cardName = "Cardholder name is required";
        if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
        if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
            newErrors.cardNumber = "Card number must be 16 digits";
        }
        if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required";
        if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";
        if (formData.cvv.length !== 3) {
            newErrors.cvv = "CVV must be 3 digits";
        }
        if (!formData.billingAddress.trim()) newErrors.billingAddress = "Billing address is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Save payment data (don't actually save card details in real app)
        localStorage.setItem("vip-payment-completed", "true");
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form-content">
            <h2>Payment Information</h2>

            <div className="form-group full-width">
                <label htmlFor="cardName">Cardholder Name *</label>
                <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    placeholder="Name on card"
                    value={formData.cardName}
                    onChange={handleChange}
                    className={errors.cardName ? "input-error" : ""}
                />
                {errors.cardName && <span className="error-message">{errors.cardName}</span>}
            </div>

            <div className="form-group full-width">
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    maxLength="19"
                    className={errors.cardNumber ? "input-error" : ""}
                />
                {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date *</label>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        maxLength="5"
                        className={errors.expiryDate ? "input-error" : ""}
                    />
                    {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="cvv">CVV *</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                        maxLength="3"
                        className={errors.cvv ? "input-error" : ""}
                    />
                    {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
            </div>

            <div className="form-group full-width">
                <label htmlFor="billingAddress">Billing Address *</label>
                <input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    placeholder="Enter your billing address"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    className={errors.billingAddress ? "input-error" : ""}
                />
                {errors.billingAddress && <span className="error-message">{errors.billingAddress}</span>}
            </div>

            <div className="payment-notice">
                <p>Your payment of <strong>${total.toFixed(2)}</strong> will be processed securely.</p>
            </div>

            <div className="form-buttons">
                <button type="button" className="btn-secondary" onClick={onBack}>
                    Back
                </button>
                <button type="submit" className="btn-primary">
                    Place Order
                </button>
            </div>
        </form>
    );
}
