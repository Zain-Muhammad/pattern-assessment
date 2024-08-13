// src/components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const openNav = () => {
        const element = document.getElementById("nav-mobile");
        element.classList.toggle("active");
    }

    return (
        <div className='cart-container' id="nav-mobile">
        <h2 className='support-wrapper'>Shopping Cart
            <span className='cross-icon' role="img" aria-label="cross" onClick={openNav}>❌</span>
        </h2>
        {cartItems.length === 0 ? (
            <div className='no-item'>
                <p >No items in cart.</p>
                <span aria-label="empty cart" role="img" className='empty-cart'> 🛒</span>
            </div>
        ) : (
            <div className='cart-items-added'>
            {cartItems.map(item => (
                <div key={item.id} className='cart-item'>
                {item.name} - ${item.price} (Quantity: {item.quantity})
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            ))}
            </div>
        )}
        </div>
    );
};

export default ShoppingCart;
