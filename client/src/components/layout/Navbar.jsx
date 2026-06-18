import { useLocation } from 'react-router';
import { HashLink } from "react-router-hash-link";

function Navbar() {

    const location = useLocation();

    return (

        <nav id="navbar">
            <div className="nav-links">
                <HashLink smooth to="/" className={`link body-text ${location.pathname === "/" ? "active" : ""}`}>Home</HashLink>
                <HashLink smooth to="/services" className={`link body-text ${location.pathname === "/services" ? "active" : ""}`}>Services</HashLink>
                <HashLink smooth to="/shop" className={`link body-text ${location.pathname === "/shop" ? "active" : ""}`}>Shop</HashLink>
                <HashLink smooth to="/gallery" className={`link body-text ${location.pathname === "/gallery" ? "active" : ""}`}>Gallery</HashLink>
                <HashLink smooth to="/about" className={`link body-text ${location.pathname === "/about" ? "active" : ""}`}>About</HashLink>
                <HashLink smooth to="/contact" className={`link body-text ${location.pathname === "/contact" ? "active" : ""}`}>Contact</HashLink>
            </div>
        </nav>
    )
}

export default Navbar;