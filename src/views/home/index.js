import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    NativeModules,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import {Grid, Button, Modal, List, InputItem, WingBlank, Toast, Icon} from 'antd-mobile';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    _navigateToScreen(screen, params) {
        const {navigate} = this.props.navigation;
        navigate(screen, params);
    }
    render() {
        const {width, height} = Dimensions.get("window");

        return (
            <View>
                <Button onClick={() => {
                    this._navigateToScreen('B', {headerTitle: 'b页面'})
                }}>跳转到b页面</Button>
            </View>

        );
    }
}

