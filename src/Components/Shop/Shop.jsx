import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(products => <Product
                        key={products.id}
                        products={products}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;