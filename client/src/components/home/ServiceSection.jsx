import {  HashLink } from "react-router-hash-link";
import { ArrowRight } from "lucide-react";

function ServiceSection() {
    
    return (

        <section className="services-section">
            <main>
                <div className="service-header">
                    <span>01 - services</span>
                    <h2>Our Services</h2>
                    <p>Discover our range of luxury beauty treatments designed to enhance your natural beauty.</p>
                </div>

                <div className="services-container">
                    <div className="service-card">
                        <figure>
                            <img src="/images/lash.jpg" alt="Lash Extensions" />
                        </figure>
                        <h3>Lash Extensions</h3>
                        <p>Experience the art of lash extensions with our expert technicians. We offer a variety of styles, from natural to dramatic, using high-quality materials for a flawless finish.</p>

                        <HashLink to="/services/lash-extensions" className="service-link">
                            View Lash Services <ArrowRight size={16} />
                        </HashLink>
                    </div>

                    <div className="service-card">
                        <figure>
                            <img src="/images/tattoo.jpg" alt="Tattoo" />
                        </figure>
                        <h3>Elegant Tattoos</h3>
                        <p>Get a custom tattoo designed by our talented artists. We use only the finest inks and equipment to ensure your tattoo looks stunning for years to come.</p>

                        <HashLink to="/services/tattoos" className="service-link">
                            View Tattoo Services <ArrowRight size={16} />
                        </HashLink>
                    </div>

                    <div className="service-card">
                        <figure>
                            <img src="/images/nails.jpg" alt="Nails" />
                        </figure>
                        <h3>Nail Art</h3>
                        <p>Express your style with our exquisite nail art services. From classic manicures to intricate designs, our talented nail artists will create stunning looks that reflect your personality.</p>

                        <HashLink to="/services/nail-art" className="service-link">
                            View Nail Services <ArrowRight size={16} />
                        </HashLink>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default ServiceSection;