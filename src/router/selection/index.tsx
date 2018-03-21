import * as React from 'react';
import { SafeAreaView, StatusBar, Text, Button } from 'react-native';
import Styles from './style';
import EsayEnter from '../../components/esayEnter';

interface props {
  navigation: any
}
interface Options {
  navigation: any
}

export default class SelectionScreen extends React.Component<props, {}> {

  static navigationOptions = ({ navigation }:Options) => {
    const params = navigation.state.params || {}

    return {
      headerTitle: "精选",
      headerRight: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
    }
  }

  handlePress = () => this.props.navigation.navigate('Brand', {
    id: 56,
    name: 'Romens',
    title: '品牌'
  })

  render() {
    return (
      <SafeAreaView style={[Styles.container]}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <Text>精选页面</Text>
        <EsayEnter />
        <Button
          title="Go to Brand"
          onPress={this.handlePress}
        ></Button>
      </SafeAreaView>
    );
  }
}
