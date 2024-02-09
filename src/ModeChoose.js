import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/ModeChoose.css";

const ModeChoose = () => {
  const navigate = useNavigate();

  const ChangeToBusiness = () => {
    navigate("../BusinessMode");
  };

  const ChangeToManage = () => {
    navigate("../ManageMode");
  };

  return (
    <div className="ModeCon">
      <div className="Business" onClick={ChangeToBusiness}>
        <h1>營業模式</h1>
      </div>
      <div className="Manage" onClick={ChangeToManage}>
        <h1>管理模式</h1>
      </div>
    </div>
  );
};

export default ModeChoose;
