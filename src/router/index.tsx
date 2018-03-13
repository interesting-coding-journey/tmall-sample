import * as React from 'react'
import { Provider, observer } from 'mobx-react'
import { StatusBar, View } from 'react-native'
import StackNavigation from './stackNavigation'

import store from '../stores'

import styles from './style'

interface Props {}
interface State {}

@observer
class RouterNavigation extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <StatusBar
            barStyle="light-content"
          />
          <StackNavigation />
        </View>
      </Provider>
    );
  }
}

export default RouterNavigation