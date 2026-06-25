function ContactPage() {
    return (
        <section className="contact-page">
            <div className="contact-header">
                <span className="section-span">Contact</span>
                <h2>Send a message or visit our studio</h2>
                <p>
                    Whether you have a question, want to book a service, or need support,
                    our team is ready to help. Use the form or the contact information
                    below to reach out.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-card contact-form-card">
                    <h3>Contact Form</h3>
                    <form className="contact-form">
                        <div className="contact-field">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Your full name" />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="you@example.com" />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" type="tel" placeholder="(123) 456-7890" />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <button type="submit" className="contact-button">
                            Send Message
                        </button>
                    </form>
                </div>

                <aside className="contact-card contact-info-card">
                    <h3>Contact Information</h3>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p className="contact-detail-title">Location</p>
                            <p className="contact-detail-text">
                                123 Luxury Avenue, Suite 200<br />Los Angeles, CA 90017
                            </p>
                        </div>

                        <div className="contact-detail">
                            <p className="contact-detail-title">Phone</p>
                            <p className="contact-detail-text">
                                Main: (310) 555-0147<br />Appointments: (310) 555-0199
                            </p>
                        </div>

                        <div className="contact-detail">
                            <p className="contact-detail-title">Email</p>
                            <p className="contact-detail-text">
                                hello@vipstudio.com<br />support@vipstudio.com
                            </p>
                        </div>

                        <div className="contact-detail">
                            <p className="contact-detail-title">Working Hours</p>
                            <p className="contact-detail-text">
                                Monday - Friday: 9:00 AM - 7:00 PM<br />Saturday: 10:00 AM - 4:00 PM
                            </p>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="contact-map-card">
                <h3>Find us on the map</h3>
                <div className="contact-map">
                    <iframe
                        title="VIP Studio location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.051558958358!2d-118.26765578478285!3d34.050536280615664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7a68f6f4c7b%3A0x4555846e05c284ac!2sLos%20Angeles%2C%20CA%2090017!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactPage;