import {combineReducers} from 'redux'
import Types from './types';

const user=(state=null, action)=>{
    switch(action.type){
        case Types.LOGIN_SUCCESS:
        case Types.REGISTER_SUCCESS:
            return action.payload.data;

            default:
                return state;
    }
}

const authenticated=(state=false, action)=>{
    switch(action.type){
        case Types.LOGIN_SUCCESS:
        case Types.REGISTER_SUCCESS:
            return true;
            default:
                return state;
    }
}

const token=(state=null, action)=>{
    switch(action.type){
        case Types.LOGIN_SUCCESS:
            return action.payload.data;

            default: 
            return state;
    }
}

const error=(state=null, action)=>{
    switch(action.type){
        case Types.LOGIN_ERROR:
        case Types.REGISTER_ERROR:
            return action.payload.error;

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