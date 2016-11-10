/**
 * Created by chengyao on 16/9/22.
 */
import * as types from '../actions/types'
const initialState = {
    isLoading : false,
}

export default function loginReducer(state=initialState, action) {
    //console.log(action.isLoading);
    switch (action.type){
        case types.LOGIN_SUCCESS:
            return  Object.assign({},state,{
                isLoading:action.isLoading,
            })
        //    return {
        //        isLoading : action.isLoading,
        //        ...state
        //};

        default:
            return state;
    }
}