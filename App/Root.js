/**
 * Created by chengyao on 16/8/18.
 */
import React , {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/StoreIndex';
import App from './App';
const store = configureStore();
class Root extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default Root;