import React from 'react';
import { FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';


export default class GameDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Game Details',
  };

  render() {
    return (
      <Text>Details Screen</Text>
    );
  }
}