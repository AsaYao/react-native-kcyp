/**
 * Created by chengyao on 16/8/25.
 */

import Common from '../common/constants';
import React,{Component} from 'react';
import {
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';

const cell_w = Dimensions.get('window').width;
const styles = StyleSheet.create({
    containerView: {
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        position:'relative'
    },

    registerStyle:{
        marginTop:30,
        color:'white',
        fontSize:20,
    },

    EMButtonStyle:{
        //marginLeft:24,
        //marginRight:24,
        width:270,
        height:44,
        backgroundColor:'rgb(252,210,49)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:5,
    },
    textInputdefault:{
        flex:7,
        height:44.0,
        backgroundColor:'white',
    },
    imageStyle:{
        resizeMode:'center',
        backgroundColor:'white',
        height:44
    },
    centering: {
        //marginTop:120,
        //height:Common.window.height,
        width:Common.window.width,
        position:"absolute"
    },
});
export default styles;