import React from 'react'
import Product from '../Product'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../action/productAction';
import Loader from '../Loader';
import Errors from '../Errors';



function HomeScreen() {
    const getallproductsState = useSelector(state => state.getAllProductsReducer)
    const { loading, products, error } = getallproductsState
    const dispatch = useDispatch()

    useEffect(() => {


        dispatch(getAllProducts())

    }, [])

    return (
        <div> 
        <div className='row justify-content-center'>
            {loading ? <Loader/> :
                error ? (
                    <Errors error={"Something went wrong !"} />                 ) :
                (
                    products.map((products,index) => {
                        return <div className='col-md-3 m-2 p-2 card' key={index}> 
                            <Product product={products} />
                        </div>
                    })

                )}

        </div>
        </div> 
    )
}

export default HomeScreen 