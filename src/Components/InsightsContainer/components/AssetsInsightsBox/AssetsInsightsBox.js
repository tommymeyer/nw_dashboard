import React from "react";
import "./AssetsInsightsBox.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import {faClock } from "@fortawesome/free-regular-svg-icons";
import StatboxTitleBar from "../../../StatboxTitleBar/StatboxTitleBar";


export default function AssetsInsightsBox({ iconColor }) {
  return (
    <div className="insights-box">
      <StatboxTitleBar iconColor={iconColor} heading="Events Stats & Insights" />
      <ul className="assets-insights statbox">
        <li className="asset-issues">
          <div className="icon-container">
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
          </div>
          <h3 className="title small font-bold">Assets W/ Performance Issues</h3>
          <p className="h4 font-light">15 Assets</p>
        </li>

        <li className="asset-issues">
          <div className="icon-container">
            <FontAwesomeIcon icon={faClock} className="icon" />
          </div>
          <h3 className="title small font-bold">Assets W/ Availability Issues</h3>
          <p className="h4 font-light">24 Assets</p>
        </li>
      </ul>
    </div>
  );
}
