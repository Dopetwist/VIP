import Rating from "../ui/Rating";

function ProductCard({ product }) {
    
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

                <button>View Details</button>
            </div>
        </div>
    )
}

export default ProductCard;