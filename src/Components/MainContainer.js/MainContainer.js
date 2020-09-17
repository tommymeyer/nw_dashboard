import React from 'react';
import "./MainContainer.sass";
import DashboardInfo from '../DashboardInfo/DashboardInfo';
import CategoryTabsAndDropdown from '../CategoryTabsAndDropdown/CategoryTabsAndDropdown';
import Overview from '../Overview/Overview';
import InsightsContainer from '../InsightsContainer/InsightsContainer';
import AssetsAndDetectionContainer from '../AssetsAndDetectionContainer/AssetsAndDetectionContainer';


export default function MainContainer({ handleNavClick, iconColor }) {
  return (
    <main className="dashboard-container">
      <div className="overlay" onClick={handleNavClick}></div>
      <div className="dashboard">
        <DashboardInfo />

        <CategoryTabsAndDropdown iconColor={iconColor} />

        <Overview />

        <InsightsContainer iconColor={iconColor} />

        <AssetsAndDetectionContainer iconColor={iconColor} />
      </div>
    </main>
  );
}
