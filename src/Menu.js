// Menu.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Action';

const Menu = () => {
  const dispatch = useDispatch();

  const menuItems = [
    { id: 1, name: '漢堡', price: 99 },
    { id: 2, name: '薯條', price: 52 },
    { id: 3, name: '雞塊', price: 39 },
    { id: 4, name: '可樂', price: 30 },
    { id: 5, name: '蛋捲冰淇淋', price: 15 },
    { id: 6, name: '紅豆派', price: 35 },
    { id: 7, name: '炸雞', price: 39 },
    { id: 8, name: '吉拿棒', price: 49 },
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div class="orderCon">
      <h2>菜單</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              {item.name} - NT${item.price}
            </div>
            <button onClick={() => handleAddToCart(item)}>
              十
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Menu;
