import React from "react";
import "./DashboardInfo.sass";


export default function DashboardInfo() {
  return (
    <article className="dashboard-info common-radius">
      <h1 className="h4">SITE: <span className="font-bold">Solar Irvine</span></h1>

      <div className="location-info">
        <div className="time-and-place">
          <div className="place">
            <p>LOCATION: <span className="font-semi-bold">IRVINE, CA</span></p>
          </div>

          <div className="time">
            <p>TIME: <span className="font-semi-bold">10:10 AM (UTC)</span></p>
          </div>
        </div>

        <div className="type-and-number-of-assets">
          <div className="type-of-assets">
            <p>TYPE: <span className="font-semi-bold">SOLAR</span></p>
          </div>

          <div className="number-of-assets">
            <p># OF ASSETS: <span className="font-semi-bold">250</span></p>
          </div>
        </div>
      </div>
    </article>
  );
}
