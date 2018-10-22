import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/Games';

import GamesList from '../components/GamesList';
import Header from '../components/Header';
import Error from '../components/Error';

import { getUser } from '../api/user';

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
    const usrRes = await getUser('1');

    if (usrRes.success) {
      this.setState({
        user: usrRes.user,
        loading: false,
      });
    } else {
      this.setState({
        userError: usrRes.message,
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
          user && (
            <GamesList data={user.games.map(u => ({ ...u, key: u.id }))} navigation={navigation} />
          )}
      </View>
    );
  }
}
