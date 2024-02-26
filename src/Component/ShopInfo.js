import React, { useState } from "react";
import "../css/ShopInfo.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const ShopInfo = () => {

    const [isOn, setOn] = useState(true);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(1);
    const [qrcodes, setQrcodes] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const toggleSwitch = () => {
        setOn(!isOn);
    };

    const toggleBackground = (event) => {
        event.target.classList.toggle("selected");
    };

    return (
        <div className="panelCon">
            <div className="functionCon">
                <div className="flex" style={{ marginBottom: "20px" }}>
                    <span>店名：</span>
                    <input></input>
                </div>
                <div className="flex" style={{ marginBottom: "20px" }}>
                    <span>付款方式：</span>
                    <input></input>
                </div>
                <div className="flex" style={{ marginBottom: "20px" }}>
                    <span>營業時間：</span>
                    <div>
                        <div class="row">
                            <div className="box" onClick={toggleBackground}>一</div>
                            <div className="box" onClick={toggleBackground}>二</div>
                            <div className="box" onClick={toggleBackground}>三</div>
                            <div className="box" onClick={toggleBackground}>四</div>
                            <div className="box" onClick={toggleBackground}>五</div>
                            <div className="box" onClick={toggleBackground}>六</div>
                            <div className="box" onClick={toggleBackground}>日</div>
                        </div>
                    </div>
                </div>
                <div className="flex" style={{ marginBottom: "20px" }}>
                    <span>封面照：</span>
                    <div className={`toggle-switch ${isOn ? "on" : "off"}`} onClick={toggleSwitch}>
                        <div className={`slider ${isOn ? "on" : "off"}`}></div>
                    </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <p>提醒事項：</p>
                    <textarea />
                </div>
            </div>
        </div >
    );
};

export default ShopInfo;
