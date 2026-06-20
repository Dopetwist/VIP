import Banner from "../components/layout/Banner";
import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";
import Footer from "../components/layout/Footer";
import WhyChoose from "../components/home/WhyChoose";
import BookingSteps from "../components/home/BookingSteps";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BeforeAfter from "../components/ui/BeforeAfter";

function HomePage() {
    
    return (

        <main>
            <Banner />
            <Header />
            <HeroSection />
            <ServiceSection />
            <WhyChoose />
            <BookingSteps />
            <FeaturedProducts />
            <BeforeAfter />
            <Footer />
        </main>
    )
}

export default HomePage;