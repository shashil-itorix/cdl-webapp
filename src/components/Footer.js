import React from 'react'

export default function Footer() {
    return (
        <div className="bg-dark p-4 w-100">
            <div className="container w-100">
                <div className="w-100 d-flex align-items-center justify-content-between" style={{ padding: "16px 0", borderBottom: "1px solid rgba(247,247,247,.5)" }}>
                    <div className="d-flex align-items-center" style={{ gap: 32 }}>
                        <h2 className="text-white mb-0 fw-bold" style={{ letterSpacing: "2px", fontSize: 14 }}>LOCATE US</h2>
                        <p className="text-white">9 Raffles Place #12-01 Republic Plaza Singapore 048619</p>
                    </div>

                    <div className="d-flex align-items-center" style={{ gap: 32 }}>
                        <h2 className="text-white mb-0 fw-bold" style={{ letterSpacing: "2px", fontSize: 14 }}>FOLLOW US</h2>
                        <div className="d-flex align-items-center" style={{ gap: 12 }}>

                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-between" style={{ padding: "16px 0" }}>
                    <p className="text-white" style={{ fontSize: 13 }}>
                        Copyright © 2024 City Developments Limited
                    </p>

                    <div className="d-flex align-items-center" style={{ gap: 22 }}>
                        <a href='#'>Contact Us</a>
                        <a href='#'>Sitemap</a>
                        <a href='#'>Links</a>
                        <a href='#'>Terms of Use</a>
                        <a href='#'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
