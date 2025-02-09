/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function HomeRoute() {
    return (
        <div className="position-relative h-100">
            <div style={{ width: "100vw" }} className="position-relative">
                <div className="w-100 position-relative" style={{ height: 600 }}>
                    <video autoplay muted loop playsinline style={{ zIndex: 1, objectFit: "cover", height: 600, width: "100vw" }}>
                        <source src="https://cdl.com.sg/assets/img/home/orie_cinemagraph_desktop.mp4" type="video/mp4" />
                    </video>    

                    <div className="h-100 w-100 position-absolute d-flex align-items-center" style={{ zIndex: 2, left: 0, top: 0 }}>
                        <div className="container">
                            <div className="ps-5 py-4" style={{ width: 800, background: "rgba(0, 0, 0, 0.6)", paddingRight: 120 }}>
                                <p className="fs-56px text-white">Inspiring the future of real estate</p>

                                <div className="d-flex align-items-center my-4" style={{ gap: 16 }}>
                                    <p className="text-white">Innovation</p>
                                    <p className="text-white">|</p>
                                    <p className="text-white">Creativity</p>
                                    <p className="text-white">|</p>
                                    <p className="text-white">Passion</p>
                                </div>

                                <div className="btn-primary px-4 py-3">
                                    <p style={{ fontSize: 14, fontWeight: 600 }}>Discover The Orie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100vw">
                    <div className="container d-flex align-items-center w-100">
                        <div className="w-50" style={{ padding: "120px" }}>
                            <div>
                                <h6 className="fw-bold underlineText mb-5" style={{ fontSize: 12, lineHeight: "20px", letterSpacing: "2px" }}>ABOUT US</h6>
                                <h2 className='mb-4' style={{ fontSize: 28, lineHeight: "38px" }}>
                                    Leading global real estate company in Singapore
                                </h2>
                                <p style={{ fontSize: 16, lineHeight: "24px" }}>
                                    We aim to be recognised by customers, employees and peers as an innovative creator of quality and sustainable spaces.
                                </p>
                            </div>
                        </div>
                        <div style={{ padding: "120px 40px 120px 120px", gap: 24 }} className="w-50 d-flex align-items-center flex-wrap">
                            <div className="ctaCard">
                                <p>Residential</p>
                                <span>→</span>
                            </div>
                            <div className="ctaCard">
                                <p>commercial</p>
                                <span>→</span>
                            </div>
                            <div className="ctaCard">
                                <p>hospitality</p>
                                <span>→</span>
                            </div>
                            <div className="ctaCard">
                                <p>fund management</p>
                                <span>→</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100vw", background: "#f7f9fa" }} className="position-relative">
                <div className="container" style={{ padding: "48px 60px 48px 180px" }}>
                    <h6 className="fw-bold underlineText mb-4" style={{ fontSize: 16, lineHeight: "20px", letterSpacing: "2px" }}>
                        FEATURED STORIES
                    </h6>
                    <div className="d-flex align-items-start w-100">
                        <div style={{ width: "55%" }}>
                            <img width={"100%"} src='https://cdl.com.sg/assets/img/en-newsroom-press-release/2025_press_release_the_orie_launch_01_desktop.jpg'
                                style={{ borderRadius: 5, boxShadow: "0 4px 8px 0 rgba(0,0,0,.24)" }} />
                        </div>
                        <div style={{ width: "45%", height: 300 }} className="px-5 d-flex flex-column">
                            <div className="d-flex align-items-center mb-3" style={{ gap: 20 }}>
                                <p style={{ color: "#a67000 !important", fontSize: 13 }} className="mb-0 fw-bold">Press Release</p>
                                <p style={{ fontSize: 12, color: "#293947" }} className="mb-0">19 January 2025</p>
                            </div>
                            <p className="mb-2" style={{ fontSize: 18, lineHeight: "28px", width: 260, fontWeight: 500 }}>
                                The Orie kickstarts 2025 on a high note – 86% of units sold on launch weekend
                            </p>
                            <div className="d-flex align-items-center" style={{ gap: 16 }}>
                                <p style={{ color: "#a67000", fontSize: 15, fontWeight: 600 }} className="mb-0">Read More</p>
                                <p style={{ color: "#a67000", fontSize: 15, fontWeight: 600 }} className="mb-0">→</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
