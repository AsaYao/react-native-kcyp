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
    TextInput,
} from 'react-native';
import NavigatorView from '../../Tool/NavigatorView'
import Common from '../../../common/constants'
import BottomButton from  '../../BottomButton'
var list = {0:[0,'手机号码','姓名','身份证号码'],1:[1,'车牌号','驾驶证号','投保保险公司'],2:[2,'责任']}
class BlameConirm extends React.Component {
    constructor(props) {
        super(props);
        let emptyDataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2)=>r1 != r2,
            sectionHeaderHasChanged:(s1,s2)=>s1 != s2,
        })
        this.state={
            dataSource: emptyDataSource,
            data:{0:[0,'请输入手机号码','请输入姓名','请输入身份证号'],1:[0,'请输入车牌号','所驾驶车辆的车牌号','请选择你的投保公司'],2:[0,'责任']}
        }
    }
    render(){
        return(
            <View>
                <NavigatorView
                    title="责任认定"
                    leftClick={()=>{this._popView()}}
                />
                <View  style={{width:Common.window.width,height:Common.window.height-64,backgroundColor:Common.APP_GROUND_COLOR}}>
                    <ListView
                        style={{flex: 1}}
                        dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                        renderRow={this._renderItem.bind(this)}
                    />
                    <BottomButton text="下一步" bg={Common.APP_MAIN_COLOR} click={this._nextPage.bind(this)}/>
                    <View style={{height:88}}/>
                </View>
            </View>
        );
    }

    _nextPage(){
        this.props.navigator.push({
            component:ACDCondition,
        });
    }

    _renderItem(rowData,sectionId,rowId){
        //if(sectionId == 0){
        //
        //} else if(sectionId == 1){
        //
        //} else if (sectionId == 2){
        //
        //}
        //<Text>{rowData +'  '+ 'rowID:' + rowId +'    '+ 'sectionID:'+sectionId}</Text>
        if(rowId==0){
            return(
                <View style={{backgroundColor:'#cccccc',width:Common.window.width, height:30}}>
                    <Text>请填写本方信息</Text>
                </View>
            )
        }
            return (
                <View style={{backgroundColor:'white',height:44}}>
                    <View style={{flexDirection:'row',alignItems:'center',flex:1, justifyContent: 'space-between',}}>
                        <Text>{list[sectionId][rowId]}</Text>
                        <View>
                            <TextInput
                                style={{borderColor: 'gray', borderWidth: 1,width:200,height:30}}
                                placeholder={rowData}
                            />
                        </View>
                    </View>
                    <View style={styles.horizontalLine}></View>
                </View>
            );
    }

    _popView(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    horizontalLine:{
        //marginTop:5,
        width:Common.window.width,
        height:1,
        backgroundColor:'#ccc',
    }
})

export default BlameConirm;