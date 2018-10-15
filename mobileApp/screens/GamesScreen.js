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
            {key: 'Rayan'},
            {key: 'Wassim'},
            {key: 'Deena'},
            {key: 'Jana'},
            {key: 'Imane'},
            {key: 'Sana'},
            {key: 'Miz'},
            {key: 'Biz'},
          ]}
          navigation={navigation}
        />
      </View>
    );
  }
}
