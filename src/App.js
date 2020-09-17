import React from 'react';
import "./styles/App.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SidebarNavigation from './Components/SidebarNavigation/SidebarNavigation';
import TopBar from './Components/TopBar/TopBar';
import MainContainer from './Components/MainContainer.js/MainContainer';


function App() {
  const iconColor = "#838383";


  const setOverlay = () => {
    const overlay = document.querySelector(".overlay");

    overlay.classList.toggle("active");
  };

  const handleNavClick = () => {
    const sideBar = document.querySelector(".side-bar");

    sideBar.classList.toggle("show");

    setOverlay();
  };


  return (
    <div className="app-container">
      <button className="bars-icon-btn btn" onClick={handleNavClick}>
        <FontAwesomeIcon icon={faBars} color={iconColor} />
      </button>
      <SidebarNavigation handleNavClick={handleNavClick} />
      <TopBar />

      <MainContainer handleNavClick={handleNavClick} iconColor={iconColor} />
    </div>
  );
}

export default App;
