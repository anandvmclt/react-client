import React from 'react'
import Product from '../Product'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../action/productAction';



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
            {loading ? <h1> Loading ... </h1> :
                error ? (<h1> Something Went wrong !</h1>) :
                (
                    products.map((products,index) => {
                        return <div className='col-md-3 m-2 p-2' key={index}> 
                            <Product product={products} />
                        </div>
                    })

                )}

        </div>
        </div> 
    )
}

export default HomeScreen 