import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategory, filterByPrice, sortProducts } from '../redux/slices/productsSlice';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Filters from './Filters';
import Sorting from './Sorting';

const ProductList = () => {
    const products = useSelector(state => state.products.filteredItems);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
        <div className='filters-sorting-wrapper'>
            <Filters />
            <Sorting />
        </div>
        <div className="product-list">
            {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Pagination
            totalProducts={products.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />
        </div>
    );
};

export default ProductList;
