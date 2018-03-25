import * as React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import Styles from './style'

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
