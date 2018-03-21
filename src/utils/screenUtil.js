/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6
*/
import {
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native'

class ScreenUtil {
  constructor() {
    this.defaultPixel = 2 // iphone6的像素密度
    this.defaultWidth = 750 // iphone6的宽度
    this.defaultHeigth = 1334 // iphone6的高度
    this.pixelRatio = PixelRatio.get() // 当前设备的像素密度
    const deviceWidth = Dimensions.get('window').width // 设备的宽度
    const deviceHeight = Dimensions.get('window').height // 设备的高度
    // px转dp
    const widthDp = this.defaultWidth / this.defaultPixel
    const heightDp = this.defaultHeigth / this.defaultPixel
    // 屏幕缩放比例
    this.scale = Math.min(deviceHeight / heightDp, deviceWidth / widthDp)
    // 字体大小缩放比例
    this.fontScale = PixelRatio.getFontScale()
  }

  getFontScale = (size) => {
    let temp = size
    temp = Math.round((((temp * this.scale) + 0.5) * this.pixelRatio) / this.fontScale)

    return temp / this.defaultPixel
  }

  getFontHeight = (size) => {
    const height = Platform.OS === 'ios' ? Math.round(size * 1.2) : Math.round(size * 1.35)

    return height
  }

  getScreenScale = (size) => {
    const temp = size
    let newSize = temp / this.defaultPixel
    newSize = Math.round(newSize * this.scale)

    return newSize
  }
}

const instance = new ScreenUtil()
Object.freeze(instance)

export default instance
