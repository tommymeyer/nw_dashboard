import React from "react";
import "./StatboxTitleBar.sass";
import NumberOfDays from "../NumberOfDays/NumberOfDays";


export default function StatboxTitleBar({ iconColor, heading }) {
  const NumberOfDaysRender = () => {
    return <NumberOfDays iconColor={iconColor} />;
  };

  return (
    <div className="heading-bar">
      <h2 className="font-bold">{heading}</h2>

      {NumberOfDaysRender()}
    </div>
  );
}
