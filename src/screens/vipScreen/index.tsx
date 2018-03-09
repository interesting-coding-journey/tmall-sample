import * as React from 'react'
import { Text } from 'react-native'

class VipScreen extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: '会员',
  })

  render() {
    return (
      <Text>会员</Text>
    )
  }
}

export default VipScreen
