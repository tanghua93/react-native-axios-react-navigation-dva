import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {Button} from 'antd-mobile'
export default class ScanCode extends React.Component {
    constructor(props) {
        super(props);
        this._navigateToScreen = this._navigateToScreen.bind(this);
    }
    static navigationOptions = ({navigation, screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle: navigation.state.params ? navigation.state.params.headerTitle : '首页',
        headerTitleStyle: {color: '#333'},
        // 设置滑动返回的距离
        gestureResponseDistance: {horizontal: 300},
    });
    state = {
        count: 0
    }
    _navigateToScreen(screen) {
        const {navigate} = this.props.navigation;
        navigate(screen);
    }
    componentWillUnmount(){
        this.state.count = 0;
    }
    render() {
        const {width, height} = Dimensions.get("window");
        return (
            <View style={{width, height}}>
                <Text>b页面</Text>
            </View>
        );
    }
}
