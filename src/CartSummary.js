import React from 'react';
import { useSelector } from 'react-redux';
import './css/CartSummary.css'

const CartSummary = () => {
    // 使用 useSelector 從 Redux Store 中獲取購物車狀態
    const cart = useSelector(state => state.cart);

    // 創建一個對象，用於存儲每個品項的總數
    const itemQuantities = {};

    // 遍歷購物車中的商品，更新每個品項的總數
    cart.forEach(item => {
        if (itemQuantities[item.id]) {
            itemQuantities[item.id].quantity += 1;
        } else {
            itemQuantities[item.id] = {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
            };
        }
    });

    // 計算總數和總金額
    const totalItems = cart.length;
    const totalPrice = Object.values(itemQuantities).reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    console.log(totalItems, totalPrice, itemQuantities);

    return (
        <div className='cartSumCon'>
            <span className='cartSumSpan'>當前品項總數: {totalItems}</span>
            <span className='cartSumSpan'>總金額: ${totalPrice}</span>
        </div>
    );
};

export default CartSummary;
