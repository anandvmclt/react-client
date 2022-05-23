import React from 'react'

const products = []

function ProductdescSreen({match}) {
    const productId = match.params.id
    const product = products.find(prod => prod.id == productId)

  return (
        <div>
       <div className='row'>
           <div className='col-md-6'>
               <div className='card p-5 m-2'>
                   <h1> {product.name} </h1>
                   <img src={product.image} className='img-fluid m-3 bigimg' />
                   <p> {product.description} </p>
               </div>
           </div>
           <div className='col-md-6 text-left'> 
           <div className='m-2'>
               <h1>Price : {product.price} </h1>
               <hr/>
               <h1> Select Quantity</h1>
               <select> 
                {[...Array(product.countInStock).keys()].map((x,i) => {
                    return <option value={i+1} key={i}> {i+1} </option>
                })}
                </select>

                <hr/>
                <button className='btn btn-dark'> ADD TO CART</button>
           </div>
           
           </div>

       </div>

        </div>
  )
}

export default ProductdescSreen 