import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Banner from './Banner';
import Logo from './Logo';
import Navbar from './Navbar';
import NavIcons from './NavIcons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="site-top">
            <Banner />

            <header className="header" id="header">
                <Logo />

                <button
                    type="button"
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <Navbar isOpen={isMenuOpen} onLinkClick={closeMenu} />
                <NavIcons />
            </header>
        </div>
    );
}

export default Header;