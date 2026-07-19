import { useEffect } from "react";
import { revealRight } from "../../utils/reveal";

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        quote: "Absolutely love my lashes! The technician was so skilled and the studio is immaculate. Will definitely be back!",
        service: "Volume Lash Extensions"
    },
    {
        id: 2,
        name: "Emily Chen",
        quote: "Best decision ever! My eyebrows look so natural and perfect. The artist really understood what I wanted",
        service: "Microblading"
    },
    {
        id: 3,
        name: "Jessica Adams",
        quote: "The attention to detail is incredible. My tattoos are a work of art! Highly recommend VIP",
        service: "Tattoo"
    },
    {
        id: 4,
        name: "Chidimma Eze",
        quote: "The most luxurious lash appointment I've ever had. Truly a private atelier experience.",
        service: "Lash Lift & Tint"
    }
]

function Testimonials() {

    useEffect(() => {
        revealRight(".testimonial-container");
    }, []);
    
    return (

        <section className="testimonial-section">
            <main>
                <div className="service-header">
                    <span className="section-span">06 - Testimonials</span>
                    <h2 className="in-their-words">In Their Words</h2>
                </div>

                <div className="testimonial-container">
                    {testimonials.map((client) => (
                        <div key={client.id} className="testimonial-card">
                            <span>★★★★★</span>

                            <p className="quote">"{client.quote}"</p>

                            <p className="client-name">{client.name}</p>
                            <p className="client-service">{client.service}</p>
                        </div>
                        )
                    )}
                </div>
            </main>
        </section>
    )
}

export default Testimonials;