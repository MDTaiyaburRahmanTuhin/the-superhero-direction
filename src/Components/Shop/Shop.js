import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    //cart update;

    const [cart, setCart] = useState([]);

    //eventHandelaer

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        console.log(newCart);
        setCart(newCart);
    }

    useEffect(() => {
        fetch("/agros.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    return (
        <div className="shop">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            products.map(product => <Product
                                product={product}
                                handleAddProduct={handleAddProduct}
                            ></Product>)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;