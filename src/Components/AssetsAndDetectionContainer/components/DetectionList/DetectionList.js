import React from "react";


const detectionListItem = [
  {
    status: "Active",
    detected: "Icing Detected",
    timeframe: [
      {
        start: "12/07/2016 06:03:00 AM UTC",
        end: "Ongoing"
      }
    ]
  },
  {
    status: "Inactive",
    detected: "Icing Detected",
    timeframe: [
      {
        start: "12/07/2016 06:03:00 AM UTC",
        end: "Ongoing"
      }
    ]
  },
  {
    status: "Archived",
    detected: "Icing Detected",
    timeframe: [
      {
        start: "12/07/2016 06:03:00 AM UTC",
        end: "Ongoing"
      }
    ]
  },
  {
    status: "Archived",
    detected: "Icing Detected",
    timeframe: [
      {
        start: "12/07/2016 06:03:00 AM UTC",
        end: "Ongoing"
      }
    ]
  },
  {
    status: "Archived",
    detected: "Icing Detected",
    timeframe: [
      {
        start: "12/07/2016 06:03:00 AM UTC",
        end: "Ongoing"
      }
    ]
  }
];


export default function DetectionList() {
  const RenderDetectionListItem = () => {
    return detectionListItem.map((listItem, index) => {
      console.log("listItem", listItem);
      return (
        <div className="detection-list-item" key={`${listItem.asset}-${index}`}>
          <p className={`item tc font-semi-bold ${listItem.status}`}>{listItem.status}</p>
          <p className="item jc detected-item font-bold">{listItem.detected}</p>

          <div className="timeframe-container">
            <p className="item small font-bold timeframe-start-title">Start: <span className="start-date small font-bold">{listItem.timeframe[0].start}</span></p>
            <p className="item small font-bold timeframe-end-title">End: <a href="/" className="font-bold end-link">{listItem.timeframe[0].end}</a></p>
          </div>
        </div>
      );
    });
  };

  return(
    <>
      <div className="detection-list-headings font-bold">
        <div className="asset-list-heading status-heading">Status</div>
        <div className="asset-list-heading detected-heading">Detected</div>
        <div className="asset-list-heading timeframe-heading">Timeframe</div>
      </div>

      <div className="asset-list">
        <RenderDetectionListItem />
      </div>
    </>
  );
}
