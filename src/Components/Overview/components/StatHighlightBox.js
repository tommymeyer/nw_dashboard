import React from "react";
import "./StatHighlightBox.sass";


const boxColors = [
  {
    color: "blue",
    stat: "250",
    title: "Assets"
  },
  {
    color: "purple",
    stat: "23 GWh",
    title: "Capacity"
  },
  {
    color: "green",
    stat: "1.10 GWh",
    title: "Lorem Ipsum"
  },
  {
    color: "red",
    stat: "0.13 GWh",
    title: "Lorem Ipsum"
  },
  {
    color: "orange",
    stat: "15 Assets",
    title: "Lorem Ipsum"
  },
  {
    color: "red",
    stat: "45 Events",
    title: "Lorem Ipsum"
  },
  {
    color: "gray",
    stat: "25 Events",
    title: "Lorem Ipsum"
  }
];


export default function StatHighlightBox() {
  const RenderStatHighlightBox = () => {
    return boxColors.map((boxColor, index) => {
      return (
        <li className={`stat-highlight-box ${boxColor.color}`} key={`${boxColor.color}-${index}`}>
          <p className="title small font-bold">{boxColor.title}</p>
          <p className="stat h4 font-light">{boxColor.stat}</p>
        </li>
      );
    });
  };


  return (
    <ul className="stat-highlight-boxes">
      <RenderStatHighlightBox />
    </ul>
  );
}
