import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from '../../screens/homeScreen'
import BrandScreen from '../../screens/brandScreen'
import VipScreen from '../../screens/vipScreen'
import CartScreen from '../../screens/cartScreen'
import PersonalScreen from '../../screens/personalScreen'

const routeConfigs: any = {
  Home: {
    screen            : HomeScreen,
    navigationOptions : {
      tabBarLabel : '精选',
      tabBarIcon  : (props: any) => {
        const tintColor = props.tintColor
        
        return (
          <Icon name="home" color={tintColor} size={24} />
        )
      },
    },
  },
  Brand: {
    screen            : BrandScreen,
    navigationOptions : {
      tabBarLabel : '品牌',
      tabBarIcon  : (props: any) => {
        const tintColor = props.tintColor

        return (
          <Icon name="diamond" color={tintColor} size={24} />
        )
      },
    },
  },
  Vip: {
    screen            : VipScreen,
    navigationOptions : {
      tabBarLabel : '会员',
      tabBarIcon  : (props: any) => {
        const tintColor = props.tintColor

        return (
          <Icon name="credit-card" color={tintColor} size={24} />
        )
      },
    },
  },
  Cart: {
    screen            : CartScreen,
    navigationOptions : {
      tabBarLabel : '购物车',
      tabBarIcon  : (props: any) => {
        const tintColor = props.tintColor

        return (
          <Icon name="shopping-cart" color={tintColor} size={24} />
        )
      },
    },
  },
  Personal: {
    screen            : PersonalScreen,
    navigationOptions : {
      tabBarLabel : '我',
      tabBarIcon  : (props: any) => {
        const tintColor = props.tintColor

        return (
          <Icon name="user" color={tintColor} size={24} />
        )
      },
    },
  },
}

const tabNavigatorConfig: any = {
  tabBarComponent  : TabBarBottom,
  tabBarPosition   : 'bottom',
  swipeEnabled     : false,
  animationEnabled : false,
  lazy             : true,
  initialRouteName : '',
  backBehavior     : 'none',
  tabBarOptions    : {
    activeTintColor   : 'red',
    inactiveTintColor : '#000',
    showIcon          : true,
    showLabel         : true,
    upperCaseLabel    : false,
    pressColor        : '#823453',
    pressOpacity      : 0.8,
    tabStyle          : {
      // height: 30,
    },
    style: {
      backgroundColor : '#fff',
      paddingBottom   : 0,
      borderTopWidth  : 0.5,
      borderTopColor  : '#ccc',
    },
    labelStyle: {
      fontSize : 12,
      margin   : 0,
    },
    indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
  },
}

const TabNavigation = TabNavigator(routeConfigs, tabNavigatorConfig)

export default TabNavigation
