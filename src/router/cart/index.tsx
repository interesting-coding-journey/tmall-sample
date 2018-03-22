import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Styles from './style';

interface props {
  navigation: any
}
interface Options {
  navigation: any
}

export default class CartScreen extends React.Component<props, {}> {
  static navigationOptions = ({ navigation }:Options) => ({
    headerTitle: '购物车',
    headerRight: (
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Info"
        color="#fff"
      />
    ),
  })

  handlePress = () => this.props.navigation.navigate('Brand', {
    id: 56,
    name: 'Romens',
    title: '品牌',
  })

  render() {
    return (
      <View style={[Styles.container, { backgroundColor: '#6a51ae' }]}>
        <Text>精选页面</Text>
        <Button
          title="Go to Brand"
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
