/**
 * Created by chengyao on 16/8/25.
 */
import React, {Component} from 'react';
import Common from '../../../common/constants';
import EMButton from '../../Tool/EMButton'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    ActionSheetIOS,
} from 'react-native';
import BaiduMap from 'react-native-baidumap';
import KKLocation from 'react-native-baidumap/KKLocation';
import NavigatorView from '../../Tool/NavigatorView'
import BottomButton from  '../../BottomButton'
import TakePick from '../takePick/TakePick'
//import Alert from '../../Tool/Alert'
const {width,heigth} = Dimensions.get('window');
class MapShow extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            text:'text',
        }
    }
    componentDidMount() {
        KKLocation.getCurrentPosition((position) => {
            console.log("location get current position: ", position);
        }, (error) => {
            console.log("location get current position error: ", error);
        },{'timeout':213});
    }
    render(){
        return(
            <View style={styles.containerView}>
                <NavigatorView
                    title="处理流程"
                    leftClick={()=>{this._popView()}}
                />

                <BaiduMap
                    style={{width: width,height:250}}
                    ref="mapView"
                    showsUserLocation={true}
                    followUserLocation={true}
                    //userLocationViewParams={{accuracyCircleFillColor: 'red', image: require('./start_icon.png')}}
                    region = {{latitude: 39.915, longitude: 116.404,latitudeDelta:0.001,longitude:0.001}}
                    annotations={[{latitude: 39.915, longitude: 116.404, title: "这里是北京", subtile: "hello"}]}
                    //overlays={[{coordinates: [{latitude: 39.832136, longitude: 116.34095}, {latitude: 39.832136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.44095}], strokeColor: '#666666', lineWidth: 3}]}
                />

                <View style={styles.cell}>
                    <Image source={require('image!定位01')} style={{width:20,height:20, resizeMode:'contain',marginLeft:10}}/>

                    <Text style={{marginLeft:10}}>地点</Text>
                </View>

                <View style={styles.horizontalLine} />

                <View style={styles.cell}>
                        <Image source={require('image!时钟')} style={{width:20,height:20, resizeMode:'contain',marginLeft:10}}/>
                        <Text style={{marginLeft:10}}>时间</Text>
                </View>

                <View style={styles.horizontalLine} />

                <TouchableHighlight onPress={this._carNumber.bind(this)} activeOpacity={0.5} underlayColor="#cccccc">
                <View style={styles.cell}>
                        <Image source={require('image!汽车')} style={{width:20,height:20, resizeMode:'contain',marginLeft:10}}/>
                        <View style={styles.containCell}>
                            <Text>车辆</Text>
                            <Text>{this.state.text}</Text>
                            </View>
                </View>
                </TouchableHighlight>

                <View style={styles.horizontalLine} />

                <View style={styles.cell}>
                    <Image source={require('image!高速公路')} style={{width:20,height:20, resizeMode:'contain',marginLeft:10}}/>
                    <View style={styles.containCell}>
                            <Text>是否高速</Text>
                            <View>
                        </View>
                    </View>
                </View>

                <View style={styles.horizontalLine} />

                <BottomButton text="下一步" bg={Common.APP_MAIN_COLOR} click={this._Submit.bind(this)} ref="mybutton"/>
                {/* <Alert ref="alert"></Alert> */}
            </View>
        );
    }
    _popView(){
        this.props.navigator.pop();
    }

    _Submit(){
        this.props.navigator.push({
            component:TakePick,
        });
    }

    _carNumber(){
        //this.refs.alert.show("你好","确定","失败",this);
        ActionSheetIOS.showActionSheetWithOptions({
                options: ['一辆','二辆','三辆','Cancel'],
                cancelButtonIndex: 3,
            },
            (buttonIndex) => {
                if(buttonIndex == 0){
                        alert('0');
                } else if (buttonIndex == 1){
                    alert('1');
                } else if (buttonIndex == 2){
                    alert('2');
                }
            });
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex:1,
        backgroundColor:Common.APP_GROUND_COLOR,
    },
    cell:{
        width:Common.window.width,
        flexDirection:'row',
        height:44,
        alignItems:'center'
    },
    horizontalLine:{
        //marginTop:5,
        height:0.5,
        backgroundColor:'#ccc',
    },
    containCell:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft:10,
        width:Common.window.width-20-20,
        height:44,
    }
});

export default MapShow;