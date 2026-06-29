import { LayoutDashboard, Calendar, Package, User, LogOut } from "lucide-react";

const menuItems = [
    { key: "overview", label: "Overview", icon: LayoutDashboard },
    { key: "appointments", label: "My Appointments", icon: Calendar },
    { key: "orders", label: "My Orders", icon: Package },
    { key: "profile", label: "Profile", icon: User },
];

export default function UserAccount({ activeView, onNavigate }) {
    return (
        <aside className="dashboard-sidebar">
            <div className="account-container">
                <div className="account-hero">
                    <div className="account-avatar">SV</div>
                    <div>
                        <h2>Sarah Victor</h2>
                        <p>sarah@example.com</p>
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

                    <button type="button" className="sidebar-nav-item logout" onClick={() => onNavigate("overview")}>
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}