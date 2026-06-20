import { HashLink } from "react-router-hash-link";

function Footer() {
    
    return (

        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <figure>
                        <img src="/path/to/logo.png" alt="VIP Logo" />
                    </figure>

                    <h2>Beauty Studio</h2>

                    <p>The destination for high-end beauty services and premium products in the heart of the city.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-link-box">
                        <h3>Quick Links</h3>

                        <HashLink smooth to={"/services"} className="anchor-link">Services</HashLink>
                        <HashLink smooth to={"/book"} className="anchor-link">Book Appointment</HashLink>
                        <HashLink smooth to={"/shop"} className="anchor-link">Shop Products</HashLink>
                        <HashLink smooth to={"/gallery"} className="anchor-link">Gallery</HashLink>
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
                            123 Beauty Lane <br />

                            New York, NY 10001 <br />

                            (555) 123-4567 <br />

                            info@vipbeauty.com
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