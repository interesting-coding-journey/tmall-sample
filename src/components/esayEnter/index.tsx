import * as React from 'react'
import { View } from 'react-native'
import _ from 'lodash'
import Item from './item'
import Styles from './style'
import data from './mock'

interface props {}

class EsayEnter extends React.Component<props, {}> {

  render() {

    const list = _.map(data, (item: any, index: number) => (
      <Item key={index} name={item.name} image={item.image} />
    ))

    return (
      <View style={Styles.esayEnterContainer}>
        {list}
      </View>
    );
  }
}

export default EsayEnter
