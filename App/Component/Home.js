/**
 * Created by chengyao on 16/8/18.
 */

import React, {Component} from 'react';
//import {APP_MAIN_COLOR, APP_GROUND_COLOR} from '../common/constants'
import  {
    StyleSheet,
    Navigator,
    View,
    Text,
    Image,
    PixelRatio,
    TouchableOpacity,
} from 'react-native';

import userInfo from './useInfo/userInfo';
import Login from '../contaniers/LoginContainer';

import Common from '../common/constants'
class ListImage extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.3}>
                <View style={styles.containerView}>
                    <Image source= {this.props.image}/>
                <Text style={{marginTop:Common.window.height/667 *10,color:this.props.color}}>
                    {this.props.text}
                </Text>
               </View>
            </TouchableOpacity>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex:0
        };
    }
    render() {
            return (
                    <View style={styles.container}>
                        <View style={styles.textView}>
                            <Text style={{color:'white',fontSize:30}}>
                                快速
                                <Text style={{fontSize:24}}>
                                    处理&nbsp;&nbsp;&nbsp;&nbsp;
                                </Text>
                            </Text>
                            <Text style={{color:'white',fontSize:30}}>
                                轻松
                                <Text style={{fontSize:24}}>
                                    出行
                                </Text>
                            </Text>
                        </View>

                        <TouchableOpacity onPress={()=>{this._presentToLoginPage()}}>
                            <View style={styles.imageView}>
                                <Image
                                    style={styles.icon}
                                    source={require('image!fastDeal')}/>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row',
        justifyContent: 'center', marginTop:Common.window.height/667 * 50}}>
                            <Image
                                style={{resizeMode:'cover', width:Common.window.width}}
                                source={require('image!arc')}/>
                        </View>

                        <View style={styles.BottomView}>
                            <ListImage
                                onPress={()=>{this._pushToUserInfo()}}
                                image={require('image!userInfo')}
                                text="使用说明"
                                color='rgb(255,210,3)'
                            />
                            <ListImage
                                image={require('image!blameConfirm')}
                                text="图解定则"
                                color='rgb(21,193,130)'
                            />

                            <ListImage
                                image={require('image!myCenter')}
                                text="个人中心"
                                color='rgb(243,118,186)'
                            />
                        </View>
                    </View>

                );
        }

    _pushToUserInfo(){
        this.props.navigator.push({
            component:userInfo,
        });
    }
    //

    _presentToLoginPage(){
        //this.setState({pageIndex:1});
        this.props.navigator.push({
                    component:Login,
                });
    }

}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:Common.APP_MAIN_COLOR,
    },
    baseView:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textView:{
        height:30,
        marginTop:Common.window.height/667 * 67,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageView:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon:{
        marginTop:Common.window.height/667 * 52,
        width:Common.window.height/667 * 250,
        height:Common.APP_HEIGHT_SCALE * 250,
        resizeMode:'contain',
    },
    BottomView:{
        flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        backgroundColor:Common.APP_GROUND_COLOR,
        marginBottom:0,
        marginTop:0
    },
    buttonIcon:{
        resizeMode:'contain',
    },
    containerView:{
        margin:20,
        justifyContent: 'center',
        alignItems:'center',
    }

});
export default Home;