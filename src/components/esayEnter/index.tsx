import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import _ from 'lodash';
import Styles from './style';
const suning = require('./suning.jpg');
interface props {
}

class EsayEnter extends React.Component<props, {}> {

  render() {
    const dataSource = [{
      name: '苏宁易购',
      image: './images/suning.jpg',
    }, {
      name: '天猫超市',
      image: './images/tmallSupermarket.png',
    }, {
      name: '天猫国际',
      image: './images/tmallInternational.jpeg',
    }, {
      name: '聚划算',
      image: './images/juhuasuan.jpeg',
    }, {
      name: '分类',
      image: './images/classification.jpeg',
    }]

    const list = _.map(dataSource, (item: any, index: any) => (
      <TouchableOpacity
        key={index}
        style={Styles.item}
      >
        <Image style={Styles.image} source={suning} />
        <Text numberOfLines={1} style={Styles.name}>{item.name}</Text>
      </TouchableOpacity>
    ))
    return (
      <View style={Styles.esayEnterContainer}>
        {list}
      </View>
    );
  }
}

export default EsayEnter
