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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {__DEV__ && <DevTriggers />}
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
