import { Phone } from "lucide-react";
import { SocialIcon } from 'react-social-icons';


function Banner() {

    const isMobile = window.innerWidth >= 480 && window.innerWidth <= 768;

    const width = isMobile ? "2.5rem" : "2rem";
    const height = isMobile ? "2.5rem" : "2rem";
    
    return (

        <main className="banner">
            <div className="tel">
                <Phone size={isMobile ? 22 : 16} />
                <p>08102770927</p>
            </div>

            <div className="socials">
                <SocialIcon url="https://www.tiktok.com/@realvictoriaokorie?_r=1&_t=ZS-9870CUBFdzk" bgColor="#000" className="social-icon" style={{width: width, height: height}} label="Our TikTok" target="_blank" />
                <SocialIcon url="https://www.whatsapp.com" bgColor="#000" className="social-icon" style={{width: width, height: height}} label="Our WhatsApp" target="_blank" />
            </div>
        </main>
    )
}

export default Banner;