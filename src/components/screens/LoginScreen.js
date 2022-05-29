import React, {useState } from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../action/userActions';

function LoginScreen() {

    const dispatch = useDispatch()
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
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-5 card p-3' style={{marginTop : '150px'}}>
                    <div className='div'> 
                    <h6 className='text-center'>Login </h6>
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
                       
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
