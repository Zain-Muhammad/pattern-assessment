import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-card">
        <div className='product-image-wrapper'>
            <img src={product.image} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <p className='price'>Price: ${product.price}</p>
        <p className='category'>Category: {product.category}</p>
        <Link to={`/product/${product.id}`} className='link'>View Details</Link>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
