import services from "../../data/services";

function Step2Service({ data, updateBooking }) {

  const filteredServices = services.filter(
    (service) => service.category === data?.category
  );

  return (
    <div className="choose">
      <h2>Choose Your Service</h2>

      <div className="filtered-services-container">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div 
            key={service.id} 
            className={`service-box ${
              data.service === service.name
              ? "selected"
              : ""
            }`}
            onClick={() =>
              updateBooking(
                "service",
                service.name
              )
            }
            >
              <p>{service.name}</p>
              <span>
                <p>${service.price}</p>
              </span>

              <p>{service.description}</p>

              <p>{service.time}</p>
            </div>
          ))
        ) : (
          <p>No service found in this category!</p>
        )}
      </div>
    </div>
  );
}

export default Step2Service;