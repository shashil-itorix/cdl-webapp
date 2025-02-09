import React, { useEffect, useState } from "react";
import {
  CATEGORY_OPTIONS,
  MODE,
  PROPERTY_STATUS,
  TYPE_OPTION,
} from "./constants";

const NewPropertyModal = ({ handleCloseModal, data, type }) => {
  const [propertyDetails, setPropertyDetails] = useState({
    id: "",
    type: "",
    name: "",
    country: "",
    category: "",
    status: "",
    fullLocation: "",
    imagesLinks: [],
  });

  const handleOnChange = (key, value) => {
    setPropertyDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageLinkChange = (index, value) => {
    const updatedLinks = [...propertyDetails.imagesLinks];
    updatedLinks[index] = value;
    setPropertyDetails((prev) => ({ ...prev, imagesLinks: updatedLinks }));
  };

  const addImageLink = () => {
    setPropertyDetails((prev) => ({
      ...prev,
      imagesLinks: Array.isArray(prev.imagesLinks)
        ? [...prev.imagesLinks, ""]
        : [""],
    }));
  };

  const removeImageLink = (index) => {
    const updatedLinks = propertyDetails.imagesLinks.filter(
      (summa, i) => i !== index
    );
    setPropertyDetails((prev) => ({ ...prev, imagesLinks: updatedLinks }));
  };
  const handleSave = () => {
    console.log("propertyDetails", propertyDetails);
    //API call for save
    // handleCloseModal();
  };
  useEffect(() => {
    setPropertyDetails(data);
  }, [data]);
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {type === MODE.CREATE ? "Create Property" : "Edit Property"}
            </h5>
          </div>
          <div className="modal-body">
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="validationCustom01" className="me-2 w-25">
                      Property Name:
                    </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      placeholder="Property name"
                      value={propertyDetails.name}
                      required
                      onChange={(e) => handleOnChange("name", e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="validationCustom01" className="me-2 w-25">
                      Country:
                    </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      placeholder="Property name"
                      value={propertyDetails.country}
                      required
                      onChange={(e) =>
                        handleOnChange("country", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="validationCustom01" className="me-2 w-25">
                      Full Location:
                    </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      placeholder="Property name"
                      value={propertyDetails.fullLocation}
                      required
                      onChange={(e) =>
                        handleOnChange("fullLocation", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="propertyType" className="me-2 w-25">
                      Property Type:
                    </label>
                    <select
                      id="propertyType"
                      className="form-select w-75"
                      value={propertyDetails.type}
                      onChange={(e) => handleOnChange("type", e.target.value)}
                    >
                      <option value="" disabled>
                        Select Property Type
                      </option>
                      {TYPE_OPTION.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="propertyType" className="me-2 w-25">
                      Property Status:
                    </label>
                    <select
                      id="propertyStatus"
                      className="form-select w-75"
                      value={propertyDetails.status}
                      onChange={(e) => handleOnChange("status", e.target.value)}
                    >
                      <option value="" disabled>
                        Select Property Status
                      </option>
                      {PROPERTY_STATUS.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="propertyType" className="me-2 w-25">
                      Property category:
                    </label>
                    <select
                      id="propetyCategory"
                      className="form-select w-75"
                      value={propertyDetails.category}
                      onChange={(e) =>
                        handleOnChange("category", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select Property Category
                      </option>
                      {CATEGORY_OPTIONS.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="mt-3">
                      <label style={{ marginRight: 8 }}>Image Links:</label>
                      {propertyDetails.imagesLinks &&
                        propertyDetails.imagesLinks.length &&
                        propertyDetails.imagesLinks.map((link, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center mb-2"
                          >
                            <input
                              type="text"
                              className="form-control"
                              value={link}
                              onChange={(e) =>
                                handleImageLinkChange(index, e.target.value)
                              }
                              placeholder="Enter image URL"
                            />
                            <button
                              type="button"
                              className="btn btn-light btn-sm ms-2"
                              onClick={() => removeImageLink(index)}
                            >
                              ❌
                            </button>
                          </div>
                        ))}

                      <button
                        type="button"
                        className="btn btn-secondary btn-sm mt-2"
                        onClick={addImageLink}
                      >
                        ➕ Add Image Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPropertyModal;
