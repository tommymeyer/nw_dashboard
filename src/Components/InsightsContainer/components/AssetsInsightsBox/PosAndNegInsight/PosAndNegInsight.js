import React from "react";
import "./PosAndNegInsight.sass";
import StatboxTitleBar from "../../../../StatboxTitleBar/StatboxTitleBar";


export default function PosAndNegInsight({ iconColor }) {
  return (
    <>
      <div className="positive insights-box">
        <StatboxTitleBar iconColor={iconColor} heading="Events Stats & Insights" />

        <div className="insights-copy statbox">
          <p className="positive-insight-number font-light">45</p>
          <p className="h5 font-semi-bold">Lorem ipsum</p>
        </div>
      </div>

      <div className="negative insights-box">
        <StatboxTitleBar iconColor={iconColor} heading="Events Stats & Insights" />

        <div className="insights-copy statbox">
          <p className="negative-insight-number font-light">214</p>
          <p className="h5 font-semi-bold">Lorem ipsum</p>
        </div>
      </div>
    </>
  );
}
