import React, { useState } from "react";
import "../css/Menu.css";

const AddClass = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({
        category: "",
        enable: true,
    });
    const buttonStyle = {
        backgroundColor: '#3C3633',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
    };

    const addClass = () => {
        setItems([...items, newItem]);

        // Reset input fields for the next item
        setNewItem({
            category: "",
            enable: true,
        });
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Handle checkbox separately
        const inputValue = type === "checkbox" ? name === "enable" ? !newItem.enable : checked : value;

        // Update the state for the current item
        setNewItem({
            ...newItem,
            [name]: inputValue,
        });
    };

    return (
        <div className="functionCon">
            <div>
                <button onClick={addClass} style={buttonStyle}>新增</button>
                <button style={buttonStyle}>儲存</button>
            </div>
            {items.map((item, index) => (
                <div key={index} className="itemInfo">
                    <div className="ClassAndOrder">
                        <div className="flex" style={{ marginBottom: "30px" }}>
                            <span>分類：</span>
                            <input
                                name="category"
                                value={item.category}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex">
                            <span>是否啟用：</span>
                            <label>
                                <input type="radio" name="enable" value={true} checked={item.enable} onChange={handleInputChange} />
                                是
                            </label>
                            <label>
                                <input type="radio" name="enable" value={false} checked={!item.enable} onChange={handleInputChange} />
                                否
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AddClass;
