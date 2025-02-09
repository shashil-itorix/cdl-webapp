import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="w-100 bg-dark">
            <div className="container p-2 d-flex align-items-center justify-content-between">
                <img src='https://cdl.com.sg/assets/img/home/CDL-Logo_dark-bkg.png' height={50} />

                <div className="d-flex align-items-center" style={{ gap: 32 }}>
                    <Link to='/residential'>Residential</Link>
                    <Link to='/commercial'>Commercial</Link>
                    <Link to='/industrial'>Industrial</Link>
                    <Link to='/login' className="font-primary fw-bold">Login</Link>
                </div>
            </div>
        </div>
    )
}
