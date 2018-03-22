import { StyleSheet } from 'react-native'

import ScreenUtil from '../../utils/screenUtil.js'

const { getScreenScale } = ScreenUtil

const styles = StyleSheet.create({
  esayEnterContainer: {
    flexDirection     : 'row',
    justifyContent    : 'space-around',
    alignItems        : 'center',
    paddingHorizontal : getScreenScale(20),
    paddingBottom     : getScreenScale(20),
  },
  item: {
    width      : getScreenScale(140),
    height     : getScreenScale(150),
    alignItems : 'center',
  },
  image: {
    width     : getScreenScale(96),
    height    : getScreenScale(96),
    marginTop : getScreenScale(10),
  },
  name: {
    marginTop: getScreenScale(16),
  },
})

export default styles
