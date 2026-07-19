import { useLocation } from "react-router";

function BeforeAfter() {

    const location = useLocation();
    
    return (

        <section className={location.pathname === "/gallery" ? "gallery-page-before-after" : ""}>
            <main className={location.pathname === "/gallery" ? "before-after-section" : ""}>
                <div className="service-header">
                    {location.pathname === "/" && <span className="section-span">05 - The Gallery</span>}

                    <h2>Before & After</h2>
                    <p>See the stunning transformations our expert team creates</p>
                </div>

                <div className="before-after-container">
                    <div className="before-after-card">
                        <figure className="before-figure">
                            <img src="/images/before-after/tattoo-before1.png" alt="Before Image" />
                            <div className="before">Before</div>
                        </figure>
                        <figure className="after-figure">
                            <img src="/images/before-after/tattoo-after1.png" alt="After Image" />
                            <div className="after">After</div>
                        </figure>
                    </div>

                    <div className="before-after-card">
                        <figure className="before-figure">
                            <img src="/images/before-after/lash-before.png" alt="Before Image" />
                            <div className="before">Before</div>
                        </figure>
                        <figure className="after-figure">
                            <img src="/images/before-after/lash-after.png" alt="After Image" />
                            <div className="after">After</div>
                        </figure>
                    </div>

                    <div className="before-after-card">
                        <figure className="before-figure">
                            <img src="/images/before-after/nail-before.png" alt="Before Image" />
                            <div className="before">Before</div>
                        </figure>
                        <figure className="after-figure">
                            <img src="/images/before-after/nail-after.png" alt="After Image" />
                            <div className="after">After</div>
                        </figure>
                    </div>

                    <div className="before-after-card">
                        <figure className="before-figure">
                            <img src="/images/before-after/tattoo-before2.png" alt="Before Image" />
                            <div className="before">Before</div>
                        </figure>
                        <figure className="after-figure">
                            <img src="/images/before-after/tattoo-after2.png" alt="After Image" />
                            <div className="after">After</div>
                        </figure>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default BeforeAfter;