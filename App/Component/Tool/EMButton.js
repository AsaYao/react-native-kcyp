/**
 * Created by chengyao on 16/8/25.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

class EMButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                { /* 在标签上使用多个css样式的时候要用[]给括起来，并且行内样式的优先级大于StyleSheet定义的样式 */ }
                <TouchableOpacity style={[this.props.style, {justifyContent: 'center',  borderRadius: 4}]}
                                  onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color:'white',
        fontSize:17,
    },
});
export default EMButton;