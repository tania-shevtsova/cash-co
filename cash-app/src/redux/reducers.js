import {combineReducers} from 'redux'
import Types from './types';

const user=(state=null, action)=>{
    switch(action.type){
        case Types.LOGIN_SUCCESS:
        case Types.REGISTER_SUCCESS:
            return action.payload.data;

            case Types.LOGOUT:
                return state;
            default:
                return state;
    }
}

const authenticated=(state=false, action)=>{
    switch(action.type){
        case Types.LOGIN_SUCCESS:
        case Types.REGISTER_SUCCESS:
            return true;
            case Types.LOGOUT:
                return false;
            default:
                return state;
    }
}

const email=(state=null, action)=>{
    switch(action.type){
        case Types.FORGOT_PASSWORD:
            return action.payload;

            default:
                return state;
    }
}

 const token=(state=null, action)=>{
    switch(action.type){
        case Types.LOGIN_SUCCESS:
            return action.payload.data.token;

            case Types.LOGOUT:
                return null;
            default: 
            return state;
    }
}

const error=(state=null, action)=>{
    switch(action.type){
        case Types.LOGIN_ERROR:
        case Types.REGISTER_ERROR:
            case Types.FORGOT_PASSWORD_ERROR:
            return  action.payload.error; 

            default: 
            return state;
    }
}

export default combineReducers({
    user,
    authenticated,
    email,
    token,
    error
})