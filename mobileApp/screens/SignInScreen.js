import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import FailedLogin from '../components/FailedLogin';

import { signInWithGoogleAsync } from '../helpers/Login';
import { setItem } from '../storage/localStorage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  state = {
    loginFailed: false,
  };

  render() {
    const { loginFailed } = this.state;

    return (
      <View style={styles.container}>
        <FailedLogin failed={loginFailed} />
        <View>THIS IS SIGN IN SCREEN</View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    const { navigation } = this.props;
    const result = await signInWithGoogleAsync();

    if (result.accessToken) {
      await setItem('accessToken', result.accessToken);
      navigation.navigate('Main');

      return;
    }

    this.setState({
      loginFailed: true,
    });
  };
}
