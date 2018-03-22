import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


import SelectionScreen from './selection/index';
import BrandScreen from './brand/index';
import MemberScreen from './member/index';
import CartScreen from './cart/index';
import MineScreen from './mine/index';

interface tabBarIconProps {
  focused: boolean,
  tintColor: string | null
}

export default TabNavigator({
  Selection: { screen: SelectionScreen },
  Brand: { screen: BrandScreen },
  Member: { screen: MemberScreen },
  Cart: { screen: CartScreen },
  Mine: { screen: MineScreen },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }: tabBarIconProps) => {
      const { routeName } = navigation.state;
      let iconName = '';

      if (routeName === 'Selection') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      return <Icon name={iconName} size={25} color={tintColor || undefined} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});

