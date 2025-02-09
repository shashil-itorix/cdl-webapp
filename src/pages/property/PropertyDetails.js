import React, { useEffect, useRef, useState } from "react";
import { MODE, PROPERTIES_LIST } from "./constants";
import NewPropertyModal from "./NewPropertyModal";
import { useNavigate, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { propertyType } = useParams();
  const navigate = useNavigate();
  const modalRef = useRef(null);
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
  useEffect(() => {
    if (newModal.isOpen) {
      const modalElement = document.getElementById("exampleModalCenter");
      modalRef.current = new window.bootstrap.Modal(modalElement);
      modalRef.current.show();
    }
  }, [newModal.isOpen]);

  return (
    <>
      <div
        className="d-flex flex-column py-10"
        style={{
          width: "100vw",
          height: "calc(100% - 66px)",
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
            {["Home", propertyType.toUpperCase()].map((each, ind) => (
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
              <th scope="col" className="text-center" style={{ width: "25%" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody style={{ padding: "0px 10px" }}>
            {PROPERTIES_LIST.filter(
              (each) => each.propertyType === propertyType
            ).map((x, ind) => (
              <tr key={`${ind + 1}`}>
                <td scope="row" style={{ width: "10%" }}>
                  {`${ind + 1}`}
                </td>
                <td style={{ width: "25%" }}>{x.name}</td>
                <td style={{ width: "20%" }}>{x.type}</td>
                <td style={{ width: "20%" }}>{x.status}</td>
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
                    <button type="button" className="btn btn-dark btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {newModal.isOpen ? (
        <NewPropertyModal
          handleCloseModal={handleCloseModal}
          type={newModal.type}
          data={newModal.data}
        />
      ) : null}
    </>
  );
};

export default PropertyDetails;
