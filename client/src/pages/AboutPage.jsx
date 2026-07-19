import { useEffect } from "react";
import { revealBottom } from "../utils/reveal";
import Certified from "../components/ui/Certified";
import OurValues from "../components/ui/OurValues";


function AboutPage() {

    useEffect(() => {
        revealBottom(".our-story");
    }, []);
    
    return (

        <div className="about-page">
            <div className="page-header">
                <h2>About VIP Beauty Studio</h2>
                <p>Where luxury meets expertise in beauty services</p>
            </div>

            <div className="our-story">
                <h3 className="about-sub-header">Our Story</h3>

                <p>
                    Founded in 2020, VIP Beauty Studio has become the premier destination for luxury beauty services in Lagos State, Nigeria. Our passion for enhancing natural beauty through expertly delivered treatments has made us a trusted name among beauty enthusiasts. <br /><br />
                    We specialize in eye lashes, tattoos, and nail artistry. Our certified professionals are dedicated to delivering exceptional results. Every service is performed with meticulous attention to detail in our state-of-the-art, hygienic studio. <br /><br />
                    At VIP Beauty Studio, we believe that everyone deserves to feel confident and beautiful. That's why we use only premium products and the latest techniques to ensure your experience is nothing short of extraordinary. <br /><br />
                </p>
            </div>

            <OurValues />
            <Certified />
        </div>
    )
}

export default AboutPage;