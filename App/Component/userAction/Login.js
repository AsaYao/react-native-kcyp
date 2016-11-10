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
    PixelRatio,
    TouchableOpacity,
    TextInput,
    Modal,
    ActivityIndicator
} from 'react-native';

import register from '../userAction/Register'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import {userChange} from '../../actions/user'
import Person from '../Model/Person'
import NetUtil from '../Tool/NetUitl'
import tips from '../fastDeal/Tips/Tips'
//------导入控件
import EMButton from '../Tool/EMButton'
//导入LoginStyle
import loginStyle from '../../style/loginStyle'
import Home from '../Home'
import EMActivityIndicator from '../Tool/EMActivityIndicator'
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            phoneNumber:'',
            capcharNumber:'',
            animating: false,
        }
    }

    setToggleTimeout() {
        this.setState({animating: !this.state.animating});
      //this.time = setTimeout(() => {
      //
      //      this.setToggleTimeout();
      //  }, 2000);
    }

    //componentDidMount() {
    //
    //}
    //compoentWillUnmout(){
    //    this.timer && clearTimeout(this.timer);
    //}
    render(){
        debugger;
        const {text, userText} = this.props.data;
        return(
            <View style={[loginStyle.containerView,{backgroundColor:Common.APP_MAIN_COLOR}]}>
                <Image source={require('image!ICON')} style={{width:100,height:100, resizeMode:'stretch',marginTop:75.0}}/>

                <View style={{marginTop:57,flexDirection:'row',width:270}}>
                    <Image source={require('image!iphone')} style={loginStyle.imageStyle}/>
                <TextInput
                    autoCapitalize="none"
                    placeholder="请输入手机号"
                    onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                    style={loginStyle.textInputdefault}
                    >
                </TextInput>
                </View>

                <View style={{marginTop:2,flexDirection:'row',width:270,}}>
                    <Image source={require('image!Capchar')} style={loginStyle.imageStyle}/>
                <TextInput
                    autoCapitalize="none"
                    placeholder="请输入验证码"
                    style={loginStyle.textInputdefault}
                    onChangeText={(capcharNumber) => this.setState({capcharNumber})}
                />
                </View>

                <EMButton style={[loginStyle.EMButtonStyle,{marginTop:24}]} text ='登录' onPress={this._login.bind(this)}/>

                {/*
                 <Text style={loginStyle.registerStyle}>{this.state.text}</Text>

                 <Text style={loginStyle.registerStyle}>{text2}</Text>

                 <Text style={loginStyle.registerStyle}>{person.weight}</Text>

                 <Text style={loginStyle.registerStyle} onPress={()=>{this.props.dispatch(userChange('red'))}}>点击改变界面颜色</Text>

                 */}

                <Text style={loginStyle.registerStyle} onPress={()=>{this._RegisterUser()}}>{userText}</Text>
                <EMActivityIndicator ref="Inditor"/>
            </View>
        );
    }
    _RegisterUser(){
        this.props.navigator.push({
            component:register,
        });
    }

    _login(visible){
        //this.setToggleTimeout();
        //1.将数据传递给后台
        this.refs.Inditor.show();
        NetUtil.postJson('http://121.42.142.197/KCYP_Server_php/user',{
            phoneNumber: '18510896429',
            captcha: '6429',
            password: '123456',
            deviceToken:'a2dfs3232323324',
            ua:1,
        },function (set,objectThis) {
            console.log(set);
            console.log(set.token);
            if(set.code == '401'){
               //alert('请求错误');
                objectThis.refs.Inditor.hidden();
            } else {
                //objectThis.props.navigator.push({component: tips});
            }
    },this);
        //2.push到Tips
        this.props.navigator.push({component:tips,index:2});
    }
}


//function select(state){
//    return{
//        text1 : state.userReducer.text,
//        text2: state.userReducer.userText
//    }
//}

//export default connect(select)(Login);

export default Login;
