import React, { useState } from "react";
import "../css/EditClass.css";
import trashCan from '../img/trashCan.png';

const EditClass = () => {

    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");
    const [enable, setEnable] = useState(true);
    const [selectedShwarma, setSelectedShwarma] = useState('全部');

    const handleAddItem = () => {
        setItemArray([...itemArray, { itemName: "", itemPrice: "", category: "", sort: "", enable: true, file: null }]);
    };

    const [selectedCategory, setSelectedCategory] = useState('');

    const [itemArray, setItemArray] = useState([
        { itemName: "豬肉炒飯", itemPrice: "80", category: "炒飯", sort: "1", enable: true, file: null },
        { itemName: "牛肉炒飯", itemPrice: "100", category: "炒飯", sort: "2", enable: true, file: null },
        { itemName: "羊肉炒飯", itemPrice: "90", category: "炒飯", sort: "3", enable: true, file: null },
        { itemName: "蝦仁炒飯", itemPrice: "90", category: "炒飯", sort: "4", enable: true, file: null },
        { itemName: "親子丼飯", itemPrice: "100", category: "丼飯", sort: "1", enable: true, file: null },
        { itemName: "鰻魚丼飯", itemPrice: "150", category: "丼飯", sort: "2", enable: true, file: null },
        { itemName: "雞排丼飯", itemPrice: "130", category: "丼飯", sort: "3", enable: true, file: null },
        { itemName: "豬排丼飯", itemPrice: "120", category: "丼飯", sort: "4", enable: true, file: null },
        { itemName: "豬肉燴飯", itemPrice: "80", category: "燴飯", sort: "1", enable: true, file: null },
        { itemName: "羊肉燴飯", itemPrice: "90", category: "燴飯", sort: "2", enable: true, file: null },
        { itemName: "牛肉燴飯", itemPrice: "100", category: "燴飯", sort: "3", enable: true, file: null },
        { itemName: "蝦仁燴飯", itemPrice: "90", category: "燴飯", sort: "4", enable: true, file: null },
        { itemName: "明太子烏龍麵", itemPrice: "200", category: "烏龍麵", sort: "1", enable: true, file: null },
        { itemName: "海鮮烏龍麵", itemPrice: "150", category: "烏龍麵", sort: "2", enable: true, file: null },
        { itemName: "炒烏龍麵", itemPrice: "120", category: "烏龍麵", sort: "3", enable: true, file: null },
        { itemName: "干貝海鮮麵", itemPrice: "230", category: "海鮮麵", sort: "1", enable: true, file: null },
        { itemName: "螃蟹海鮮麵", itemPrice: "300", category: "海鮮麵", sort: "2", enable: true, file: null }
    ]);

    const filteredItems = itemArray.filter(item => item.category === selectedCategory);

    const uniqueCategories = [...new Set(itemArray.map(category => category.category))];

    const handleInputChange = (index, key, value) => {
        const updatedItemArray = [...itemArray];
        updatedItemArray[index][key] = value;
        setItemArray(updatedItemArray);
    };

    const handleFileChange = (index, file) => {
        const updatedItemArray = [...itemArray];
        updatedItemArray[index].file = file;
        setItemArray(updatedItemArray);
    };

    const handleDeleteItem = (index) => {
        const updatedItemArray = [...itemArray];
        updatedItemArray.splice(index, 1);
        setItemArray(updatedItemArray);
    };

    const handleShwarmaChange = (event) => {
        setSelectedShwarma(event.target.value);
    };

    return (
        <div className="functionCon">
            <div className="ddlCon">
                <label for="shwarmaSelect">選擇您欲編輯的分類：</label>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">請選擇</option>
                    {uniqueCategories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="itemInfo">
                <div className="ClassAndOrder">
                    <div className="flex" style={{ marginBottom: "30px" }}>
                        <span>分類：</span>
                        <input onChange={(e) => setCategory(e.value)}></input>
                    </div>
                    <div className="flex" style={{ marginBottom: "30px" }}>
                        <span>排序：</span>
                        <input onChange={(e) => setSort(e.value)}></input>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <span>是否啟用：</span>
                        <span>是</span>
                        <input
                            type="checkbox"
                            checked={enable}
                            onChange={() => setEnable(!enable)}
                        />
                        <span>否</span>
                        <input
                            type="checkbox"
                            checked={!enable}
                            onChange={() => setEnable(!enable)}
                        />
                    </div>
                </div>
            </div>
            <div className="addItemCon">
                <button onClick={handleAddItem}>新增</button>
                {filteredItems.map((item, index) => (
                    <div className="addItemCon1" key={index}>
                        <div className="Item">
                            <div>
                                <div className="flex" style={{ marginBottom: "30px" }}>
                                    <span>商品名稱：</span>
                                    <input
                                        value={item.itemName}
                                        onChange={(e) => handleInputChange(index, 'itemName', e.target.value)}
                                    />
                                </div>
                                <div className="flex" style={{ marginBottom: "30px" }}>
                                    <span>商品價格：</span>
                                    <input
                                        value={item.itemPrice}
                                        onChange={(e) => handleInputChange(index, 'itemPrice', e.target.value)}
                                    />
                                </div>
                                <div className="flex" style={{ marginBottom: "30px" }}>
                                    <span>商品圖片：</span>
                                    <div className="fileCon">
                                        <input type="file" style={{ backgroundColor: 'none' }}
                                            onChange={(e) => handleFileChange(index, e.target.files[0])} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                {item.file && (
                                    <div>
                                        <img src={URL.createObjectURL(item.file)} alt="" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <img src={trashCan} id="delete" alt="" onClick={() => handleDeleteItem(index)} />                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditClass;