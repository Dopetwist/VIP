import { useState } from "react";
import ProductGrid from "../components/shop/ProductGrid";

function ShopPage({ filteredProducts }) {
    const [ sortOption, setSortOption ] = useState("featured");

    // Sort products based on selected option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "low-high") {
        return a.price - b.price;
        }

        if (sortOption === "high-low") {
        return b.price - a.price;
        }

        if (sortOption === "highest-rated") {
        return b.reviews - a.reviews;
        }

        if (sortOption === "featured") {
        return new Date(b.createdAt) - new Date(a.createdAt);
        }

        return 0;
    });
    
    return (

        <div className="shop-page">
            <div className="page-header">
                <h2>Hair Care Products</h2>
                <p>Premium professional-grade hair care products for salon-quality results at home</p>
            </div>

            <div className="sort">
                <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="featured">Featured</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                    <option value="highest-rated">Highest rated</option>
                </select>
            </div>

            <ProductGrid 
                products={sortedProducts}
            />
        </div>
    )
}

export default ShopPage;