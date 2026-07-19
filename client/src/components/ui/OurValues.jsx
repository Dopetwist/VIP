import { useEffect } from "react";
import { revealCards } from "../../utils/reveal";
import { Award, Heart, Shield, Users } from "lucide-react";


function OurValues() {

    useEffect(() => {
        revealCards(".value-card");
    }, []);
    
    return (

        <div>
            <div className="our-values">
                <h3 className="about-sub-header">Our Values</h3>

                <div className="values-container">
                    <div className="value-card">
                        <div className="value-icon-box">
                            <Award size={40} className="value-icon" />
                        </div>
                        <p className="card-name">Excellence</p>
                        <p className="card-text">We strive for perfection in every service we provide</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-box">
                            <Heart size={40} className="value-icon" />
                        </div>
                        <p className="card-name">Care</p>
                        <p className="card-text">Your comfort and satisfaction are our top priorities</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-box">
                            <Shield size={40} className="value-icon" />
                        </div>
                        <p className="card-name">Safety</p>
                        <p className="card-text">We maintain the highest hygiene and safety standards</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon-box">
                            <Users size={40} className="value-icon" />
                        </div>
                        <p className="card-name">Community</p>
                        <p className="card-text">Building lasting relationships with our clients</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValues;