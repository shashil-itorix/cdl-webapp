import React from 'react'

export default function Loader() {
    return (
        <div className="d-flex align-items-center" style={{ justifyContent: "center", height: "100vh", width: "100vw" }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
