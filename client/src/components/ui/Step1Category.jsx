
export default function Step1Service ({ data, updateBooking }) {

    return (
        <div>

            <h2> Select Service </h2>
                
            <select
                value={data.service}
                onChange={(e) =>
                    updateBooking(
                        "service",
                        e.target.value
                    )
                }
            >
                <option value=""> Choose </option>
                <option value="Hair"> Hair Styling </option>
                <option value="Makeup"> Makeup </option>
            </select>
        </div>
    );
}