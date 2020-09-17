import React from 'react';
import "./TopBar.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import NumberOfDays from '../NumberOfDays/NumberOfDays';


export default function TopBar() {
  return(
    <div className="top-bar">
      <p className="breadcrumbs p">
        <a href="/">Site</a> / <a href="/">Performance</a></p>

      <div className="time-and-refresh-container">
        <div className="timeframe-container common-radius">
          <p className="small timeframe-title font-bold">Timeframe:</p>

          <NumberOfDays
            selectColors="timeframe-number-of-days"
            iconColor="#ffffff80"
          />
        </div>

        <button className="refresh-icon-btn common-radius">
          <FontAwesomeIcon icon={faSyncAlt} color="#ffffff" />
        </button>
      </div>
    </div>
  );
}
