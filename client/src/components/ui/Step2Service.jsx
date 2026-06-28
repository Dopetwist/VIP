import { Clock } from "lucide-react";
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
              <p className="service-name">{service.name}</p>
              <span>
                <p className="service-price">${service.price}</p>
              </span>

              <p className="service-description">{service.description}</p>

              <p className="service-time"><Clock size={16} />{service.time} minutes</p>
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