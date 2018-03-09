import * as React from 'react'
import {  StyleSheet, Text } from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import DrawerHomePage from '../DrawerHomePage';
import DrawerLeftPage from '../DrawerLeftPage';

const Drawer = DrawerNavigator(
    {
      Home:{
        screen:DrawerHomePage,
      },
      Left:{
        screen:DrawerLeftPage
      }
    },
    {
      drawerWidth:300,
      drawerPosition:'left',
    }
);


class HomeScreen extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: '天猫',
  })

  render() {
    return (
        <Drawer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default HomeScreen
