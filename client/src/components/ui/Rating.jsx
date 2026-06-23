function Rating({ product }) {
    return (
        <div className="rating">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="collection-star">
                {i < product.rating ? "★" : "☆"}
                </span>
            ))}
            
            <span className="reviews">({product.reviews})</span>
        </div>
    )
}

export default Rating;