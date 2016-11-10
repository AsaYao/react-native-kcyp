/**
 * Created by chengyao on 16/8/22.
 */
import React, {Component} from 'react';
import Common from '../../common/constants'
import  {
    StyleSheet,
    Navigator,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import NavigatorView from '../Tool/NavigatorView'
import BottomButton from '../BottomButton'
import NetUtil from '../Tool/NetUitl'
import Login from './Login'
import {userText} from '../../actions/user'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import {connect} from 'react-redux';

//---------导入style
import registerStyle from '../../style/registerStyle'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            capcharNumber:'',
            passWord:'',
        };
    }

    render(){
        const {dispatch} = this.props;
        return(
            <View style={registerStyle.containerView}>
            <NavigatorView
            title="注册界面"
            leftClick={()=>{this._popView()}}
        />
        <View>
            <TextInput
            autoCapitalize="none"
            placeholder="请输入手机号"
            style={registerStyle.textInputdefault}
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            />
            <TextInput
                autoCapitalize="none"
                placeholder="请输入验证码"
                style={registerStyle.textInputdefault}
                onChangeText={(capcharNumber) => {
                 this.setState({capcharNumber})}}
            />
            <TextInput
                autoCapitalize="none"
                placeholder="请输入6~18位密码"
                style={registerStyle.textInputdefault}
                onChangeText={(passWord) => {
            this.setState({passWord})}}
            />
            <BottomButton text="确定" bg={Common.APP_MAIN_COLOR} click={this._Submit}/>
         </View>
        </View>
        );
    }

    _popView(){
        //dispatch(userChange('123'));
        //Login.callBack('123').bind(Login);
        RCTDeviceEventEmitter.emit('change','123');
        //绑定事件
        this.props.dispatch(userText('你好,帅哥'));
        this.props.navigator.pop();
    }


    _Submit = ()=> {
        //此时获取数据,将数据传到后台
        //fetch('http://121.42.142.197/KCYP_Server_php/user', {
        //    method: 'POST',
        //    headers: {
        //        'Accept': 'application/json',
        //        'Content-Type': 'application/json'
        //    },
        //    body: JSON.stringify({
        //        phoneNumber: '18510896429',
        //        captcha: '6429',
        //        password: '123456',
        //        deviceToken:'a2dfs3232323324',
        //        ua:1,
        //    }),
        //}).then((response)=>response.text())
        //    .then((responseText)=>{
        //        console.log(responseText);
        //    }).catch((error)=>{
        //    console.log(error);
        //});

        NetUtil.postJson('http://121.42.142.197/KCYP_Server_php/user',{
                    phoneNumber: '18510896429',
                    captcha: '6429',
                    password: '123456',
                    deviceToken:'a2dfs3232323324',
                    ua:1,
                },function (set){
            console.log(set);
            console.log(set.token);
        });
    }
}



//const styles = StyleSheet.create({
//    containerView: {
//        flex:1,
//        backgroundColor:APP_GROUND_COLOR,
//    },
//
//    registerStyle:{
//        marginTop:200,
//        color:'white',
//        fontSize:20,
//    },
//    textInputdefault:{
//        height:44,
//        fontSize:13,
//        borderBottomWidth:1,
//        borderColor:APP_GROUND_COLOR,
//    }
//})


//绑定事件
function select(state){
    return{
        //text1 : state.userReducer.text,
        //text2: state.userReducer.userText
    }
}

export default connect(select)(Register);

//export default Register;