import React from "react";
import "./Overview.sass";
import StatboxTitleBar from "../StatboxTitleBar/StatboxTitleBar";
import StatHighlightBox from "./components/StatHighlightBox";


export default function OverviewBox({ iconColor }) {
  return (
    <article className="overview-container">
      <StatboxTitleBar iconColor={iconColor} heading="Overview" />

      <div className="stat-highlight-boxes-container statbox">
        <StatHighlightBox />
      </div>
    </article>
  );
}
