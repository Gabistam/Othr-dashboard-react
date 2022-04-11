import React from "react";

function ProgressObjectifsMonth({
  month,
  percent,
  objectifAtteint,
  objectifVise,
}) {
  return (
    <div className="progress-month">
      <div className="month">{month}</div>
      <div className="progress-bar">
        <Jauge></Jauge>
      </div>
      <div className="objectif">
        {objectifAtteint}/{objectifVise}
      </div>
    </div>
  );
}

export default ProgressObjectifsMonth;
