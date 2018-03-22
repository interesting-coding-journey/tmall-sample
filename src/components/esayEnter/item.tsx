import * as React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import Styles from './style'

const suning = require('./suning.jpg')

interface Props {
  name?: string,
  image?: any
}

const Item = (props: Props) => (
  <TouchableOpacity
    style={Styles.item}
  >
    <Image style={Styles.image} source={props.image} />
    <Text style={Styles.name}>{props.name}</Text>
  </TouchableOpacity>
)

export default Item
