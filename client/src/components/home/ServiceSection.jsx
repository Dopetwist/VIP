import { useNavigate } from "react-router";
import {  HashLink } from "react-router-hash-link";
import { ArrowRight, Clock } from "lucide-react";
import services from "../../data/services";

const serviceArray = [
    {
        id: 1,
        category: "Lashes",
        name: "Lash Extensions",
        description: "Experience the art of lash extensions with our expert technicians. We offer a variety of styles, from natural to dramatic, using high-quality materials for a flawless finish.",
        image: "/images/lash.jpg"
    },
    {
        id: 2,
        category: "Tattoos",
        name: "Elegant Tattoos",
        description: "Get a custom tattoo designed by our talented artists. We use only the finest inks and equipment to ensure your tattoo looks stunning for years to come.",
        image: "/images/tattoo.jpg"
    },
    {
        id: 3,
        category: "Nails",
        name: "Nail Art",
        description: "Express your style with our exquisite nail art services. From classic manicures to intricate designs, our talented nail artists will create stunning looks that reflect your personality.",
        image: "/images/nails.jpg"
    }
]

function ServiceSection() {

    const navigate = useNavigate();
    
    return (

        <section className="services-section">
            <main>
                <div className="service-header">
                    <span className="section-span">01 - services</span>
                    <h2>Our Services</h2>
                    <p>Discover our range of luxury beauty treatments designed to enhance your natural beauty.</p>
                </div>

                <div className="services-container">
                    {serviceArray.map((service) => (
                        <div key={service.id} className="service-card">
                            <figure>
                                <img src={service.image} alt={service.name} />
                            </figure>
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>

                            <button 
                            className="service-link"
                            onClick={() => {
                                navigate("/services", { state: service.category });
                            }}
                            >
                                View {service.category} Services <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="service-lists">
                    {services.slice(0, 3).map(service => (
                        <div key={service.id} className="service-list-item">
                            <div className="name-box">
                                <h4>{service.name}</h4>
                                <p id="service-price">${service.price}</p>
                            </div>
                            <p>{service.description}</p>
                            <p id="service-time"><Clock size={16} /> {service.time} min</p>

                            <button 
                            type="button" 
                            className="service-book-btn"
                            onClick={() => navigate("/book")}
                            >
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default ServiceSection;