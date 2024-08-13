import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortProducts } from '../redux/slices/productsSlice';
import { removeFromCart, selectTotalItems } from '../redux/slices/cartSlice';

const Sorting = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = useSelector(selectTotalItems);
    const dispatch = useDispatch();

    const handleSortChange = (e) => {
        const [field, order] = e.target.value.split('-');
        dispatch(sortProducts({ field, order }));
    };
    const openNav = () => {
        const element = document.getElementById("nav-mobile");
        element.classList.toggle("active");
    }
    return (
        <div className="sorting">
        <select onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
        </select>
        <span className="cart-icon" role="img" aria-label="cart" onClick={openNav}>🛒 
                <span className='no-of-products'>{totalItems}</span>
            </span>
        </div>
    );
};

export default Sorting;
