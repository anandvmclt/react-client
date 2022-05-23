import React from 'react'
import Product from '../Product'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {getAllProducts} from '../../action/productAction';



function HomeScreen() {

    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products/getallproducts').then(res => {
            setProducts(res.data);
        }).catch(err => {
            console.log(err);
        })

        dispatch(getAllProducts())
        
    }, [])

    return (
            <div className='row justify-content-center'>

                {products.length && (products.map((product,index) => {
                    return <div className='col-md-3 m-3 card p-2 ' key={index} >
                    <Product product={product}  />
                    </div>
                    
                }))}
            </div>
    )
}

export default HomeScreen 