export const registerNewUserReducer = (state ={}, action) => {
switch(action.type){
    case 'USER_REGISTER_REQUEST': return {
        ...state,
        loading : true
    }

    case 'USER_REGISTER_SUCCESS': return {
        ...state,
        loading : false,
        success : true
    }

    case 'USER_REGISTER_FAILED': return {
        ...state,
        loading : false,
        error : "User already registerd"
    }

    default : return {
        ...state
    }
}
  
}

export const loginReducer = (state ={}, action) => {
    switch(action.type){
        case 'USER_LOGIN_REQUEST': return {
            ...state,
            loading : true
        }
    
        case 'USER_LOGIN_SUCCESS': return {
            ...state,
            loading : false,
            success : true
        }
    
        case 'USER_LOGIN_FAILED': return {
            ...state,
            loading : false,
            error : "User Login Failed"
        }

        case 'USER_LOGOUT_REQUEST': return {
            ...state,
        }
    
        default : return {
            ...state
        }
    }
      
    }