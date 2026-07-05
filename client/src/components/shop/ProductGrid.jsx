import ProductCard from "./ProductCard";

function ProductGrid({ products, handleToast }) {
    return (

        <div className="product-grid">
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                    handleToast={handleToast}
                />
            ))}
        </div>
    )
}

export default ProductGrid;