import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../action/productAction';
import { addTocart } from '../../action/cartActions';
import Loader from '../Loader';
import Errors from '../Errors';


function ProductdescSreen({ match }) {
    const [quantity, setQuantity] = useState(1)
    const productId = match.params.id;
    const dispatch = useDispatch()
    const getproductbyidstate = useSelector(state => state.getProductByIdReducer)
    const {product, loading, error} = getproductbyidstate;
    const addtoCart = ()=> {
        dispatch(addTocart(product, quantity));
    }

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [])

    return (
        <div>
              {loading ? <Loader/> :
                error ? <Errors error = "Something went wrong" /> :
                (
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <div className='card p-2 m-3'>
                        <h1> {product.name} </h1>
                        <img src={product.image} className='img-fluid m-3 bigimg' />
                        <p> {product.description} </p>
                    </div>
                </div>
                <div className='col-md-6 text-left'>
                    <div className='m-2'>
                        <h1>Price : {product.price} </h1>
                        <hr />
                        <h1> Select Quantity</h1>
                        <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map((x, i) => {
                                return <option value={i + 1} key={i}> {i + 1} </option>
                            })}
                        </select>

                        <hr />
                        <button className='btn btn-dark'onClick={addtoCart} > ADD TO CART</button>
                    </div>

                </div>

            </div>
            )}
        </div>
    )
}

export default ProductdescSreen 