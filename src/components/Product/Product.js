import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = (props) => {
  
    // console.log(props);
    const { _id, name, img, seller, price, stock, star, description, imageURL, location } = props.product;

    return (
        <div className="mb-5 col-lg-4 col-sm-6 mt-5">
            <div className="card shadow-lg w-100 h-100 text-center rounded servicesCard p-3">
                <div>
                 <img src={img} alt="" />
             </div>
             <div>
                 <h4 className="product-name">{name}</h4>
                 
                 <p>Delivery Cost: {price}</p>
                
                 <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                    <div className="align-items-center d-flex justify-content-around ">
                        <Link to={`/Inventory/${_id}`}>
                            <button className="btn btn-success">Buy now</button>
                        </Link>
                       
                        <button
                            onClick={() => props.handleAddToCart(props.product)}
                            className="btn-regular"
                        ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    </div>
            </div>
        </div>
        
    );
};

export default Product;