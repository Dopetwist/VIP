import { Phone } from "lucide-react";
import { SocialIcon } from 'react-social-icons';


function Banner() {
    
    return (

        <section>
            <main className="banner">
                <div className="tel">
                    <Phone />
                    <p>(555) 123-4567</p>
                </div>

                <div className="socials">
                    <SocialIcon url="https://www.instagram.com" bgColor="#000" className="social-icon" style={{width: "2rem", height: "2rem"}} label="Our Instagram" target="_blank" />
                    <SocialIcon url="https://facebook.com" bgColor="#000" className="social-icon" style={{width: "2rem", height: "2rem"}} label="Our Facebook" target="_blank" />
                </div>
            </main>
        </section>
    )
}

export default Banner;