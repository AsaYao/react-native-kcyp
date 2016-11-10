/**
 * Created by chengyao on 16/8/19.
 */
import React, {Component} from 'react';
import {APP_MAIN_COLOR, APP_GROUND_COLOR} from '../../common/constants'
import  {
    StyleSheet,
    Navigator,
    View,
    Text,
    Image,
    PixelRatio,
    TouchableOpacity,
} from 'react-native';
import NavigatorView from '../Tool/NavigatorView'
//导入react-native-swiper
import Swiper from 'react-native-swiper'

class userInfo extends Component {
    render(){
        var imageArr = [];
        for (var i = 0 ; i < 20 ; i ++){
            imageArr.push(i);
        }

        return(
            <View style={styles.container}>
                <NavigatorView
                    title="使用说明"
                    leftClick={()=>{this._popView()}}
                />

                <Swiper style={styles.wrapper}  horizontal={false}>
                    {this._imageReturn(imageArr)}
                </Swiper>
            </View>
        );
    }
    _popView(){
        this.props.navigator.pop();
    }
    _imageReturn(imageArr){
        return imageArr.map(item => this.renderItem(item+1) );
    }
    renderItem(item) {
        return (
            //如何将路径串起来
            <Image source={require('../../../iphone/UseInfo/1.png')} key={item} />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:APP_GROUND_COLOR,
    },


    slide1: {
        flex: 1,
        justifyContent: 'center',
    },

});

export default userInfo;