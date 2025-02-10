import React from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";

const Details = () => {
  const location = useLocation();
  const property = location.state?.property;
  console.log(property);
  return (
    <div className="detailsSection container p-5">
      <div className="caraousel-card">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={property?.imagesLinks[0]}
                class="d-block w-100"
                alt="..."
              />
            </div>
            {property?.imagesLinks.map((image, index) => (
              <div class="carousel-item" key={index}>
                <img
                  src={image}
                  class="d-block w-100"
                  alt="property details images"
                />
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="card-details">
        <div className="card-header">
            <h2>{property.name}</h2>
            <p style={{
                fontWeight: "400",
                fontSize: "13px",
            }}>{property.country} • {property.category}</p>
        </div>
        <div className="sale">
            <p>{property.status}</p>
        </div>
        <div>
            <p style={{
                fontWeight: "400",
                fontSize: "13px",
            }}>
            Discover Norwood Grand, a premier ultra-luxury residence in Singapore’s exclusive District 24. This opulent property offers an unmatched living experience with modern architecture, world-class amenities, and prime accessibility. Nestled in a serene and prestigious neighborhood, Norwood Grand exudes sophistication and elegance. Each residence boasts spacious layouts, floor-to-ceiling windows, and high-end finishes.<br/> The development features a state-of-the-art fitness center, infinity pool, and landscaped gardens for relaxation. Residents can enjoy 24/7 concierge services, ensuring a seamless lifestyle. With proximity to top-tier schools, shopping hubs, and fine dining establishments, convenience is at your doorstep. The integration of smart home technology enhances comfort and security. Experience luxury living at its finest with Norwood Grand, where exclusivity meets unparalleled refinement.
            </p>
            <h6 style={{
                fontWeight: "600",
                fontStyle: "italic",
                marginTop: "1rem",
                paddingBottom: "0.3rem",
                borderBottom: "1px solid #8181814d",
            }}>✨ Key Highlights:</h6>
            <ul style={{
                fontWeight: "400",
                fontSize: "13px",
            }}>
                <li>Located in a prestigious and serene neighborhood</li>
                <li>Elegant interiors with premium finishes</li>
                <li>Spacious layout with breathtaking views</li>
                <li>World-class facilities and smart home features</li>
                <li>Excellent connectivity to major roads and amenities</li>
            </ul>
            <p style={{
                fontWeight: "400",
                fontSize: "13px",
            }}> 🔹 Don't miss the chance to own a piece of luxury! Contact us today for more details or to schedule a viewing.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Details;
