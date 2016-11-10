/**
 * Created by chengyao on 16/8/22.
 */
import * as TYPES from '../actions/types';
import {APP_MAIN_COLOR, APP_GROUND_COLOR} from '../common/constants'
const initialState = {
    text:APP_MAIN_COLOR,
    userText:'姚祚成帅哥',
};
export default function user(state=initialState, action) {
    switch(action.type){
        case TYPES.USER_CHANGE:
            return{
                ...state,
                text:action.text,
            }
        //当时传过去的时候..
        case  TYPES.USER_TEXT:
            return{
                ...state,
                userText:action.text,
            }
        default:
            return state;
    }
}