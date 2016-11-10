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
        backgroundColor:Common.APP_GROUND_COLOR,
    },

    registerStyle:{
        marginTop:200,
        color:'white',
        fontSize:20,
    },
    textInputdefault:{
        height:44,
        fontSize:13,
        borderBottomWidth:1,
        borderColor:Common.APP_GROUND_COLOR,
    }
});

export default styles;