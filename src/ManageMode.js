import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/ManageMode.css";

const ManageMode = () => {
  return (
    <div className="ManageModeCon">
      <div className="SideBar">
        <h2>功能列</h2>
        <ul>
          <li>菜單</li>
          <li>店家資訊</li>
          <li>QRcode</li>
        </ul>
      </div>
      <div className="addItem">
        <div className="addItemHeader">
          <div className="editButton">
            <button>新增</button>
            <button>儲存</button>
            <button>預覽</button>
          </div>
          <div className="itemClass">
            <span>商品分類：</span>
            <select>
              <option value="option1">飯</option>
              <option value="option2">麵</option>
              <option value="option3">湯</option>
            </select>
          </div>
        </div>
        <div className="addItemMain">
          <div className="itemInfo">
            <div className="ClassAndOrder">
              <div className="flex" style={{ marginBottom: "5px" }}>
                <span>分類：</span>
                <input></input>
              </div>
              <div className="flex">
                <span>排序：</span>
                <input></input>
              </div>
            </div>
            <div>
              <span>是否啟用</span>
              <input type="checkbox"></input>
            </div>
            <div>
              <img src="public/trashCan.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMode;
