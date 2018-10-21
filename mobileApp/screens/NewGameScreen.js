import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/Header';

export default class NewGameScreen extends React.Component {
  static navigationOptions = {
    header: <Header title="Add New Game" />,
  };

  render() {
    return (
      <View>
        <Text>New Game Screen</Text>
      </View>
    );
  }
}
