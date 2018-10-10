import React from 'react';
import { Text, View } from 'react-native';

export const FailedLogin = ({ failed }) => {
  if (!failed) {
    return null;
  }

  return (
    <View>
      SAD FACE Icon
      <Text>FAILED LOGIN</Text>
    </View>
  );
};
