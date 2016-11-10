/**
 * Created by chengyao on 16/9/28.
 */
import React, {Component} from 'react';
import  {
    StyleSheet,
    Navigator,
    View,
    ScrollView,
    Text,
    Animated,
    Easing,
} from 'react-native';
class Demo extends Component {

    constructor(props){
        super(props);
        this.state = {
            //fadeInOpacity:new Animated.Value(0),
            //rotation: new Animated.Value(0),
            //fontSize: new Animated.Value(0)
            anim:[1,2,3].map(()=>new Animated.Value(0))
        }
    }

    componentDidMount() {
        var timing = Animated.timing;
        Animated.sequence([
            Animated.stagger(200,this.state.anim.map(left=>{
               return timing(left,{
                   toValue:1,
               });
            }).concat(
                this.state.anim.map(left=>{
                    return timing(left,{
                        toValue:0
                    });
                })
            )),
            Animated.delay(400),
            timing(this.state.anim[0],{
                toValue:1
            }),
            timing(this.state.anim[1],{
                toValue:-1
            }),
            timing(this.state.anim[2],{
                toValue:0.5
            }),
            Animated.delay(400),
            Animated.parallel(this.state.anim.map((anim) => timing(anim, {
                toValue: 0
            }))) // 同时回到原位置

        ]).start();

        //Animated.parallel(['fadeInOpacity','rotation','fontSize'].map(property=>{
        //    return  Animated.timing(this.state[property], {
        //        toValue: 1, // 目标值
        //        duration: 2500, // 动画时间
        //        easing: Easing.linear // 缓动函数
        //    });
        //})).start();
    }

    render(){
        var views = this.state.anim.map(function(value, i) {
            return (
                <Animated.View
                    key={i}
                    style={[styles.demo, styles['demo' + i], {
                    left: value.interpolate({
                        inputRange: [0,1],
                        outputRange: [0,200]
                    })
                }]}>
                    <Text style={styles.text}>我是第{i + 1}个View</Text>

                </Animated.View>
            );
        });
        return(
        <View style={styles.demo}>
            {/*
             <Animated.View style={[styles.demo,{
             opacity: this.state.fadeInOpacity,
             transform: [{
             rotateZ: this.state.rotation.interpolate({
             inputRange: [0,1],
             outputRange: ['0deg', '360deg']
             })
             }]
             }]}>
             <Animated.Text style={{fontSize: this.state.fontSize.interpolate({
             inputRange: [0,1],
             outputRange: [12,17]
             })
             }}>悄悄的我出现了:smiling_imp::dash:</Animated.Text>
             </Animated.View>
             */}
            <Text>sequence/delay/stagger/parallel演示</Text>
            {views}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});
export default Demo;