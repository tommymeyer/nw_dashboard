import React from "react";
import "./AssetsAndDetectionContainer.sass";
import StatboxTitleBar from "../StatboxTitleBar/StatboxTitleBar";
import AssetsList from "./components/AssetsList/AssetsList";
import DetectionList from "./components/DetectionList/DetectionList";


export default function AssetsAndDetectionContainer({ iconColor }) {
  return (
    <article className="assets-and-detection-container">
      <div className="assets-box">
        <StatboxTitleBar iconColor={iconColor} heading="Assets" />
        <div className="assets info-lists statbox">
          <AssetsList />
        </div>
      </div>

      <div className="detection-box">
        <StatboxTitleBar iconColor={iconColor} heading="Detection" />

        <div className="detection info-lists statbox">
          <DetectionList />
        </div>
      </div>
    </article>
  );
}
