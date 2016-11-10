/**
 * Created by chengyao on 16/8/18.
 */
import {combineReducers} from 'redux';
import userReducer from './userChange';
import Login from './LoginReducer'
const rootReducer = combineReducers({
    userReducer,
    Login,
});

export default rootReducer;