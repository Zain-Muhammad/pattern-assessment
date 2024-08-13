import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory, filterByPrice } from '../redux/slices/productsSlice';

const Filters = () => {
    const dispatch = useDispatch();

    const handleCategoryChange = (e) => {
        dispatch(filterByCategory(e.target.value));
    };

    const handlePriceChange = (e) => {
        const [minPrice, maxPrice] = e.target.value.split('-').map(Number);
        dispatch(filterByPrice({ minPrice, maxPrice }));
    };

    return (
        <div className="filters">
        <select onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
        </select>
        <select onChange={handlePriceChange}>
            <option value="0-Infinity">All Prices</option>
            <option value="0-50">0 - 50</option>
            <option value="50-200">50 - 200</option>
        </select>
        </div>
    );
};

export default Filters;
