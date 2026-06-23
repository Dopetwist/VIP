
function GalleryCard ({ work }) {
    return (
        <div className="gallery-card">
            <figure>
                <img src={work.image} alt={work.name} />
            </figure>

            <div className="work-details">
                <span>{work.category}</span>

                <h3>{work.name}</h3>

                <p>{work.description}</p>
            </div>
        </div>
    )
}

export default GalleryCard;