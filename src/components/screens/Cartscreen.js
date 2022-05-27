
import React from 'react'
import { useState, useDispatch, useSelector } from 'react-redux'
import { addTocart, deleteFromCart } from '../../action/cartActions'

function Cartscreen() {
    const cartreducerstate = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const {cartItems} = cartreducerstate
   var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  return (
    <div>
        <div className='row mt-2 justify-content-center'>

        <div className='col-md-8 card'>
                <h1 className='text-center m-5'>My Cart </h1>
                <table className='table table-bordered'>
                    <thead> 
                    <tr>
                        <th>SL </th>
                        <th>Name </th>
                        <th>Price </th>
                        <th>Quanitiy </th>
                        <th>Total Amount </th>
                        <th>Delete </th>

                    </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index)=>{
                            return <tr key={index}>
                                <td>{index+1} </td>
                                <td>{item.name} </td>
                                <td>{item.price} </td>
                                <td> <select value={item.quantity} onChange={
                                    (e) => {dispatch(addTocart(item, e.target.value))}}>
                                     {[...Array(item.countInStock).keys()].map((x,i)=> {
                                         return <option value={i+1}  key={i}> {i+1} </option>
                                     })}

                                    </select> </td>
                                <td>{item.price * item.quantity} </td>
                                <td><i className='far fa-trash-alt'
                                onClick={()=>{dispatch(deleteFromCart(item))}} > </i> </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                        <hr/>
                        <h6 className='text-center'>Sub Total : ₹ {subtotal} INR </h6>
                        <hr/>
                        <div className='text-center p-3'>
                        <button className='btn'> PAY NOW</button>
                        </div>
                        </div>
                        
        </div>
    </div>
  )
}

export default Cartscreen
//onClick={dispatch(deleteFromCart(item))}