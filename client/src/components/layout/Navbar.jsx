import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { NavLink } from "react-router-dom";
import { useBooking } from '../../context/BookingContext';

function Navbar({ isOpen = false, onLinkClick }) {

    const { clearBooking } = useBooking();
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { to: '/', label: 'Home', path: '/' },
        { to: '/services', label: 'Services', path: '/services' },
        { to: '/shop', label: 'Shop', path: '/shop' },
        { to: '/gallery', label: 'Gallery', path: '/gallery' },
        { to: '/about', label: 'About', path: '/about' },
        { to: '/contact', label: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        onLinkClick();
    }, [location.pathname]);

    return (
        <nav id="navbar" className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="nav-links">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.to}
                        className={`link body-text ${location.pathname === link.path ? 'active' : ''}`}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>

            {isOpen && (
                <button 
                id="nav-book-btn"
                className="book-button"
                onClick={() => {
                    clearBooking();
                    onLinkClick();
                    navigate("/book");
                }}
                >
                    Book Now
                </button>
            )}
        </nav>
    );
}

export default Navbar;