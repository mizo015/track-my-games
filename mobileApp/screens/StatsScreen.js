/* global __DEV__ */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import DevTriggers from '../components/DevTriggers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return <ScrollView style={styles.container}>{__DEV__ && <DevTriggers />}</ScrollView>;
  }
}
