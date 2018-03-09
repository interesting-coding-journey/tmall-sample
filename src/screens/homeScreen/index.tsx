import * as React from 'react'
import { Text } from 'react-native'

class HomeScreen extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: '天猫',
  })

  render() {
    return (
      <Text>精选</Text>
    )
  }
}

export default HomeScreen
