/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
    const { loginWithRedirect } = useAuth0();
    const { isAuthenticated, getIdTokenClaims } = useAuth0();

    const { logout } = useAuth0();

    const handleGetIdToken = async () => {
        if (isAuthenticated) {
          const idTokenClaims = await getIdTokenClaims();
          const idToken = idTokenClaims.__raw; // Raw ID token
          localStorage.setItem("accessToken", idToken);
        }
    };

    useEffect(() => {
        handleGetIdToken()
    }, [isAuthenticated])
    

    return (
        <div className="w-100 bg-dark">
            <div className="container p-2 d-flex align-items-center justify-content-between">
              <div style={{ cursor: "pointer" }} onClick={() => window.location.href = "/"}>
                <img src='https://cdl.com.sg/assets/img/home/CDL-Logo_dark-bkg.png' height={50} />
              </div>

                <div className="d-flex align-items-center" style={{ gap: 32 }}>
                    <a href='/residential'>Residential</a>
                    <a href='/commercial'>Commercial</a>
                    <a href='/industrial'>Industrial</a>
                    { isAuthenticated
                        ? <>
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Property
                          </a>

                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="/admin/commercial/listings">
                                Commercial
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/admin/residential/listings">
                                Residential
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/admin/industrial/listings">
                                Industrial
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Enquiry
                          </a>

                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="/admin/commercial/enquiries">
                                Commercial
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/admin/residential/enquiries">
                                Residential
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/admin/industrial/enquiries">
                                Industrial
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="font-primary fw-bold" style={{ cursor: "pointer" }}>Logout</p>
                        </>
                        : <p onClick={() => loginWithRedirect()} className="font-primary fw-bold" style={{ cursor: "pointer" }}>Login</p>
                    }
                </div>
            </div>
      </div>
  );
}
