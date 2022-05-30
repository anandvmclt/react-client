import React, {useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../action/userActions';
import Errors from '../Errors';
import Loader from '../Loader';

function LoginScreen() {

    const dispatch = useDispatch()
    const loginReducer = useSelector(state => state.loginReducer)
    const {loading, error} = loginReducer
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()
        const user = {
            email : email,
            password : password }
        if(password){
            dispatch(loginUser(user))
        } else {
            alert("Passwords Do not match");
        }
    };
    
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = "/"
        }
    },[])

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-3 card p-3' style={{marginTop : '150px'}}>
                    <div className='div'> 
                    <h6 className='text-center'>Login </h6>
                    {error && ( <Errors error = "Invalid Credentials" />)}
                    {loading && (<Loader/>)}
                    <form onSubmit={login}> 
              
                    <input type="email" className='form-control' value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email" required />
                    <input type="password" className='form-control' value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Password"  required />
                        <div className='text-right'> 
                        <button className='btn mt-3' type='submit' >LOGIN</button>
                        </div>
                        </form>
                        <a className='m-3'  href='/register'> Click here to Register </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
