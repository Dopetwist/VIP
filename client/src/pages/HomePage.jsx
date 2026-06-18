import Banner from "../components/layout/Banner";
import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";
import Footer from "../components/layout/Footer";

function HomePage() {
    
    return (

        <main>
            <Banner />
            <Header />
            <HeroSection />
            <ServiceSection />
            <Footer />
        </main>
    )
}

export default HomePage;