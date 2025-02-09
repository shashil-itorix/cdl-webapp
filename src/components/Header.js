import React from "react";

export default function Header() {
  return (
    <div className="w-100 bg-dark">
      <div className="container p-2 d-flex align-items-center justify-content-between">
        <img
          src="https://cdl.com.sg/assets/img/home/CDL-Logo_dark-bkg.png"
          height={50}
        />

        <div className="d-flex align-items-center" style={{ gap: 32 }}>
          <a href="/residential">Residential</a>
          <a href="/commercial">Commercial</a>
          <a href="/industrial">Industrial</a>
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Property
            </a>

            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/commercial/listings">
                  Commercial
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/residential/listings">
                  Residential
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/industrial/listings">
                  Industrial
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Enquiry
            </a>

            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/commercial/enquiries">
                  Commercial
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/residential/enquiries">
                  Residential
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/industrial/enquiries">
                  Industrial
                </a>
              </li>
            </ul>
          </div>
          <a href="/login" className="font-primary fw-bold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
