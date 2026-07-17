import { Phone } from "lucide-react";
import { SocialIcon } from 'react-social-icons';


function Banner() {
    
    return (

        <main className="banner">
            <div className="tel">
                <Phone size={16} />
                <p>08102770927</p>
            </div>

            <div className="socials">
                <SocialIcon url="https://www.tiktok.com/@realvictoriaokorie?_r=1&_t=ZS-9870CUBFdzk" bgColor="#000" className="social-icon" style={{width: "2rem", height: "2rem"}} label="Our TikTok" target="_blank" />
                <SocialIcon url="https://www.whatsapp.com" bgColor="#000" className="social-icon" style={{width: "2rem", height: "2rem"}} label="Our WhatsApp" target="_blank" />
            </div>
        </main>
    )
}

export default Banner;