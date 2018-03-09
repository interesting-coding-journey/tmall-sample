import * as React from 'react'
import { Provider, observer } from 'mobx-react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import StackNavigation from './stackNavigation'

import stores from '../stores'

import styles from './style'

interface Props {}
interface State {}

@observer
class RouterNavigation extends React.Component<Props, State> {
  render() {
    return (
      <Provider {...stores}>
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