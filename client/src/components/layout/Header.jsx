import Logo from "./Logo";
import Navbar from "./Navbar";
import NavIcons from "./NavIcons";

function Header() {
    
    return (
        //  Header Section

        <header className="header" id="header">
            <Logo />
            <Navbar />
            <NavIcons />
        </header>
    )
}

export default Header;