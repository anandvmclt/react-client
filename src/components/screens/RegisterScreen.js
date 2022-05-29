import React, {useState } from 'react';
import {useDispatch} from 'react-redux';
import {registerNewUser} from '../../action/userActions';

function RegisterScreen() {

    const dispatch = useDispatch()

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
                       
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen