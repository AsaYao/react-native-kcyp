/**
 * Created by chengyao on 16/8/19.
 */
import React, {Component} from 'react';
import Common from '../../../common/constants';
import Swiper from 'react-native-swiper'
import EMButton from '../../Tool/EMButton'
import mapShow from '../MapShow/mapShow'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Tips extends React.Component {
    render() {
        var textArr = Array.of('1.事故车辆熄火断电,拉手刹,把钥匙.','2.开启危险报警闪光灯',"3.如在告诉公路,需要在车后方防止危险警告牌","4.如夜间事故还需要开示侍郎等和尾灯");

        return (
            <Swiper style={styles.wrapper} loop={false}>
                <View style={styles.slide1}>
                    <View style={styles.cardStyle}>
                        <View style={{flexDirection:'row',marginTop:17,alignItems:'center'}}>
                            <Image source={require('image!tips')} style={styles.imageStyle}></Image>
                            <View style={styles.textStyle}>
                            <Text style={{color:'#474747'}}>必读</Text>
                            </View>
                        </View>
                        <View style={styles.containViewStyle}>
                            <Text style={styles.textStyle1}>{textArr[0]}</Text>
                            <View style={{flexDirection:'row',}}>
                            <Image source={require('image!手刹')} style={styles.imageStyle1}></Image>
                            <Image source={require('image!钥匙')} style={styles.imageStyle1}></Image>
                            </View>
                        </View>
                        <View style={styles.containViewStyle}>
                                <Text style={styles.textStyle1}>{textArr[1]}</Text>
                                <View style={{flexDirection:'row',}}>
                                    <Image source={require('image!警示牌')} style={styles.imageStyle1}></Image>
                            </View>
                        </View>
                        <View style={styles.containViewStyle}>
                                <Text style={styles.textStyle1}>{textArr[2]}</Text>
                                <View style={{flexDirection:'row',}}>
                                    <Image source={require('image!警报灯')} style={styles.imageStyle1}></Image>
                            </View>
                        </View>
                        <View style={styles.containViewStyle}>
                                <Text style={styles.textStyle1}>{textArr[3]}</Text>
                                <View style={{flexDirection:'row',}}>
                                    <Image source={require('image!手刹')} style={styles.imageStyle1}></Image>
                                </View>
                        </View>
                    </View>
                </View>
                <View style={styles.slide1}>
                    <View style={styles.cardStyle}>
                        <Image source={require('image!提醒')} style={styles.remindIcon}></Image>
                        <View style={{marginTop:30, backgroundColor:'transparent',
        width:Common.window.width==320?220*scale:220*Common.APP_WIDTH_SCALE,
        height:Common.window.width==320?220*scale:220*Common.APP_HEIGHT_SCALE,
        marginLeft:35,}}>
                            <Text style={{color:'#9a9a9a'}}>若有以下情形之一,驾驶人应立即报警,在现场等候交警处理.无以下情况的继续处理</Text>
                             <View style={{flexDirection:'row',marginTop:29}}>
                                 <View style={{backgroundColor:'yellow',width:6,height:13,marginLeft:6}}>
                                </View>
                                 <Text style={{marginLeft:6,marginTop:10}}>任意一方车辆无号牌</Text>
                             </View>
                            <View style={{flexDirection:'row'}}>
                                 <View style={{backgroundColor:'yellow',width:6,height:13,marginLeft:6}}>
                                 </View>
                                 <Text style={{marginLeft:6,marginTop:10}}>任意一方驾驶人无驾驶证</Text>
                                </View>
                            <View style={{flexDirection:'row'}}>
                                 <View style={{backgroundColor:'yellow',width:6,height:13,marginLeft:6}}>
                                 </View>
                                 <Text style={{marginLeft:6,marginTop:10}}>任意一方驾驶人有饮酒嫌疑</Text>
                                </View>
                            <View style={{flexDirection:'row'}}>
                                 <View style={{backgroundColor:'yellow',width:6,height:13,marginLeft:6}}>
                                 </View>
                                 <Text style={{marginLeft:6,marginTop:10}}>任意一方有人员伤亡</Text>
                                </View>
                             </View>


                        <View style={styles.bottomView}>
                            <EMButton style={styles.buttonStyle} text='立即报警'/>
                            <EMButton style={styles.buttonStyle} text='继续处理' onPress={this._continueDeal.bind(this)}/>
                        </View>

                    </View>
                </View>
            </Swiper>
        );
    }
    _continueDeal(){
        this.props.navigator.push({component:mapShow});
    }
}
let scale = 0.95;
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    cardStyle:{
        backgroundColor:'#fcfcf6',
        width:Common.window.width==320?289*scale:Common.APP_WIDTH_SCALE*289,
        height:Common.window.width==320?470*scale:Common.APP_HEIGHT_SCALE*470,
        borderRadius:7,
    },
    imageStyle:{
        width:32,
        height:24,
    },
    imageStyle1:{
        left:30,
        marginLeft:20,
        backgroundColor:'transparent',
        width:Common.window.width==320?0.7*75:75*Common.APP_WIDTH_SCALE,
        height:Common.window.width==320?0.7*75:75*Common.APP_HEIGHT_SCALE,resizeMode:'contain'
    },
    //6s
//5s 6s 2x 6splus 3x contain
    //6s 常规:按比例缩小
    //单独 5s
    //视图 :可滑动
    // height 不变
    //width:变
    //字体不会
    textStyle:{
        backgroundColor:'rgb(252,210,49)',
        width:50,
        height:24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle1:{
        color:'#474747',
        width:Common.window.width==320?220*scale:220*Common.APP_WIDTH_SCALE,
    },
    containViewStyle:{
        backgroundColor:'transparent',
        width:Common.window.width==320?220*scale:220*Common.APP_WIDTH_SCALE,
        height:Common.window.width==320?90*scale:90*Common.APP_HEIGHT_SCALE,
        marginLeft:35,
    },
    buttonStyle:{
        backgroundColor:'rgb(59,170,252)',
        width:Common.window.width==320?120*scale:Common.APP_WIDTH_SCALE*120,
        height:32,
        marginLeft:Common.window.width==320?12:Common.APP_WIDTH_SCALE*25,
    },
    bottomView:{
        height:34,
        width:Common.window.width==320?290*scale:Common.APP_WIDTH_SCALE*290,
        marginTop:60,
        flexDirection:'row',
    },
    remindIcon: {
        width: Common.window.width == 320 ? 289 * scale : Common.APP_WIDTH_SCALE * 289,
        height: Common.window.width == 320 ? 60 * scale : Common.APP_HEIGHT_SCALE * 60,
        resizeMode:'contain',
        marginTop:20,
    }

});


export default Tips;