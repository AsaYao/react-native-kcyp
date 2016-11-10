/**
 * Created by chengyao on 16/8/19.
 */
import React, {Component} from 'react';
import Common from '../../common/constants'
import  {
    StyleSheet,
    Navigator,
    View,
    Text,
    Image,
    PixelRatio,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

var {width} = Dimensions.get('window');
class NavigatorView extends Component {
    render() {
        return (
            <View style={styles.navigator}>
                    <View style={styles.leftBlock}>
                        <TouchableOpacity onPress={this.props.leftClick}
                                          style={styles.touchAction}
                        >
                            <Image
                                source= {this.props.leftImage}
                                style={styles.leftImageStyle}
                            />
                        </TouchableOpacity>
                    </View>

                <View style={styles.middleBlock}>
                <Text
                    style={styles.titleStyle}
                >{this.props.title}</Text>
                </View>

                <View style={styles.rightBlock}>
                    <TouchableOpacity onPress={this.props.rightClick}
                                      style={styles.touchAction}
                    >
                        <Text style={styles.rightText}>
                            {this.props.rightText}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

NavigatorView.defaultProps= {
    leftImage: require('../../../iphone/Public/return.png'),
};

const styles = StyleSheet.create({
    navigator: {
        flexDirection:'row',
        alignItems:'center',
        height:44,
        width:width,
        backgroundColor: Common.APP_MAIN_COLOR,
    },
    leftBlock:{
        height:64.0,
        width:80.0,
        flexDirection:'row',
        alignItems:'center',
    },
    middleBlock:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:64.0,
    },
    rightBlock:{
        height:64.0,
        width:80.0,
        justifyContent:'center',
        alignItems:'flex-end',
        overflow: 'hidden',
    },
    leftImageStyle:{
        marginTop:10,
        marginLeft:12,
    },
    touchAction:{
        width:50,
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:18,
        color:'white',
        marginTop:10,
    },
    rightText:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:10,
        marginRight:10,
        color:'white',
    }
})


export default NavigatorView;