import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
    
    return (

        <div className="product-grid">
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                />
            ))}
        </div>
    )
}

export default ProductGrid;