import React from "react";
import "./CategoryTabsAndDropdown.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import TabsBottomBorder from "../TabsBottomBorder/TabsBottomBorder";


export default function CategoryTabsAndDropdown({ iconColor }) {
  return (
    <>
      <div className="categories-container category-tabs-container">
        <ul className="category-tabs">
          <li className="tab perf-tab active">
            <button className="font-regular">Performance</button>
          </li>
          <li className="tab assets-tab">
            <button className="font-regular">Assets</button>
          </li>
          <li className="tab events-tab">
            <button className="font-regular">Events</button>
          </li>
          <li className="tab history-tab">
            <button className="font-regular">History</button>
          </li>
        </ul>
      </div>

      <div className="categories-container number-of-days-container">
        <select name="categories dropdown" className="number-of-days common-radius category-dropdown">
          <option value="1">Performance</option>
          <option value="2">Assets</option>
          <option value="3">Events</option>
          <option value="4">History</option>
        </select>

        <FontAwesomeIcon icon={faCaretDown} color={iconColor} />
      </div>

      <TabsBottomBorder />
    </>
  );
}
