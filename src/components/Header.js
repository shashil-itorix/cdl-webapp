import { Link } from 'react-router-dom'
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
        <div style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }} className="w-100 bg-dark">
            <div className="container p-2 d-flex align-items-center justify-content-between">
              <div style={{ cursor: "pointer" }} onClick={() => window.location.href = "/"}>
                <img src='https://cdl.com.sg/assets/img/home/CDL-Logo_dark-bkg.png' height={50} />
              </div>

                <div className="d-flex align-items-center" style={{ gap: 32 }}>
                    <Link to='/residential'>Residential</Link>
                    <Link to='/commercial'>Commercial</Link>
                    <Link to='/industrial'>Industrial</Link>
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
                        <p onClick={() => {
                          try {
                            localStorage.removeItem("accessToken")
                          } catch (error) {
                            console.log('error', error);
                          }
                          logout({ logoutParams: { returnTo: window.location.origin } })
                        }} className="font-primary fw-bold" style={{ cursor: "pointer" }}>Logout</p>
                        </>
                        : <p onClick={() => loginWithRedirect()} className="font-primary fw-bold" style={{ cursor: "pointer" }}>Login</p>
                    }
                </div>
            </div>
      </div>
  );
}
