import { ShoppingCart, User } from "lucide-react";
import BookButton from "./BookButton";


function NavIcons() {
    
    return (

        <main className="nav-icon-container">
            <div className="nav-icons">
                <ShoppingCart className="nav-icon" />
                <User className="nav-icon" />
            </div>

            <BookButton />
        </main>
        
    )
}

export default NavIcons;