import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
        const itemExists = state.items.find(item => item.id === action.payload.id);
        if (!itemExists) {
            state.items.push({ ...action.payload, quantity: 1 });
        } else {
            itemExists.quantity += 1;
        }
        },
        removeFromCart: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});
// Selector to calculate the total number of products
export const selectTotalItems = state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
