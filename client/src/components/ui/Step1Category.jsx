
export default function Step1Category ({ data, updateBooking }) {

    const categories = [
        "Lashes",
        "Tattoos",
        "Nails",
        "Eyebrows"
    ];

    return (
        <div>

            <div className="choose">

                <h2>Choose Category</h2>

                <div className="category-items-container">

                    {categories.map((category) => (

                        <div
                            key={category}

                            className={`category-box ${
                                data.category === category
                                    ? "selected"
                                    : ""
                            }`}

                            onClick={() =>
                                updateBooking(
                                    "category",
                                    category
                                )
                            }
                        >

                            <p>{category}</p>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}