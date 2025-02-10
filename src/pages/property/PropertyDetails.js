import React, { useEffect, useRef, useState } from "react";
import { MODE } from "./constants";
import NewPropertyModal from "./NewPropertyModal";
import { useNavigate, useParams } from "react-router-dom";
import { makeApiCall } from "../../api";
import { throwServerError, throwSuccessMessage } from "../../constants";
import { useAuth0 } from "@auth0/auth0-react";

const PropertyDetails = () => {
  const { propertyType } = useParams();
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [newModal, setNewModal] = useState({
    isOpen: false,
    data: {},
    type: MODE.CREATE,
  });

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.hide();
    }
    setNewModal({ isOpen: false, data: {} });
  };

  const getData = () => {
    const url = window.location.pathname;

    const isCommercial = url.includes("/commercial");
    const isResidential = url.includes("/residential");

    const enquiryType = isCommercial
      ? "commercial"
      : isResidential
      ? "residential"
      : "industrial";

    makeApiCall("GET", `/${enquiryType}/properties`)
      .then((res) => {
        setPropertyDetails(res || []);
      })
      .catch((err) => {
        throwServerError(err);
      });
  };

  const handleDeleteProperty = (id) => {
    const url = window.location.pathname;

    const isCommercial = url.includes("/commercial");
    const isResidential = url.includes("/residential");

    const enquiryType = isCommercial
      ? "commercial"
      : isResidential
      ? "residential"
      : "industrial";

    makeApiCall("DELETE", `/${enquiryType}/properties/${id}`)
      .then(() => {
        getData();
        throwSuccessMessage("Deleted successfully");
      })
      .catch((err) => {
        console.log("err", err);
        throwServerError(err);
      });
  };
  useEffect(() => {
    if (newModal.isOpen) {
      const modalElement = document.getElementById("exampleModalCenter");
      modalRef.current = new window.bootstrap.Modal(modalElement);
      modalRef.current.show();
    }
  }, [newModal.isOpen]);

  useEffect(() => {
    getData();
  }, [isAuthenticated]);

  console.log("propertyDetails", propertyDetails);

  return (
    <>
      <div className="container py-5">
        <div
          className="d-flex flex-column py-10"
          style={{
            width: "100%",
            minHeight: "calc(100% - 66px)",
            gap: "10px",
            padding: "20px",
          }}
        >
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
              {["Home", "Property", propertyType.toUpperCase()].map(
                (each, ind) => (
                  <div className="d-flex align-item-center">
                    <p
                      style={{
                        opacity: each === propertyType.toUpperCase() ? 1 : 0.5,
                      }}
                      onClick={() =>
                        each !== propertyType.toUpperCase() && navigate("/")
                      }
                    >
                      {each}
                    </p>
                    {ind !== 2 && <span className="mx-2">/</span>}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={() =>
                setNewModal({ isOpen: true, data: {}, type: MODE.CREATE })
              }
            >
              Add new property
            </button>
          </div>

          <table
            className="table table-striped"
            style={{ tableLayout: "fixed", width: "100%" }}
          >
            <thead style={{ padding: "0px 10px" }}>
              <tr>
                <th scope="col" style={{ width: "10%" }}>
                  S.No
                </th>
                <th scope="col" style={{ width: "25%" }}>
                  Property Name
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Type
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Status
                </th>
                <th
                  scope="col"
                  className="text-center"
                  style={{ width: "25%" }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody style={{ padding: "0px 10px" }}>
              {propertyDetails
                .filter(
                  (each) => each.propertyType === propertyType.toUpperCase()
                )
                .map((x, ind) => (
                  <tr key={`${ind + 1}`}>
                    <td scope="row" style={{ width: "10%" }}>
                      {`${ind + 1}`}
                    </td>
                    <td style={{ width: "25%" }}>{x.name}</td>
                    <td style={{ width: "20%" }}>
                      {x.type === "SALE" ? "Sale" : "Lease"}
                    </td>
                    <td style={{ width: "20%" }}>
                      {x.status === "in progress" ? "In Progress" : "For Sale"}
                    </td>
                    <td className="text-center" style={{ width: "25%" }}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          onClick={() =>
                            setNewModal({
                              isOpen: true,
                              data: x,
                              type: MODE.EDIT,
                            })
                          }
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark btn-sm"
                          onClick={() => handleDeleteProperty(x.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {newModal.isOpen ? (
        <NewPropertyModal
          handleCloseModal={handleCloseModal}
          type={newModal.type}
          data={newModal.data}
          cb={() => {
            handleCloseModal();
            getData();
          }}
        />
      ) : null}
    </>
  );
};

export default PropertyDetails;
