import React, { useState } from "react";
import "../css/ShowProduct.css";

const ShowProducts = () => {
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

    const groupedItems = itemArray.reduce((acc, item) => {
        acc[item.category] = [...(acc[item.category] || []), item];
        return acc;
    }, {});

    for (const category in groupedItems) {
        groupedItems[category].sort((a, b) => a.sort - b.sort);
    }

    return (
        <div className="functionCon">
            {Object.keys(groupedItems).map((category, index) => (
                <div key={index} className="CategoryContainer">
                    <div className="header">
                        <span>{category}</span>
                    </div>
                    <div className="ProductsContainer">
                        {groupedItems[category].map((item, itemIndex) => (
                            <div className="ProductCon" key={itemIndex}>
                                <div className="Item flex">
                                    <div className="info">
                                        <p>{item.itemName}</p>
                                        <p className="price">${item.itemPrice}</p>
                                    </div>
                                    <div>
                                        <img src="https://picsum.photos/75/75" alt="Product Image" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowProducts;
