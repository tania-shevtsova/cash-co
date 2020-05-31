import {combineReducers} from 'redux'
import Types from './types';

const user=(state=null, action)=>{
    switch(action.type){
        case Types.LOGIN_SUCCESS:
        case Types.REGISTER_SUCCESS:
            console.log('USER', action.payload.data)
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
            console.log(action.payload.error)
            return  action.payload.error; 
            // action.payload.error;

            default: 
            return state;
    }
}

export default combineReducers({
    user,
    authenticated,
    token,
    error
})