import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';

import { getItem } from '../storage/localStorage';
import { signOut } from '../helpers/Auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'rgb(98, 228, 56)',
    padding: 20,
  },
  headerImageContainer: {
    flex: 0,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerCenter: {
    flex: 2,
    padding: 10,
  },
  headerRight: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
  },
});

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  state = {
    loading: true,
    user: null,
  };

  componentDidMount() {
    this._setUsetInfo();
  }

  render() {
    const { loading, user } = this.state;

    if (loading) {
      return <Text>loading...</Text>;
    }

    if (!user) {
      return <Text>Failed to load user info...</Text>;
    }

    return (
      <View>
        <View style={styles.header}>
          <View style={styles.headerImageContainer}>
            <Image source={{ uri: user.photoUrl }} style={styles.headerImage} />
          </View>
          <View style={styles.headerCenter}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
          <View style={styles.headerRight}>
            <Button type="button" title="logout" onPress={this._handleSignOut} />
          </View>
        </View>
      </View>
    );
  }

  _setUsetInfo = async () => {
    const user = await getItem('user');

    this.setState({
      user: JSON.parse(user),
      loading: false,
    });
  };

  _handleSignOut = async () => {
    const { navigation } = this.props;
    await signOut();

    navigation.navigate('Auth');
  };
}
