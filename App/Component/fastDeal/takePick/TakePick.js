/**
 * Created by chengyao on 16/9/26.
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
    ListView
} from 'react-native';

import NavigatorView from '../../Tool/NavigatorView'
import Common from '../../../common/constants';
import ImagePickerManager from 'react-native-image-picker'
import BottomButton from  '../../BottomButton'
import ACDCondition from '../ACDCondition/ACDCondition'
class TakePick extends React.Component {
    constructor(props) {
        super(props);
        let dividerHorizontal = 10;
        let column =  3;
        let emptyDataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2)=>r1 != r2
        })

        this.state = {
            dataSource: emptyDataSource,
            data:['1','2','3','4','5'],
            column: column,
            viewWidth: Common.window.width,
            dividerHorizontal: dividerHorizontal,
            avatarSource:{}
        };
    }

     options = {
        title: 'Select Avatar', // specify null or empty string to remove the title
        cancelButtonTitle: 'Cancel',
        takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
        chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
        cameraType: 'back', // 'front' or 'back'
        mediaType: 'photo', // 'photo' or 'video'
        videoQuality: 'high', // 'low', 'medium', or 'high'
        maxWidth: 100, // photos only
        maxHeight: 100, // photos only
        quality: 0.2,
    }

    render(){
        let refreshControl = this.props.refreshControl ? this.props.refreshControl : null;
        return (
            <View style={styles.containerView}  onLayout={(event)=> {
                    let width = event.nativeEvent.layout.width;
                    if (!width || width === this.state.viewWidth)
                        return;
                    this.setState({
                        'viewWidth': width,
                        'dataSource': this.props.dataSource
                    })
                }}>
                <NavigatorView
                    title="处理流程"
                    leftClick={()=>{this._popView()}}
                />

                <View  style={{width:Common.window.width-20,height:Common.window.height-64-88,marginLeft:10,backgroundColor:'blue'}}>
                    <ListView
                    style={{flex: 1}}
                    contentContainerStyle={styles.contentContainerStyle}
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={this._renderItem.bind(this)}
                    refreshControl={refreshControl}
                />
                </View>
                <BottomButton text="下一步" bg={Common.APP_MAIN_COLOR} click={this._nextPage.bind(this)}/>
            </View>
        );
    }


    _nextPage(){
        this.props.navigator.push({
            component:ACDCondition,
        });
    }
    _popView(){
        this.props.navigator.pop();
    }

    _renderItem(data) {
        let viewWidth = this.state.viewWidth;
        let column = this.state.column;
        let dividerHorizontal = this.state.dividerHorizontal;
        // (320 - (10 * 2 - 10)) /2
        let itemWidth = (viewWidth - (column+1) * dividerHorizontal) / column;
        return (
            <TouchableWithoutFeedback onPress={this._takePick.bind(this)}>
            <View style={{marginLeft:dividerHorizontal,width: itemWidth,height:itemWidth,backgroundColor:'red',borderColor:'blue',borderWidth:1, flexDirection:'column'}}>
                <Image source={data} style={{width:itemWidth,height:itemWidth-20, resizeMode:'contain'}}/>
                <Text>
                    我我我
                </Text>
            </View>
            </TouchableWithoutFeedback>
        );
    }

    _takePick(){
        ImagePickerManager.showImagePicker(this.options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker222');
            }
            else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either data:
                //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // uri (on iOS)
                //const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                // uri (on android)
                const source = {uri: response.uri, isStatic: true};
               var arr = this.state.data;
                arr.splice(1,1,source);
                this.setState({
                    avatarSource: source,
                    data:arr
                });
            }
        });
    }

}
const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: Common.APP_GROUND_COLOR,
    },
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
});

export default TakePick;