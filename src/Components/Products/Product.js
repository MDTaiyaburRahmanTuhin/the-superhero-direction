import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { name, img, price, details, rate } = props.product || {}
    console.log(props.product);
    return (
        <div className="col-md-4 g-4">
            <div className="row g-1">
                <div className="mb-5 card rounded-3 border border-light">
                    <img src={img} className="card-img-top rounded-3 p-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{details}</p>
                        <p className="card-text">{price}</p>
                        <Rating initialRating={rate} emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly>

                        </Rating>
                        <p><small>{rate}</small></p>
                        <button onClick={() => props.handleAddProduct(props.product)} className="btn btn-primary">Cleaning service call</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Product;
