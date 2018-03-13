import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from './style';

import Hello from '../components/Hello';
import SelectionScreen from './selection/index';
import BrandScreen from './brand/index';
import MemberScreen from './member/index';
import CartScreen from './cart/index';
import MineScreen from './mine/index';

export default TabNavigator({
  Selection: { screen: SelectionScreen },
  Brand: { screen: BrandScreen },
  Member: { screen: MemberScreen },
  Cart: { screen: CartScreen },
  Mine: { screen: MineScreen }
})



