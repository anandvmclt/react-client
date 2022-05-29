import axios from "axios";

export const registerNewUser = (user) => dispatch => {
    dispatch({type: 'USER_REGISTER_REQUEST'})

    axios.post("/api/user/register", user)
    .then(res =>{
        dispatch({type: 'USER_REGISTER_SUCCESS'})
        console.log(res);
    })
    .catch(err => {
        console.log(err);
        dispatch({type: 'USER_REGISTER_FAILED', payload : err})
    })


}

export const loginUser = (user) => dispatch => {
    dispatch({type: 'USER_LOGIN_REQUEST'})

    axios.post("/api/user/login", user)
    .then(res =>{
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        dispatch({type: 'USER_LOGIN_SUCCESS'})
        window.location.href = "/"
        
    })
    .catch(err => {
        console.log(err);
        dispatch({type: 'USER_LOGIN_FAILED', payload : err})
    })


}


export const logoutUser = (user) => dispatch => {
    
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItem');
    dispatch({type: 'USER_LOGOUT_REQUEST'})
    window.location.href = "/"
    }
