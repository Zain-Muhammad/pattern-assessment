import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data';

const initialState = {
items: products,
filteredItems: products,
};

const productsSlice = createSlice({
name: 'products',
initialState,
reducers: {
    filterByCategory: (state, action) => {
    state.filteredItems = state.items.filter(product =>
        product.category.includes(action.payload)
    );
    },
    filterByPrice: (state, action) => {
    const { minPrice, maxPrice } = action.payload;
    state.filteredItems = state.items.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
    );
    },
    sortProducts: (state, action) => {
    const { field, order } = action.payload;
    state.filteredItems = state.filteredItems.sort((a, b) => {
        if (field === 'price') {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
        } else if (field === 'name') {
        return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        return 0;
    });
    },
},
});

export const { filterByCategory, filterByPrice, sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
