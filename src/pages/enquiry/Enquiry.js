import React, { useEffect, useRef, useState } from "react";
import { ENQUIRIES_LIST } from "../property/constants";
import ViewEnquiry from "./ViewEnquiry";

const Enquiry = () => {
  const [viewEnquiry, setViewEnquiry] = useState({ isOpen: false, data: {} });
  const modalRef = useRef(null);

  const handleCloseEnquiry = (ind) => {
    const enquires = structuredClone(ENQUIRIES_LIST);
    enquires.splice(ind, 1);
    //integrate delete api
    console.log("enquires", enquires);
  };

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
                  Name
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Email
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Description
                </th>
                <th scope="col" className="text-center" style={{ width: "25%" }}>
                  <p className="m-0">Actions</p>
                </th>
              </tr>
            </thead>
            <tbody style={{ padding: "0px 10px" }}>
              {ENQUIRIES_LIST.map((x, ind) => (
                <tr key={`${ind + 1}`}>
                  <td scope="row" style={{ width: "10%" }}>
                    {`${ind + 1}`}
                  </td>
                  <td style={{ width: "25%" }}>{x.name}</td>
                  <td style={{ width: "20%" }}>{x.email}</td>
                  <td style={{ width: "20%" }}>{x.description}</td>
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
                        className="btn btn-dark btn-sm"
                        onClick={() => handleCloseEnquiry(ind)}
                      >
                        Close enquiry
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
