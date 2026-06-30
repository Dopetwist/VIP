
export default function Step1Category ({ data, updateBooking }) {

    const categories = [
        {
            service: "Lashes",
            image: "/images/booking-images/booking-lashes.png"
        },
        {
            service: "Tattoos",
            image: "/images/booking-images/booking-tattoo.png"
        },
        {
            service: "Nails",
            image: "/images/booking-images/booking-nails.png"
        },
        {
            service: "Eyebrows",
            image: "/images/booking-images/booking-eyebrows.png"
        }
    ];

    return (
        <div>

            <div className="choose">

                <h2>Choose Category</h2>

                <div className="category-items-container">

                    {categories.map((category) => (

                        <div
                            key={category.service}

                            className={`category-box ${
                                data.category === category.service
                                    ? "selected"
                                    : ""
                            }`}

                            onClick={() =>
                                updateBooking(
                                    "category",
                                    category.service
                                )
                            }
                        >
                            <figure>
                                <img src={category.image} alt={category.service} />
                            </figure>

                            <p>{category.service}</p>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}