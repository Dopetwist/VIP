import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";
import WhyChoose from "../components/home/WhyChoose";
import BookingSteps from "../components/home/BookingSteps";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BeforeAfter from "../components/ui/BeforeAfter";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

function HomePage() {
    
    return (

        <main>
            <HeroSection />
            <ServiceSection />
            <WhyChoose />
            <BookingSteps />
            <FeaturedProducts />
            <BeforeAfter />
            <Testimonials />
            <CTA />
        </main>
    )
}

export default HomePage;