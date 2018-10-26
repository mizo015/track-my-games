import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/Games';

import GamesList from '../components/GamesList';
import Header from '../components/Header';
import Error from '../components/Error';

import { getItem } from '../storage/localStorage';

export default class GamesScreen extends React.Component {
  static navigationOptions = {
    header: <Header title="Games" />,
  };

  state = {
    loading: true,
    user: null,
    userError: null,
  };

  async componentDidMount() {
    const user = await getItem('user');

    if (user) {
      this.setState({
        user: JSON.parse(user),
        loading: false,
      });
    } else {
      this.setState({
        userError: 'Failed to get user info',
        loading: false,
      });
    }
  }

  render() {
    const { navigation } = this.props;
    const { user, userError, loading } = this.state;

    return (
      <View style={styles.container}>
        {userError && <Error message={userError} />}
        {loading && <Text>...Loading</Text>}
        {!loading &&
          user &&
          user.games && (
            <GamesList data={user.games.map(g => ({ ...g, key: g.id }))} navigation={navigation} />
          )}
      </View>
    );
  }
}
