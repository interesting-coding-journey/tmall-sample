import { StyleSheet, Dimensions } from 'react-native'

// import ScreenUtil from '../../utils/screenUtil.js'

// const { getScreenScale } = ScreenUtil

const { width }: { width: number } = Dimensions.get('window')
const itemWidth: number = (width / 3) - 20

const $red: string = '#ef1d2c'

const styles = StyleSheet.create({
  esayEnterContainer: {
    backgroundColor : $red,
    flexDirection   : 'row',
    justifyContent  : 'space-around',
    alignItems      : 'center',
  },
  item: {
    position: 'relative',
  },
  image: {
    width  : 48,
    height : 48,
  },
  name: {
  },
})

export default styles
