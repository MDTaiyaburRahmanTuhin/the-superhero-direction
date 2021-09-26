import React from 'react';

const Cart = (props) => {

    const { cart } = props || {}
    const totalReduce = (prevValue, currentValue) => prevValue + currentValue.price

    const total = cart.reduce(totalReduce, 0)
    return (
        <div>
            <h4><i class="fas fa-broom"></i>{cart.length}</h4>
            <h2>Total $: {total}</h2>
            <h2>Cleaning Name :</h2>
            <ol>
                {
                    cart.map(productName => <li>{productName.name}, <img className="w-50" src={productName.img} alt="..." /></li>)
                }
            </ol>
        </div>
    );
};

export default Cart;