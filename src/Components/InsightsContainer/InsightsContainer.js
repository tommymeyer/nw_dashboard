import React from "react";
import "./InsightsContainer.sass";
import AssetsInsightsBox from "./components/AssetsInsightsBox/AssetsInsightsBox";
import PosAndNegInsight from "./components/AssetsInsightsBox/PosAndNegInsight/PosAndNegInsight";


export default function InsightsContainer({ iconColor }) {
  return (
    <article className="insights-container">
      <div className="insights-boxes">
        <AssetsInsightsBox iconColor={iconColor} />

        <PosAndNegInsight iconColor={iconColor} />
      </div>
    </article>
  );
}
