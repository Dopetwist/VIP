import Banner from "./Banner";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavIcons from "./NavIcons";

function Header() {
    
    return (
        //  Header Section

        <div className="site-top">
            <Banner />
            
            <header className="header" id="header">
                <Logo />
                <Navbar />
                <NavIcons />
            </header>
        </div>
    )
}

export default Header;