import { NavLink } from "react-router-dom";

function Footer() {
    
    return (

        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <figure>
                        <img src="/images/VIP-header-logo.png" alt="VIP Logo" />
                    </figure>

                    <h2>Beauty Studio</h2>

                    <p>The destination for high-end beauty services and premium products in the heart of the city.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-link-box">
                        <h3>Quick Links</h3>

                        <NavLink to={"/services"} className="anchor-link">Services</NavLink>
                        <NavLink to={"/book"} className="anchor-link">Book Appointment</NavLink>
                        <NavLink to={"/shop"} className="anchor-link">Shop Products</NavLink>
                        <NavLink to={"/gallery"} className="anchor-link">Gallery</NavLink>
                    </div>

                    <div className="footer-link-box">
                        <h3>Services</h3>

                        <p>Eyelash Extensions</p>
                        <p>Tattoos</p>
                        <p>Nail Services</p>
                        <p>Hair Products</p>
                    </div>

                    <div className="footer-link-box">
                        <h3>Reach Out to Us</h3>

                        <p className="footer-contact-p">
                            Munalux road, <br />

                            Lekki, Lagos. <br />

                            +234 123 456 7890 <br />

                            vipbeautystudio21@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="copyright-section">
                <p>&copy; { new Date().getFullYear() } VIP Beauty Studio. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;