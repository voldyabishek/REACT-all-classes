import React from 'react'

export const Weather = () => {
  return (
    <>
    <div className="container mt-5">
    <div className="card card-container shadow-sm">
      <div className="card-body">
        {/*  Alert Message */}
        <div className="alert alert-danger" id="alertMessage" style={{display:"none"}}>Weather data is unavailable.</div>
        <h5 className="card-title">Current Weather: <span id="weatherDescription">Loading...</span></h5>
        <p className="card-text">
          Wind Speed: <span id="windSpeed">Loading...</span> m/s <br />
          Temperature: <span id="temperature">Loading...</span>°C
        </p>
      </div>
    </div>
  </div>
  </>
  )
}
