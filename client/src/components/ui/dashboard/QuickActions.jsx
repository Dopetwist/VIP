export default function QuickActions({ onNavigate }) {
    return (
        <div className="quick-actions">
            <h3>Quick Actions</h3>

            <div className="quick-actions-buttons">
                <button type="button" onClick={() => onNavigate("appointments")}>Book New Appointment</button>
                <button type="button" onClick={() => onNavigate("orders")}>View Orders</button>
                <button type="button" onClick={() => onNavigate("profile")}>Edit Profile</button>
            </div>
        </div>
    );
}