import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Clock, CircleAlert } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { revealTop, revealBottom } from "../utils/reveal";
import services from "../data/services";
import Toast from "../components/animation/Toast";

function ServicePage() {

    const [ activeTab, setActiveTab ] = useState("All");
    const [ toast, setToast ] = useState(null);
    const { clearBooking } = useBooking();
    const location = useLocation();
    const serviceTab = location.state || "All";
    const navigate = useNavigate();

    const filteredServices =
        activeTab === "All"
            ? services
            : services.filter(service => service.category === activeTab);

    const serviceList = [
        "Lashes",
        "Tattoos",
        "Nails"
    ]
    
    const handleToast = () => {
        setToast({
            message: <span className="circle-check">
                        <CircleAlert className="circle-icon" />
                        Details feature coming soon!
                    </span>
        })
    }

    useEffect(() => {
        revealTop(".page-header h2");
        revealBottom(".page-header p");
    }, []);

    useEffect(() => {
        if (serviceTab) {
            setActiveTab(serviceTab);
        }
    }, []);
    
    return (

        <div className="service-page">
            <div className="page-header">
                <h2>Our Services</h2>
                <p>Explore our comprehensive range of luxury beauty services, tailored to enhance your natural beauty.</p>
            </div>

            <div className="services-tab-container">
                <div className="services-tab">
                    <button 
                    className={`service-tab-item ${activeTab === "All" ? "active" : ""}`}
                    onClick={() => setActiveTab("All")}
                    >
                        All Services
                    </button>

                    {serviceList.map((service, index) => (
                        <button 
                        className={`service-tab-item ${activeTab === service ? "active" : ""}`}
                        key={index + 1}
                        onClick={() => setActiveTab(service)}
                        >
                            {service}
                        </button>
                    ))}
                </div>
            </div>

            <div className={filteredServices.length === 0 ? "no-services-container" : "services-main-container"}>
                {filteredServices.length === 0 ? (
                        <div className="no-services">
                            <CircleAlert size={28} color="#cc9509" />
                            <p>No Services in this category yet!</p>
                        </div>
                    ) : (
                            filteredServices.map((service) => (
                                <div key={service.id} className="service-list-item">
                                    <div className="name-box">
                                        <span className="service-category">{service.category}</span>
                                        <p id="service-page-price">${service.price}</p>
                                    </div>

                                    <h4 className="service-name">{service.name}</h4>
                                    <p>{service.description}</p>
                                    <p id="service-time"><Clock size={16} /> {service.time} min</p>

                                    <div className="buttons-box">
                                        <button 
                                        type="button" 
                                        className="service-book-btn"
                                        onClick={() => {
                                            clearBooking();
                                            navigate("/book");
                                        }}
                                        >
                                            Book Now
                                        </button>

                                        <button 
                                        type="button" 
                                        className="service-details-btn"
                                        onClick={handleToast}
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            ))
                    )
                }
            </div>

            {/* Render Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}

        </div>
    )
}

export default ServicePage;