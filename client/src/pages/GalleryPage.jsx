import { useState } from "react";
import works from "../data/gallery";
import GalleryGrid from "../components/ui/GalleryGrid";
import BeforeAfter from "../components/ui/BeforeAfter";

function GalleryPage() {

    const [ activeTab, setActiveTab ] = useState("All");

    const filteredWorks =
        activeTab === "All"
            ? works
            : works.filter(work => work.category === activeTab);

    const serviceList = [
        "Lashes",
        "Tattoos",
        "Nails",
        "Eyebrows"
    ]
    
    return (

        <div className="gallery-page">
            <div className="page-header">
                <h2>Our Gallery</h2>
                <p>Explore our portfolio of beautiful transformations and artistic work</p>
            </div>

            <div className="services-tab-container">
                <div className="services-tab">
                    <button 
                    className={`service-tab-item ${activeTab === "All" ? "active" : ""}`}
                    onClick={() => setActiveTab("All")}
                    >
                        All Works
                    </button>

                    {serviceList.map((service, index) => (
                        <button 
                        className={`service-tab-item ${activeTab === service ? "active" : ""}`}
                        key={index + 1}
                        onClick={() => setActiveTab(service)}
                        >
                            {service}
                        </button>
                    ))}
                </div>
            </div>

            {filteredWorks.length === 0 ? (
                    <div className="no-works">
                        <p>No Work in this category yet!</p>
                    </div>
                ) : (
                        
                    <GalleryGrid 
                        works={filteredWorks}
                    />
                        
                )
            }

            <BeforeAfter />
        </div>
    )
}

export default GalleryPage;