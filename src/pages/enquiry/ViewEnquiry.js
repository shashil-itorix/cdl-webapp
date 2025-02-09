import React from "react";

const ViewEnquiry = ({ handleCloseModal, data }) => {
  return (
    <div
      className="modal fade"
      id="viewContainer"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              View Enquiry
            </h5>
          </div>
          <div className="modal-body">
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="validationCustom01" className="me-2 w-25">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      placeholder="Name"
                      value={data.name}
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="validationCustom01" className="me-2 w-25">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      placeholder="Property name"
                      value={data.email}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center">
                    <label htmlFor="validationCustom01" className="me-2 w-25">
                      Description:
                    </label>
                    <textarea
                      rows="4"
                      className="form-control w-75"
                      placeholder="Property name"
                      value={data.description || ""}
                    />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEnquiry;
