/**
 * Created by chengyao on 16/8/22.
 */
import React, {Component} from 'react';
import Common from '../common/constants'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Button extends Component {

    onPressHandler = () => {
        const {click} = this.props;
        click();
    };

    render() {
        // 利用解构取出需要的值
        const {text, bg} = this.props;
        return (
            <View style={styles.container}>
                { /* 在标签上使用多个css样式的时候要用[]给括起来，并且行内样式的优先级大于StyleSheet定义的样式 */ }
                <TouchableOpacity style={[styles.button, {backgroundColor: this.props.bg}]}
                                  onPress={this.onPressHandler}>
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
        marginTop:20,
    },
    button: {
        borderRadius: 4,
        width: Common.window.width -24,
        height:44,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color:'white',
    },
});