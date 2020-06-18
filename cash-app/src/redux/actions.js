import Types from './types';

export const registerRequest = () =>{
    return {
        type: Types.REGISTER_REQUEST
    }
}

export const registerSuccess=(data)=>{
    return {
            type: Types.REGISTER_SUCCESS,
            payload: {data}
    }
}

export const registerError =(error)=>{
    return {
        type: Types.REGISTER_ERROR,
        payload: {error}
    }
}

export const forgotPassword=(data)=>{
    return {
            type: Types.FORGOT_PASSWORD,
            payload: {data}
    }
}

export const forgotPasswordError =(error)=>{
    return {
        type: Types.FORGOT_PASSWORD_ERROR,
        payload: {error}
    }
}

export const loginRequest = () =>{
    return {
        type: Types.LOGIN_REQUEST
    }
}

export const loginSuccess=(data)=>{
    return {
            type: Types.LOGIN_SUCCESS,
            payload: {data}
    }
}

export const loginError =(error)=>{
    return {
        type: Types.LOGIN_ERROR,
        payload: {error}
    }
}

export const refreshRequest=()=>{
    return {
        type: Types.REFRESH_REQUEST
    }
}

export const refreshSuccess=(data)=>{
    return {
        type: Types.REFRESH_SUCCESS,
        payload: {data}
    }
}
export const refreshError=(error)=>{
    return {
        type: Types.REFRESH_ERROR,
        payload: {error}
    }
}

export const logout=()=>{
    return {
        type: Types.LOGOUT
    }
}