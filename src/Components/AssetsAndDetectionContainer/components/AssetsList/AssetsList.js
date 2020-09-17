import React from "react";


const assetListItem = [
  {
    asset: "Solar-001",
    capacity: "2.5 MW",
    energy: "1.16 MW",
    view: "View"
  },
  {
    asset: "Solar-002",
    capacity: "2.5 MW",
    energy: "1.16 MW",
    view: "View"
  },
  {
    asset: "Solar-003",
    capacity: "2.5 MW",
    energy: "1.16 MW",
    view: "View"
  },
  {
    asset: "Solar-004",
    capacity: "2.5 MW",
    energy: "1.16 MW",
    view: "View"
  },
  {
    asset: "Solar-005",
    capacity: "2.5 MW",
    energy: "1.16 MW",
    view: "View"
  }
];


export default function AssetsList() {
  const RenderAssetListItem = () => {
    return assetListItem.map((listItem, index) => {
      return (
        <li className="asset-list-item font-semi-bold" key={`${listItem.asset}-${index}`}>
          <p className="item jl">{listItem.asset}</p>
          <p className="item jc">{listItem.capacity}</p>
          <p className="item jc energy-color">{listItem.energy}</p>
          <p className="item jr"><a href="#" className="font-bold">{listItem.view}</a></p>
        </li>
      );
    });
  };


  return (
    <>
      <ul className="asset-list-headings font-bold">
        <li className="asset-list-heading jl">Asset</li>
        <li className="asset-list-heading jc">Capacity</li>
        <li className="asset-list-heading jc">Energy</li>
        <li className="asset-list-heading jr">View</li>
      </ul>

      <ul className="asset-list">
        <RenderAssetListItem />
      </ul>
    </>
  );
}
