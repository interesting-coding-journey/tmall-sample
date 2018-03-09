import * as React from 'react'
import { Text } from 'react-native'

class CartScreen extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: '购物车',
  })

  render() {
    return (
      <Text>购物车</Text>
    )
  }
}

export default CartScreen
