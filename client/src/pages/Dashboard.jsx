import { useState } from "react";
import { useLocation } from "react-router";
import UserAccount from "../components/ui/dashboard/UserAccount";
import DashboardOverview from "../components/ui/dashboard/DashboardOverview";
import Appointments from "../components/ui/dashboard/Appointments";
import Orders from "../components/ui/dashboard/Orders";
import Profile from "../components/ui/dashboard/Profile";

export default function Dashboard() {
    const [activeView, setActiveView] = useState("overview");

    const location = useLocation();

    const serviceData = location?.state?.data;

    const renderPanel = () => {
        switch (activeView) {
            case "appointments":
                return <Appointments data={serviceData} />;
            case "orders":
                return <Orders />;
            case "profile":
                return <Profile />;
            default:
                return <DashboardOverview 
                            onNavigate={setActiveView}
                            data={serviceData}
                        />;
        }
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-main">
                <UserAccount activeView={activeView} onNavigate={setActiveView} />
                <div className="dashboard-content-panel">{renderPanel()}</div>
            </div>
        </div>
    );
}