import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import PropertyList from "./PropertyList";
import PropertyCard from "./PropertyCard";
import { useLocation, useNavigate, useOutletContext, useParams } from "react-router-dom";
import ContactForm from "./ContactForm";
import { makeApiCall } from "../../api";
import { throwServerError, TYPE_CONSTANTS } from "../../constants";
import { useAuth0 } from "@auth0/auth0-react";

export default function PropertyListingPage() {
  const { isAuthenticated } = useAuth0();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState({
    type: false,
    country: false,
    category: false,
  });

  const [selected, setSelected] = useState({
    type: "All Types",
    country: "All Countries",
    category: "All Category",
  });

  const location = useLocation();
  const [routeName, setRouteName] = useState(location.pathname);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = window.location.pathname;

  const isCommercial = url.includes("/commercial")
  const isResidential = url.includes("/residential")
  const isIndustrial = url.includes("/industrial")

  const propertyTypeMain = isCommercial 
    ? TYPE_CONSTANTS.COMMERCIAL 
    : isResidential 
      ? TYPE_CONSTANTS.RESIDENTIAL
      : isIndustrial
        ? TYPE_CONSTANTS.INDUSTRIAL
        : TYPE_CONSTANTS.GENERAL

  const filterObject = [
    {
      title: "Type",
      key: "type",
      items: ["All Types", "Sale", "Lease"],
    },
    {
      title: "Country",
      key: "country",
      items: [
        "All Countries",
        "Japan",
        "United Kingdom",
        "Singapore",
        "Australia",
        "China",
      ],
    },
    {
      title: "Category",
      key: "category",
      items: [
        "All Category",
        "Affordable Luxury",
        "Luxury",
        "Ultra Luxury",
        "Luxury Executive Condominium",
        "Landed Development",
        "Integrated Development",
        "Mixed Development",
        "Ready to Move-in",
      ],
    },
  ];

  const toggleDropdown = (key) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelect = (key, item) => {
    setSelected((prev) => ({
      ...prev,
      [key]: item,
    }));
    setIsOpen((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  //* Filter properties based on selected filters
  const onFilter = () => {
    let filtered = PropertyList;

    if (routeName) {
      filtered = filtered.filter(
        (property) =>
          property.propertyType.toLowerCase() === routeName.toLowerCase()
      );
    }

    // Type filter
    if (selected.type !== "All Types") {
      filtered = filtered.filter(
        (property) =>
          property.type.toLowerCase() === selected.type.toLowerCase()
      );
    }

    // Country filter
    if (selected.country !== "All Countries") {
      filtered = filtered.filter(
        (property) =>
          property.country.toLowerCase() === selected.country.toLowerCase()
      );
    }

    // Category filter
    if (selected.category !== "All Category") {
      filtered = filtered.filter(
        (property) =>
          property.category.toLowerCase() === selected.category.toLowerCase()
      );
    }

    setFilteredProperties(filtered);
  };

  //* Clear all filters
  const clearAll = () => {
    setSelected({
      type: "All Types",
      country: "All Countries",
      category: "All Category",
    });
    let filtered = PropertyList;

    if (routeName) {
      filtered = filtered.filter(
        (property) =>
          property.propertyType.toLowerCase() === routeName.toLowerCase()
      );
      setFilteredProperties(filtered);
    }
  };

  const getData = () => {
    const url = window.location.pathname;

    const isCommercial = url.includes("/commercial");
    const isResidential = url.includes("/residential");

    const propertyType = isCommercial
      ? "commercial"
      : isResidential
      ? "residential"
      : "industrial";

    setLoading(true);
    makeApiCall("GET", `/${propertyType}/properties`)
      .then((res) => {
        setFilteredProperties(res || []);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throwServerError(err);
      });
  };
  useEffect(() => {
    getData();

    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, location.pathname]);

  return (
    <>
      <div className="container p-5">
        <div
          className="d-flex align-items-center justify-content-end"
          style={{ marginBottom: 20 }}
        >
          <div
            className="d-flex align-items-center breadcrumb-container"
            style={{
              borderLeft: "4px solid #293947",
              padding: "8px 12px",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            {["Home", propertyTypeMain].map((each, ind) => (
              <div className="d-flex align-item-center">
                <p
                  style={{ opacity: each === "Home" ? 0.5 : 1 }}
                  onClick={() => each === "Home" && navigate("/")}
                >
                  {each}
                </p>
                {ind !== 1 && <span className="mx-2">/</span>}
              </div>
            ))}
          </div>
        </div>
        <section className="filter-section">
          <div className="dropdown-list">
            {filterObject.map((el, id) => (
              <div key={id} className="dropdown">
                <div
                  onClick={() => toggleDropdown(el.key)}
                  className="each-dropdown"
                >
                  <p>{selected[el.key]}</p>
                </div>
                {isOpen[el.key] && (
                  <div className="dropdown-content">
                    {el.items.map((item, index) => (
                      <p key={index} onClick={() => handleSelect(el.key, item)}>
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="applyClear" onClick={onFilter}>
              <p>Apply</p>
            </div>
            <div className="applyClear" onClick={clearAll}>
              <p>Clear</p>
            </div>
          </div>
        </section>

        <section className="property-card-section">
          {filteredProperties.length > 0 ? (
            filteredProperties
              .filter(
                (each) => each.propertyType === propertyTypeMain
              )
              .map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))
          ) : (
            <p>No Properties Available</p>
          )}
        </section>
      </div>
      <section className="property-form">
        <ContactForm />
      </section>
    </>
  );
}
