import { StackNavigator } from 'react-navigation'
import TabNavigation from '../tabNavigation'
import HomeScreen from '../../screens/homeScreen'
import VipScreen from '../../screens/vipScreen'
import BrandScreen from '../../screens/brandScreen'
import CartScreen from '../../screens/cartScreen'
import PersonalScreen from '../../screens/personalScreen'


const $primaryColor = '#1890ff'

const stackNavigatorConfig: any = {
  navigationOptions: {
    headerTitleStyle: {
      fontSize : 18,
      color    : '#fff',
    },
    headerStyle: {
      height          : 40,
      backgroundColor : $primaryColor,
    },
  },
  mode       : 'card',
  headerMode : 'screen',
}

const stackNavigatorRouter: any = {
  Main: {
    screen: TabNavigation,
  },
  Home: {
    screen: HomeScreen,
  },
  Vip: {
    screen: VipScreen,
  },
  Brand: {
    screen: BrandScreen,
  },
  Cart: {
    screen: CartScreen,
  },
  Personal: {
    screen: PersonalScreen,
  },
  PersonalDetail: {
    screen: PersonalScreen,
  },
}

const StackNavigation = StackNavigator(stackNavigatorRouter, stackNavigatorConfig)

export default StackNavigation
