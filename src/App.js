import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
          <ShoppingCart />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
