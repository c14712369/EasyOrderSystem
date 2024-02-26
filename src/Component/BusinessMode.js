import React, { useState } from "react";
import "../css/ManageMode.css";
import OrderStatus from "../Component/OrderStatus.js";

const BusinessMode = () => {

  const [ModeType, setMode] = useState('OrderStatus');

  const SetPlatform = () => {

    let plName = '';

    switch (ModeType) {
      case "OrderStatus":
        plName = OrderStatus;
        break;
    }
    return plName;
  }

  let ShowPanel = SetPlatform();

  return (
    <div className="ManageModeCon">
      <div className="SideBar">
        <h2>功能列</h2>
        <ul>
          <li>訂單</li>
          <li>首頁</li>
          <li>登出</li>
        </ul>
      </div>
      <ShowPanel />
    </div >
  );
};
export default BusinessMode;
