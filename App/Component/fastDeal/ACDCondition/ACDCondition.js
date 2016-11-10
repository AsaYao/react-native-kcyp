/**
 * Created by chengyao on 16/9/28.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Dimensions,
    ListView,
    ScrollView,
    TextInput,
} from 'react-native';
import NavigatorView from '../../Tool/NavigatorView'
import Common from '../../../common/constants'
//import EMButton from '../../Tool/EMButton'
import Button from 'react-native-button'
import BottomButton from  '../../BottomButton'
import BlameConirm from '../BlameConfirm/BlameConirm'
class ACDCondition extends React.Component {
    render(){
        var arr = Array.of('追尾','逆行','倒车','溜车','开关车门','违反交通信号','未按规定让行','并线','全部责任的其他情形','双方应负同等责任的');
        return(
            <View>
                <NavigatorView
                    title="事故情形"
                    leftClick={()=>{this._popView()}}
                />
            <ScrollView style={{backgroundColor:Common.APP_GROUND_COLOR,height:Common.window.height-64,width:Common.window.width}}>
                {/*  {arr.forEach((value)=>this.buttonLayout(value))}*/}
                <View style={{backgroundColor:'transparent',flexDirection:'row', alignItems: 'flex-start',
        justifyContent: 'space-around',flexWrap: 'wrap'}}>
                {arr.map((value,index)=>this.buttonLayout(value,index))}
                </View>
                <TextInput
                    style={{height: 200,width:Common.window.width-20, borderColor: '#dcdcdc', borderWidth: 2,fontSize:17,marginLeft:10,backgroundColor:'#fafafa',marginTop:40}}
                    multiline={true}
                    placeholder="可简单描述事故发生的经过或者结合下面的情况添加信息..."
                />
                <BottomButton text="下一步" bg={Common.APP_MAIN_COLOR} click={this._nextPage.bind(this)}/>
                <View style={{height:88}}/>
            </ScrollView>
                </View>
        );
    }

    buttonLayout(btnName,index){
        //console.log(btnName);
        let padding = 20;
        let column = 3;
        let width = (Common.window.width-padding*(column+1))/column;
        let height = width;
        return(
            <Button
                key = {index}
                containerStyle={{width:width, height:width, overflow:'hidden', borderRadius:4, backgroundColor: 'white',borderWidth:1,borderColor:Common.APP_MAIN_COLOR}}
                style={{fontSize: 17, color: 'green'}}>
                {btnName}
            </Button>
        );

    }

    _popView(){
        this.props.navigator.pop();
    }

    _nextPage(){
        this.props.navigator.push({
            component:BlameConirm,
        });
    }

}



export default ACDCondition;