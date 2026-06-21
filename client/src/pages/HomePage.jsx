import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";
import Footer from "../components/layout/Footer";
import WhyChoose from "../components/home/WhyChoose";
import BookingSteps from "../components/home/BookingSteps";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BeforeAfter from "../components/ui/BeforeAfter";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

function HomePage() {
    
    return (

        <main>
            <Header />
            <HeroSection />
            <ServiceSection />
            <WhyChoose />
            <BookingSteps />
            <FeaturedProducts />
            <BeforeAfter />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    )
}

export default HomePage;