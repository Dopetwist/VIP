import { useNavigate } from "react-router";
import { ShoppingCart, User } from "lucide-react";
import BookButton from "./BookButton";


function NavIcons() {

    const navigate = useNavigate();
    
    return (

        <main className="nav-icon-container">
            <div className="nav-icons">
                <ShoppingCart 
                    className="nav-icon"
                    onClick={() => navigate("/cart")}
                />
                <User 
                    className="nav-icon"
                    onClick={() => navigate("/dashboard")}
                />
            </div>

            <BookButton />
        </main>
        
    )
}

export default NavIcons;