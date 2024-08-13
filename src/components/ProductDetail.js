import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector(state =>
        state.products.items.find(product => product.id === parseInt(id))
    );
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-detail">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
