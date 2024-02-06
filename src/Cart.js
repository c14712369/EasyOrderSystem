import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './Action';
import CartSummary from './CartSummary';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    // 使用一個物件來追蹤每個商品的數量
    const itemQuantities = {};

    // 遍歷購物車中的商品，更新每個商品的數量
    cartItems.forEach(item => {
        if (itemQuantities[item.id]) {
            itemQuantities[item.id].quantity += 1;
        } else {
            itemQuantities[item.id] = {
                ...item,
                quantity: 1,
            };
        }
    });

    return (
        <div class="orderCon">
            <h2>購物車列表</h2>
            <ul>
                {Object.values(itemQuantities).map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} X {item.quantity}
                    </li>
                ))}
            </ul>
            <CartSummary />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <button onClick={handleClearCart}>清空購物車</button>
                <button>前往結帳</button>
            </div>
        </div>
    );
};

export default Cart;
