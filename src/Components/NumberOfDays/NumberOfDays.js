import React from 'react';
import "./NumberOfDays.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


export default function NumberOfDays({ selectColors, iconColor }) {
  return (
    <div className="number-of-days-container">
      <select name="number of days" className="number-of-days small font-bold common-radius" id={selectColors} >
        <option value="1">Last 30 Days</option>
        <option value="2">Last 60 Days</option>
        <option value="3">Last 90 Days</option>
      </select>

      <FontAwesomeIcon icon={faCaretDown} color={iconColor} />
    </div>
  );
}
