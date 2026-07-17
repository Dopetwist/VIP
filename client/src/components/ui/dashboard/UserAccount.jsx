import { useEffect } from "react";
import { useNavigate } from "react-router";
import { LayoutDashboard, Calendar, Package, User, LogOut } from "lucide-react";
import { useBooking } from "../../../context/BookingContext";

const menuItems = [
    { key: "overview", label: "Overview", icon: LayoutDashboard },
    { key: "appointments", label: "My Appointments", icon: Calendar },
    { key: "orders", label: "My Orders", icon: Package },
    { key: "profile", label: "Profile", icon: User },
];

export default function UserAccount({ activeView, onNavigate }) {

    const { bookingData, clearBooking } = useBooking();
    const navigate = useNavigate();

    const user = bookingData.info?.fullName || "Sarah Victor";
    const userEmail = bookingData.info?.email || "sarah@example.com";

    // Get the initial letters of user's names
    const names = user.trim().split(/\s+/).slice(0, 2);
    const initials = names.map((name) => name[0]).join("");

    return (
        <aside className="dashboard-sidebar">
            <div className="account-container">
                <div className="account-hero">
                    <div className="account-avatar">{initials}</div>
                    <div>
                        <h2>{user}</h2>
                        <p>{userEmail}</p>
                    </div>
                </div>

                <div className="dashboard-sections">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.key}
                                type="button"
                                className={`sidebar-nav-item ${activeView === item.key ? "active" : ""}`}
                                onClick={() => onNavigate(item.key)}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}

                    <button 
                    type="button" 
                    className="sidebar-nav-item logout" 
                    onClick={() => {
                        navigate("/");
                        clearBooking();
                    }}
                    >
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}