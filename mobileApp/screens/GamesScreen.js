import React from 'react';
import { View } from 'react-native';

import { styles } from '../styles/Games';

import GamesList from '../components/GamesList';
import Header from '../components/Header';

export default class GamesScreen extends React.Component {
  static navigationOptions = {
    header: <Header title="Games" />,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <GamesList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          navigation={navigation}
        />
      </View>
    );
  }
}
