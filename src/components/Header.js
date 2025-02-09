import React from 'react'

export default function Header() {
    return (
        <div className="w-100 bg-dark">
            <div className="container p-2 d-flex align-items-center justify-content-between">
                <img src='https://cdl.com.sg/assets/img/home/CDL-Logo_dark-bkg.png' height={50} />

                <div className="d-flex align-items-center" style={{ gap: 32 }}>
                    <a href='/residential'>Residential</a>
                    <a href='/commercial'>Commercial</a>
                    <a href='/industrial'>Industrial</a>
                    <a href='/login' className="font-primary fw-bold">Login</a>
                </div>
            </div>
        </div>
    )
}
