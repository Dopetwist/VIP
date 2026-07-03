import Rating from "../ui/Rating";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

function ProductCard({ product }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        
        // Reset button state after 1.5 seconds
        setTimeout(() => {
            setIsAdded(false);
        }, 1500);
    };

    return (

        <div>
            <div className="product-card">
                <figure>
                    <img src={product.image} alt={product.name} />
                </figure>

                <div className="product-details">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>

                    <p className="product-descrip">{product.description}</p>

                    <Rating product={product} />

                    <p className="shop-product-price">${product.price.toFixed(2)}</p>
                </div>

                <button 
                    className={isAdded ? "product-btn-added" : ""}
                    onClick={handleAddToCart}
                >
                    {isAdded ? "✓ Added to Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    )
}

export default ProductCard;