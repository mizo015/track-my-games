import React from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import { Icon } from 'expo';

import { getItem } from '../storage/localStorage';
import { signOut } from '../helpers/Auth';

import { BoldText, RegularText } from '../components/StyledText';

import { styles } from '../styles/Profile';

export default class ProfileScreen extends React.Component {
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
      return <BoldText>loading...</BoldText>;
    }

    if (!user) {
      return <BoldText>Failed to load user info...</BoldText>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerImageContainer}>
            <Image source={{ uri: user.photoUrl }} style={styles.headerImage} />
          </View>
          <View style={styles.headerCenter}>
            <BoldText>{user.name}</BoldText>
            <RegularText>{user.email}</RegularText>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={this._handleSignOut}>
              <Icon.Ionicons
                name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-logout'}
                size={26}
                style={{ marginBottom: -3, fontFamily: 'Roboto-Bold' }}
              />
            </TouchableOpacity>
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
