import React, { useEffect, useState } from "react";
import "./style.scss";
import PropertyList from "./PropertyList";
import PropertyCard from "./PropertyCard";
import { useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function PropertyListingPage() {
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
  const [filteredProperties, setFilteredProperties] = useState(PropertyList);

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
        (property) => property.propertyType.toLowerCase() === routeName.toLowerCase()
      );
    }


    // Type filter
    if (selected.type !== "All Types") {
      filtered = filtered.filter(
        (property) => property.type.toLowerCase() === selected.type.toLowerCase()
      );
    }

    // Country filter
    if (selected.country !== "All Countries") {
      filtered = filtered.filter(
        (property) => property.country.toLowerCase() === selected.country.toLowerCase()
      );
    }

    // Category filter
    if (selected.category !== "All Category") {
      filtered = filtered.filter(
        (property) => property.category.toLowerCase() === selected.category.toLowerCase()
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
        (property) => property.propertyType.toLowerCase() === routeName.toLowerCase()
      );
      setFilteredProperties(filtered);
    }
    // setFilteredProperties(PropertyList);
  };

  useEffect(() => {
    if (location.pathname === "/residential") {
      setRouteName("Residential");
    } else if (location.pathname === "/commercial") {
      setRouteName("Commercial");
    } else {
      setRouteName("Industrial");
    }

    // based on pathname filtering properties
    if (routeName) {
      const filter =  PropertyList.filter(
        (property) => property.propertyType.toLowerCase() === location.pathname.split("/")[1].toLowerCase()
      );

      setFilteredProperties(filter);
    }
  

  }, [location.pathname]);

  return (
    <>
      <div className="container p-5">
        <nav className="navbar">
          <div />
          <div className="nav-section-custom">
            <p style={{ textAlign: "right" }}>
              Home / <span>{routeName} Property</span>
            </p>
            <h1>{routeName} Property</h1>
          </div>
        </nav>
        <section className="filter-section">
          <div className="dropdown-list">
            {filterObject.map((el, id) => (
              <div key={id} className="dropdown">
                <div onClick={() => toggleDropdown(el.key)} className="each-dropdown">
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
            filteredProperties.map((property, index) => (
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
