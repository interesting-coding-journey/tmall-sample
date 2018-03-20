// import * as React from 'react';
import * as React from 'react';
import { View, StatusBar, Text, Button } from 'react-native';
import Styles from './style';

interface props {
  navigation: any
}

interface options {
  navigation: any,
}

export default class BrandScreen extends React.Component<props, {}> {

  static navigationOptions = ({ navigation }:options) => {
    const { params } = navigation.state

    return {
      title: params ? params.title : '品牌',
      headerStyle: {
        backgroundColor: 'blue',
      },
    };
  }

  handleGoToBrand = () => this.props.navigation.navigate('Brand')

  handleBack = () => this.props.navigation.goBack()

  handleUpdateTitle = () => this.props.navigation.setParams({ title: '新品牌' })

  render() {
    const { params = {} } = this.props.navigation.state
    const { id, name } = params

    return (
      <View style={Styles.container}>
        <Text>品牌页面</Text>
        <Text>Id: {id}</Text>
        <Text>name: {name}</Text>
        <Button
          title="Go to Brand"
          onPress={this.handleGoToBrand}
        ></Button>
        <Button
          title="Go Back"
          onPress={this.handleBack}
        ></Button>
        <Button
          title="Update the title"
          onPress={this.handleUpdateTitle}
        ></Button>
      </View>
    );
  }
}
