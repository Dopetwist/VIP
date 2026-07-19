import { useEffect } from "react";
import {  HashLink } from "react-router-hash-link";
import { ArrowRight } from "lucide-react";
import { revealCards } from "../../utils/reveal";

function FeaturedProducts() {

    useEffect(() => {
      revealCards(".featured-card");
    }, []);
    
    return (

        <section className="featured-section">
            <main>
                <div className="service-header">
                    <span className="section-span">04 - The Boutique</span>
                    <h2>Featured Products</h2>
                    <p>Professional-grade products for your beauty routine</p>
                </div>

                <div className="featured-container">
                    <div className="featured-card">
                        <figure>
                            <img src="/images/products/product-oil.jpg" alt="Silk Elixir Oil" />
                        </figure>
                        <h3>Silk Elixir Oil</h3>
                        <p className="product-price">$48.00</p>
                        <p className="product-rating"><span>★</span> 4.9</p>

                        <button>Add to Cart</button>
                    </div>

                    <div className="featured-card">
                        <figure>
                            <img src="/images/products/product-serum.jpg" alt="Lash Growth Serum" />
                        </figure>
                        <h3>Lash Growth Serum</h3>
                        <p className="product-price">$35.00</p>
                        <p className="product-rating"><span>★</span> 4.8</p>

                        <button>Add to Cart</button>
                    </div>

                    <div className="featured-card">
                        <figure>
                            <img src="/images/products/product-mask.jpg" alt="Hydration Mask" />
                        </figure>
                        <h3>Hydration Mask</h3>
                        <p className="product-price">$62.00</p>
                        <p className="product-rating"><span>★</span> 5.0</p>

                        <button>Add to Cart</button>
                    </div>

                    <div className="featured-card">
                        <figure>
                            <img src="/images/products/product-mist.jpg" alt="Volumizing Mist" />
                        </figure>
                        <h3>Volumizing Mist</h3>
                        <p className="product-price">$41.00</p>
                        <p className="product-rating"><span>★</span> 4.7</p>

                        <button>Add to Cart</button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default FeaturedProducts;