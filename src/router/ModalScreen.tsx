import * as React from 'react';
import { View, Text, Button } from 'react-native';

interface props {
  navigation: any
}

class ModalScreen extends React.Component<props, {}> {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default ModalScreen;