/**
 * Created by chengyao on 16/8/18.
 */
import React, {Component} from 'react';
import  {
    StyleSheet,
    Navigator,
    View,
} from 'react-native';
import Home from './Component/Home';
import BlameConfirm from './Component/fastDeal/BlameConfirm/BlameConirm'
import Demo from './Demo'
import StatusBarIOS from './Component/Tool/StatusBarIOS';
class App extends Component {
    render() {
        let name = 'Home';
        let home = Home;
        //let name = 'Demo';
        //let home = Demo;
        return(
            <View style={styles.container}>
                <StatusBarIOS barStyle="light-content"/>
                <Navigator
                    //ref={component => this.navigator = component}
                    initialRoute={{name:name, component:home}}
                    configureScene={this.configureScene.bind(this)}
                    renderScene={this._renderScene.bind(this)}
                />
            </View>
        );
    }

    configureScene(route, routeStack) {
        let configure = Navigator.SceneConfigs.PushFromRight;
        if (route.type == 'Bottom') {
            configure = Navigator.SceneConfigs.FloatFromLeft; // 底部弹出
        } else {
            {
                configure = Navigator.SceneConfigs.PushFromRight;
            }
            if (route.index == 2) {
                return {
                    ...configure,
                    gestures: {}//或者改成null
                };
            } else {
                return {
                    ...configure,
                }
            }

        }
    }



    _renderScene(route, navigator) {
        if (route && route.component) {
            //子route
            var {component:Component, ...route} = route;
            //let Component = route.component;
            //return <Component navigator={navigator} {...route} />;
            //传递route
            return <Component {...route.passProps} navigator={navigator} />
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default App;