import React from 'react';

const Pagination = ({ totalProducts, productsPerPage, setCurrentPage, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
        <ul className="pagination">
            {pageNumbers.map(number => (
            <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                <button onClick={() => setCurrentPage(number)} className="page-link">
                {number}
                </button>
            </li>
            ))}
        </ul>
        </nav>
    );
};

export default Pagination;
