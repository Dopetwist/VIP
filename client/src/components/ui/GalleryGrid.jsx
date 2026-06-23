import GalleryCard from "./GalleryCard";

function GalleryGrid ({ works }) {
    return (
        <div className="gallery-grid">
            {works.map((work) => (
                <GalleryCard 
                    key={work.id}
                    work={work}
                />
            ))}
        </div>
    )
}

export default GalleryGrid;