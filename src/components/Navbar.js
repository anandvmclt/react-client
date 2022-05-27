import React from 'react'
import {useDispatch , useSelector}  from 'react-redux';

export default function Navbar() {
    const cartreducer = useSelector(state => state.cartReducer)
    const { cartItems} = cartreducer;
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <ul className="navbar-nav ml-auto">


                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    <i className="fas fa-shopping-cart"> {cartItems.length} </i>
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}
