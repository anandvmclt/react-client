import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating';


function Product({ product }) {
    return (

        <div className="text-left">
            <div>
                <Link to={`/product/${product.id}`}> 
                <img src={product.image} className='img-fluid' />
                <h1> {product.name} </h1>
                <Rating style={{color:'orange'}}
                initialRating={product.rating}
                emptySymbol="fa fa-star-o fa-1x"
                fullSymbol="fa fa-star fa-1x"
                readonly={true}
                />
                <h1> Price : {product.price} </h1>
                </Link>
            </div>
        </div>

    )
}

export default Product 