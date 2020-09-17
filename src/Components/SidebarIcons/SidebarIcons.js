import React from 'react';
import "./SidebarIcons.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faBell, faBookmark, faTachometerAlt, faFileAlt, faMapMarkerAlt, faUpload, faTimes } from "@fortawesome/free-solid-svg-icons";


export default function SidebarIcons({ handleNavClick }) {
  const iconColor = "#66AAB5";
  const activeColor = "#ffffff";
  const userColor = "#ffffff";


  return (
    <>
      <button className="close-icon-btn btn" onClick={handleNavClick}>
        <FontAwesomeIcon icon={faTimes} color={activeColor} />
      </button>
      <ul className="utility-icons">
        <button className="user-icon-btn btn">
          <div className="icon-container"><FontAwesomeIcon icon={faUserAstronaut} color={userColor} className="user-icon" /></div>
        </button>

        <button className="bell-icon-btn btn">
          <div className="icon"><FontAwesomeIcon icon={faBell} color={iconColor} /></div>
        </button>

        <button className="bookmark-icon-btn btn">
          <div className="icon"><FontAwesomeIcon icon={faBookmark} color={iconColor} /></div>
        </button>
      </ul>

      <ul className="nav-icons">
        <button className="tachometer-icon-btn btn">
          <div className="icon active"><FontAwesomeIcon icon={faTachometerAlt} color={activeColor} /></div>
        </button>

        <button className="filt-icon-btn btn">
          <div className="icon"><FontAwesomeIcon icon={faFileAlt} color={iconColor} /></div>
        </button>

        <button className="marker-icon-btn btn">
          <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} color={iconColor} /></div>
        </button>

        <button className="upload-icon-btn btn">
          <div className="icon"><FontAwesomeIcon icon={faUpload} color={iconColor} /></div>
        </button>
      </ul>
    </>
  );
}
