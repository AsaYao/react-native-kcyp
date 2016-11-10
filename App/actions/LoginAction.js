/**
 * Created by chengyao on 16/9/22.
 */
import * as types from './types'
import netTool from '../Component/Tool/NetUitl'
export let loadSuccess = ()=>{
    let URL = 'http://food.boohee.com/fb/v1/home/banners';
    return dispatch => {
       return netTool.get(URL,(response)=>{
           dispatch(isSuccess());
       })
    }
}

let isSuccess = ()=>{
    return {
        type:types.LOGIN_SUCCESS,
        isLoading:true,
    }
}