import * as React from 'react'
import { Text } from 'react-native'

class BrandScreen extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: '品牌',
  })

  render() {
    return (
      <Text>品牌页</Text>
    )
  }
}

export default BrandScreen
