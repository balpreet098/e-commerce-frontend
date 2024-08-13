import React from "react";
import "./Deals.css";
function Deals() {
  return (
    <div className="DealsContainer">
      <div className="underLineDeals">
        <hr />
      </div>

      <div className="DealsContainer2">
        <div className="twoItemsInLeftContainer">
          <div className="leftDealsContainer">Deals Of The Day</div>
          <span className="verticalLine">v</span>
          <div className="TimeLeft">20 : 45 : 12 Left</div>
        </div>
        <div className="rightDealsContainer">View Details</div>
      </div>
    </div>
  );
}

export default Deals;
