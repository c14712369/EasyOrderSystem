import React, { useState } from "react";
import "../css/ManageMode.css";
import Menu from "../Component/Menu.js";
import QRcode from "./QrCode.js";
import ShopInfo from "../Component/ShopInfo.js";
import { useNavigate } from "react-router-dom";

const ManageMode = () => {

  const [ModeType, setMode] = useState("Menu");
  const navigate = useNavigate();

  const backToHome = (e) => {
    e.preventDefault();

    navigate("../ModeChoose");
  }

  const handleLiClick = (newMode) => {
    setMode(newMode);
  };

  const SetPlatform = () => {

    let plName = '';

    switch (ModeType) {
      case "Menu":
        plName = Menu;
        break;
      case "ShopInfo":
        plName = ShopInfo;
        break;
      case "QRcode":
        plName = QRcode;
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
          <li onClick={() => handleLiClick("Menu")}>菜單</li>
          <li onClick={() => handleLiClick("ShopInfo")}>店家資訊</li>
          <li onClick={() => handleLiClick("QRcode")}>QRcode</li>
          <li onClick={backToHome}>首頁</li>
          <li>登出</li>
        </ul>
      </div>
      <ShowPanel />
    </div >
  );
};
export default ManageMode;
