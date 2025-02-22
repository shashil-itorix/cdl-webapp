import React, { useEffect, useRef, useState } from "react";
import ViewEnquiry from "./ViewEnquiry";
import { makeApiCall } from "../../api";
import { throwServerError } from "../../constants";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";

const Enquiry = () => {
  const navigate = useNavigate();
  const { propertyType } = useParams();
  const [viewEnquiry, setViewEnquiry] = useState({ isOpen: false, data: {} });
  const { isAuthenticated } = useAuth0();
  const modalRef = useRef(null);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.hide();
    }
    setViewEnquiry({ isOpen: false, data: {} });
  };

  useEffect(() => {
    if (viewEnquiry.isOpen) {
      const modalElement = document.getElementById("viewContainer");
      modalRef.current = new window.bootstrap.Modal(modalElement);
      modalRef.current.show();
    }
  }, [viewEnquiry.isOpen]);

  const handleCloseEnquiry = (id) => {
    const url = window.location.pathname;

    const isCommercial = url.includes("/commercial");
    const isResidential = url.includes("/residential");

    const enquiryType = isCommercial
      ? "commercial"
      : isResidential
      ? "residential"
      : "industrial";

    makeApiCall("DELETE", `/${enquiryType}/enquiries/${id}`)
    .then(() => {
      getData()
    }).catch((err) => {
      throwServerError(err);
    })
  }

  const getData = () => {
    const url = window.location.pathname;

    const isCommercial = url.includes("/commercial");
    const isResidential = url.includes("/residential");

    const enquiryType = isCommercial
      ? "commercial"
      : isResidential
      ? "residential"
      : "industrial";

    setLoading(true);
    makeApiCall("GET", `/${enquiryType}/enquiries`)
      .then((res) => {
        setEnquiries(res || []);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throwServerError(err);
      });
  };

  useEffect(() => {
    getData();
  }, [isAuthenticated]);

  return (
    <>
      <div className="container py-5">
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            height: "fit-content",
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
              {["Home", "Enquiry", propertyType.toUpperCase()].map(
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
          {loading ? (
            <Loader />
          ) : (
            <table
              className="table table-striped"
              style={{ tableLayout: "fixed", width: "100%" }}
            >
              <thead style={{ padding: "0px 10px" }}>
                <tr>
                  <th scope="col" style={{ width: "10%" }}>
                    S.No
                  </th>
                  <th scope="col" style={{ width: "40%" }}>
                    Name
                  </th>
                  <th scope="col" style={{ width: "25%" }}>
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-center"
                    style={{ width: "25%" }}
                  >
                    <p className="m-0">Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody style={{ padding: "0px 10px" }}>
                {enquiries.map((x, ind) => (
                  <tr key={`${ind + 1}`}>
                    <td scope="row" style={{ width: "10%" }}>
                      {`${ind + 1}`}
                    </td>
                    <td style={{ width: "40%" }}>{x.name}</td>
                    <td style={{ width: "25%" }}>{x.email}</td>
                    <td className="text-center" style={{ width: "25%" }}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          onClick={() =>
                            setViewEnquiry({
                              isOpen: true,
                              data: x,
                            })
                          }
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => handleCloseEnquiry(x.id)}
                        >
                          Close enquiry
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {viewEnquiry.isOpen ? (
        <ViewEnquiry
          data={viewEnquiry.data}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </>
  );
};

export default Enquiry;
