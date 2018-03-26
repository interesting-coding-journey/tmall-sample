import * as React from 'react';
import { SafeAreaView, StatusBar, Text, Button } from 'react-native';
import Styles from './style';
import Carousel from './carousel'

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
      <SafeAreaView style={[Styles.container, { backgroundColor: '#6a51ae' }]}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <Carousel/>
        <Button
          title="Go to Brand"
          onPress={this.handlePress}
        >
        </Button>
      </SafeAreaView>
    );
  }
}
