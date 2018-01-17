import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers,
    TabBarBottom
} from 'react-navigation';
import React, {Component} from 'react'
import {connect} from 'dva'
import {
    Image
} from 'react-native';

import Home from '../views/home'
import B from '../views/home/b'

const Tab = TabNavigator({
    //每一个页面的配置
    Home: {
        screen: Home,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '首页',
            headerStyle: {backgroundColor: '#108ee9'},//导航栏的样式,
            headerLeft: null,
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                fontSize: 16,
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../images/ic_type.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),

        },
    }

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: false,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性
    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#108ee9',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    }
});
const AppNavigator = StackNavigator({
    Tab: {
        screen: Tab,
    },
    B: {
        screen: B
    }
}, {});

@connect(({router}) => ({router}))
export default class Router extends Component {
    render() {
        const {dispatch, router} = this.props
        const navigation = addNavigationHelpers({dispatch, state: router})
        return <AppNavigator navigation={navigation}/>
    }
}

export function routerReducer(state, action = {}) {
    return AppNavigator.router.getStateForAction(action, state)
}
