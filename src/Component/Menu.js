import React, { useState } from "react";
import "../css/Menu.css";
import ShowProducts from "./ShowProducts";
import AddClass from "./AddClass";
import EditClass from "./EditClass";
import Preview from "./Preview";

const Menu = () => {

    const [ModeType, setMode] = useState("ShowProducts");

    const SetPlatform = () => {
        let plName = '';

        switch (ModeType) {
            case "ShowProducts":
                plName = ShowProducts;
                break;
            case "AddClass":
                plName = AddClass;
                break;
            case "EditClass":
                plName = EditClass;
                break;
            case "Preview":
                plName = Preview;
                break;
            default:
                plName = ShowProducts;
        }
        return plName;
    }

    const handleModeChange = (mode) => {
        setMode(mode);
    };

    let ShowPanel = SetPlatform();

    return (
        <div className="panelCon">
            <div className="addItemHeader">
                <div className="editButton">
                    <button onClick={() => handleModeChange('ShowProducts')}>商品總覽</button>
                    <button onClick={() => handleModeChange('AddClass')}>新增分類</button>
                    <button onClick={() => handleModeChange('EditClass')}>編輯分類</button>
                    <button onClick={() => handleModeChange('Preview')}>預覽</button>
                </div>
            </div>
            <ShowPanel />
        </div>
    );
};

export default Menu;
