import * as React from 'react'
import { Text } from 'react-native'

class PersonalScreen extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: '我',
  })

  render() {
    return (
      <Text>个人中心</Text>
    )
  }
}

export default PersonalScreen
