import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

import { FailedLogin } from '../components/FailedLogin';
import  CanvasA from '../components/CanvasA';
import { signInWithGoogleAsync } from '../helpers/Auth';

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
        <CanvasA />
        <FailedLogin failed={loginFailed} />
        <View>
          <Text>THIS IS SIGN IN SCREEN</Text>
        </View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    const { navigation } = this.props;
    const result = await signInWithGoogleAsync();
    if (result && result.userId) {
      navigation.navigate('Main');
      return;
    }

    this.setState({
      loginFailed: true,
    });
  };
}
