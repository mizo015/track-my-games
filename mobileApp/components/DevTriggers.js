import React from 'react';
import { View, Text, Button } from 'react-native';

import { clearStorage, getItem } from '../storage/localStorage';

export default class DevTriggers extends React.Component {
  state = {
    storageCleared: false,
    userObj: null,
  };

  render() {
    const { storageCleared, userObj } = this.state;

    return (
      <View>
        <Button type="button" title="Clear Local Storage" color="#841584" onPress={this._resetLocalStorage} />
        <Button type="button" title="Print Storage" color="#841584" onPress={this._printUserObj} />

        {storageCleared && <Text>Cleared!</Text>}
        <Text style={{ backgroundColor: 'rgb(247, 247, 248)', color: 'rgba(0, 0, 32, 1)' }}>{userObj && JSON.stringify(userObj)}</Text>
      </View>
    );
  }

  _resetLocalStorage = () => {
    clearStorage();

    this.setState({
      storageCleared: true,
    });
  };

  _printUserObj = async () => {
    const user = await getItem('user');
    console.log('User Object', user);

    this.setState({
      userObj: user,
    });
  };
}
