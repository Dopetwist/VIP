import Rating from "../ui/Rating";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

function ProductCard({ product, handleToast }) {
    const { cartItems, addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    // Function to check if product is already in cart
    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    }

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
                    className={isInCart(product.id) ? "product-btn-added" : ""}
                    onClick={() => {
                        handleAddToCart();
                        handleToast();
                    }}
                >
                    {isInCart(product.id) ? "✔ In Cart" : "Add to cart"}
                </button>
            </div>
        </div>
    )
}

export default ProductCard;