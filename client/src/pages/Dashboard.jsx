import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { CircleAlert } from "lucide-react";
import UserAccount from "../components/ui/dashboard/UserAccount";
import DashboardOverview from "../components/ui/dashboard/DashboardOverview";
import Appointments from "../components/ui/dashboard/Appointments";
import Orders from "../components/ui/dashboard/Orders";
import Profile from "../components/ui/dashboard/Profile";
import Toast from "../components/animation/Toast";

export default function Dashboard() {
    const [activeView, setActiveView] = useState("overview");

    const location = useLocation();

    const serviceData = location?.state?.data;
    const activeState = location?.state?.active;

    const [ toast, setToast ] = useState(null);

    useEffect(() => {
        if (activeState) {
            setActiveView(activeState);
        }
    }, []);
    
    const handleToast = (text) => {
        setToast({
            message: <span className="circle-check"><CircleAlert className="circle-icon" /> {text} feature coming soon! </span>
        })
    }

    const renderPanel = () => {
        switch (activeView) {
            case "appointments":
                return <Appointments data={serviceData} handleToast={handleToast} />;
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

            {/* Render Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}