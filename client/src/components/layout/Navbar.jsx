import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';

function Navbar({ isOpen = false, onLinkClick }) {
    const location = useLocation();

    const links = [
        { to: '/', label: 'Home', path: '/' },
        { to: '/services', label: 'Services', path: '/services' },
        { to: '/shop', label: 'Shop', path: '/shop' },
        { to: '/gallery', label: 'Gallery', path: '/gallery' },
        { to: '/about', label: 'About', path: '/about' },
        { to: '/contact', label: 'Contact', path: '/contact' },
    ];

    return (
        <nav id="navbar" className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="nav-links">
                {links.map((link) => (
                    <HashLink
                        key={link.path}
                        smooth
                        to={link.to}
                        className={`link body-text ${location.pathname === link.path ? 'active' : ''}`}
                        onClick={onLinkClick}
                    >
                        {link.label}
                    </HashLink>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;