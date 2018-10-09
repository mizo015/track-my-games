import React from 'react';
import { Button, View, Text, StyleSheet, AsyncStorage } from 'react-native';

import { signInWithGoogleAsync } from '../helpers/Login';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    state = {
        loginFailed: false,
    }

    render() {
        const {loginFailed} = this.state;

        return (
            <View style={styles.container}>
                {loginFailed && <Text>LOGIN GAILED!!!</Text>}
                <View>THIS IS SIGN IN SCREEN</View>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        const result = await signInWithGoogleAsync();

        if (result.accessToken) {
            await AsyncStorage.setItem('accessToken', result.accessToken);
            this.props.navigation.navigate('Main');
        }

        this.setState({
            loginFailed: true,
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
