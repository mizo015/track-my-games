import React from 'react';
import {Button, View, StyleSheet, AsyncStorage} from 'react-native';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in'
    };

    render() {
        return (
            <View style={styles.container}>
                <View>THIS IS SIGN IN SCREEN</View>
                <Button title="Sign in!" onPress={this._signInAsync}/>
            </View>
        );
    }

    _signInAsync = async() => {
        await AsyncStorage.setItem('userToken', 'abc');
        this
            .props
            .navigation
            .navigate('Main');
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});