export default function Orders() {
    return (
        <div className="panel-card orders-card">
            <div className="panel-header">
                <div>
                    <p className="section-eyebrow">Purchases</p>
                    <h2>My Orders</h2>
                </div>
                <button type="button" className="primary-button">Shop Again</button>
            </div>

            <div className="orders-summary">
                <div className="order-item">
                    <div className="first-order">
                        <h3>Order #order-1</h3>
                        <span className="order-status delivered">Delivered</span>
                    </div>

                    <div className="order-details">
                        <p>Luxury hair serum</p>
                        <p>Qty: 1 • Total: $68</p>
                    </div>

                    <div className="order-section-buttons">
                        <button type="button" className="secondary-button">View Details</button>
                        <button type="button" className="primary-button">Buy Again</button>
                    </div>
                </div>

                <div className="order-item">
                    <div className="second-order">
                        <h3>Order #order-2</h3>
                        <span className="order-status shipped">Shipped</span>
                    </div>

                    <div className="order-details">
                        <p>Velvet makeup pouch</p>
                        <p>Qty: 2 • Total: $92</p>
                    </div>

                    <div className="order-section-buttons">
                        <button type="button" className="secondary-button">View Details</button>
                        <button type="button" className="primary-button">Track Package</button>
                    </div>
                </div>
            </div>
        </div>
    );
}