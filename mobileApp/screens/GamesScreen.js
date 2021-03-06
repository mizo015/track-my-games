import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

import GamesList from '../components/GamesList';
import Header from '../components/Header';
import Error from '../components/Error';

import { getItem } from '../storage/localStorage';

export default class GamesScreen extends React.Component {
  static navigationOptions = {
    header: null,
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
        user,
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
      <Container>
        <Header title="Games" refresh={this._refreshUserObj} />
        <Grid>
          <Row>
            {userError && <Error message={userError} />}
            {loading && <Text>...Loading</Text>}
            {!loading &&
              user &&
              user.games && (
                <GamesList
                  data={user.games.map(g => ({ ...g, key: g.id }))}
                  navigation={navigation}
                />
              )}
          </Row>
        </Grid>
      </Container>
    );
  }

  async _refreshUserObj(user) {
    this.setState({
      user,
    });
  }
}
