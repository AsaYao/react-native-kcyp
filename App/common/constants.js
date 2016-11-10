/**
 * Created by chengyao on 16/8/18.
 */
import {Dimensions} from 'react-native';
const window = {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}

const APP_HEIGHT_SCALE = window.height/667;
const APP_WIDTH_SCALE = window.width/375;
const APP_MAIN_COLOR = '#267aeb'; // APP主颜色
const APP_GROUND_COLOR = 'rgb(252,252,246)' //APP底色

export default {
    window:window,
    APP_MAIN_COLOR:APP_MAIN_COLOR,
    APP_GROUND_COLOR:APP_GROUND_COLOR,
    APP_HEIGHT_SCALE:APP_HEIGHT_SCALE,
    APP_WIDTH_SCALE:APP_WIDTH_SCALE,
};