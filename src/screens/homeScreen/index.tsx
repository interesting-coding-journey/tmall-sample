import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { View, Text, Button  } from 'react-native'

@inject('test')
@observer
class HomeScreen extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: '天猫',
  })

  handleClickWithInc = () => {
    this.props.test.inc()
  }

  handleClickWithDec = () => {
    this.props.test.dec()
  }

  render() {
    return (
      <View>
        <Text>精选</Text>
        <Text>{this.props.test.num}</Text>
        <Button
          onPress={this.handleClickWithInc}
          title="+"
        />
        <Button
          onPress={this.handleClickWithDec}
          title="-"
        />
      </View>
    )
  }
}

export default HomeScreen
