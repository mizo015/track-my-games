/* global __DEV__ */

import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import DevTriggers from '../components/DevTriggers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class GamesScreen extends React.Component {
  static navigationOptions = {
    title: 'Games',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {__DEV__ && <DevTriggers />}
        </ScrollView>
      </View>
    );
  }
}
