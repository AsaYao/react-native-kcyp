/**
 * Created by chengyao on 16/8/22.
 */
import * as TYPES from './types';

export function userChange(text){
    return (dispatch)=>{
        dispatch({'type':TYPES.USER_CHANGE,text:text});
    }
}


export function userText(text){
    return (dispatch)=>{
        dispatch({'type':TYPES.USER_TEXT,text:text});
    }
}