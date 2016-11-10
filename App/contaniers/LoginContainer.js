/**
 * Created by chengyao on 16/9/22.
 */
import React from 'react';
import {connect} from 'react-redux';
import Login from '../Component/userAction/Login';

class LoginContainer extends React.Component{
    render(){
        return(
          <Login data={this.props.data} {...this.props}/>
        );
    }
}

export default connect((state)=>{
    debugger;
    const data = state.userReducer;
    return {
        data
    }
})(LoginContainer);