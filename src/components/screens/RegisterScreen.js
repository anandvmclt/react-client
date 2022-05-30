import React, {useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerNewUser} from '../../action/userActions';
import Errors from '../Errors';
import Loader from '../Loader';
import Success from '../Success';

function RegisterScreen() {

    const dispatch = useDispatch()
    const registerState = useSelector(state => state.registerNewUserReducer)
    const {loading, error, success} = registerState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const register = (e) => {
        e.preventDefault()
        const user = {
            name: name,
            email : email,
            password : password }
        if(password === cpassword){
            console.log("Working..");
            dispatch(registerNewUser(user))
        } else {
            alert("Passwords Do not match");
        }

    };
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-5 card p-3' style={{marginTop : '150px'}}>
                    <div className='div'> 
                    <h6 className='text-center'>Register </h6>
                    {loading && (<Loader/>)}
                    {error && ( <Errors error = "User Already Registerd" />)}
                    {success && (<Success success = " Successfully Registerd"/> )}
                    <form onSubmit={register}> 
                    <input type="text" className='form-control' value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder="Name" required />
                    <input type="email" className='form-control' value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email" required />
                    <input type="password" className='form-control' value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Password"  required />
                    <input type="password" className='form-control' value={cpassword}
                        onChange={(e) => { setCpassword(e.target.value) }}
                        placeholder="Confirm Password" required />
                        <div className='text-right'> 
                        <button className='btn mt-3' type='submit' >REGISTER</button>
                        </div>
                        </form>
                       <a className='m-3' href='/login'> Click here to Login </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen