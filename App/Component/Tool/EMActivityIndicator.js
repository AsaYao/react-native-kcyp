/**
 * Created by chengyao on 16/9/23.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    ActivityIndicator
} from 'react-native';
const [left, top] = [0, 0];
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        position:"absolute",
        width:width,
        height:height,
        left:left,
        top:top,

        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    mask: {
        justifyContent:"center",
        backgroundColor:"#383838",
        opacity:0.6,
        position:"absolute",
        width:width,
        height:height,
        left:left,
        top:top,
    },

})

export default class EMActivityIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: true,
            animating: false,
        };
    }

    render() {
        if (this.state.hide) {
            return (<View />)
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.mask}></View>
                    <View>
                    <ActivityIndicator
                        animating={this.state.animating}
                        color="white"
                        size="small"
                    />
                    <Text style={{backgroundColor:'transparent', color:'white'}}>数据正在请求中,请稍后</Text>

                    </View>
                </View>
            )
        }
    }
    show() {
        if(this.state.hide){
            this.setState({hide: false});
            this.setState({animating: !this.state.animating});
        }
    }

    hidden(){
        if(!this.state.hide){
            this.setState({hide: true});
            this.setState({animating: !this.state.animating});
        }
    }
}