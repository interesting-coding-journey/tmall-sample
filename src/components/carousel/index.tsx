import * as React from 'react'
import { View, Text, Animated, Image } from 'react-native'
import _ from 'lodash'
import Styles from './style'


import * as carouselImageThree from './coursel-3.jpeg'

const carouselImageOne = require("../../../src/media/images/carousel/coursel-1.jpeg")
const carouselImageTwo = require("../../../src/media/images/carousel/coursel-2.jpeg")

interface props {}

class Carousel extends React.Component<props, {}> {

  render() {

    return (
      <View style={Styles.carousel}>
        <Animated.View>
          <Image source={carouselImageOne} style={Styles.image} />
        </Animated.View>
        <Animated.View>
          <Image source={carouselImageTwo} style={Styles.image} />
        </Animated.View>
      </View>
    );
  }
}

export default Carousel
