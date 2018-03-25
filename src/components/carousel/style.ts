import { StyleSheet } from 'react-native'

import ScreenUtil from '../../utils/screenUtil.js'

const { getScreenScale } = ScreenUtil

const styles = StyleSheet.create({
  carousel: {
    marginHorizontal: getScreenScale(20),
  },
  image: {
    width  : getScreenScale(710),
    height : getScreenScale(266),
  }
})

export default styles
