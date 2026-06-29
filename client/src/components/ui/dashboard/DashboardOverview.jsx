import QuickActions from "./QuickActions";
import NeedHelp from "./NeedHelp";
import { Calendar, Package, User } from "lucide-react";

export default function DashboardOverview({ onNavigate }) {
    return (
        <div className="dashboard-overview-card">
            <div className="panel-header">
                <div>
                    <p className="section-eyebrow">Welcome back</p>
                    <h2>Dashboard Overview</h2>
                </div>
                <span className="status-pill">VIP Member</span>
            </div>

            <div className="dashboard-overview-container">
                <div className="overview-item">
                    <div className="overview-icon">
                        <Calendar size={24} />
                    </div>
                    <div className="overview-text">
                        <p>1</p>
                        <span>Upcoming Appointments</span>
                    </div>
                </div>
                <div className="overview-item">
                    <div className="overview-icon">
                        <Package size={24} />
                    </div>
                    <div className="overview-text">
                        <p>2</p>
                        <span>Total Orders</span>
                    </div>
                </div>
                <div className="overview-item">
                    <div className="overview-icon">
                        <User size={24} />
                    </div>
                    <div className="overview-text">
                        <p>Gold</p>
                        <span>Member Status</span>
                    </div>
                </div>
            </div>

            <div className="overview-below">
                <QuickActions onNavigate={onNavigate} />
                <NeedHelp onNavigate={onNavigate} />
            </div>
        </div>
    );
}