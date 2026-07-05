import { useState } from "react";
import { CircleCheck } from "lucide-react";
import ProductGrid from "../components/shop/ProductGrid";
import Toast from "../components/animation/Toast";

function ShopPage({ filteredProducts }) {
    const [ sortOption, setSortOption ] = useState("featured");

    const [ toast, setToast ] = useState(null);
    
    const handleToast = () => {
        setToast({
            message: <span className="circle-check"><CircleCheck className="circle-icon" /> Cart successfully updated!</span>,
            type: "success"
        })
    }

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
                handleToast={handleToast}
            />

            {/* Render Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    )
}

export default ShopPage;