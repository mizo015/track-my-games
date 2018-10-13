import React from 'react';
import { Text } from 'react-native';

/* eslint-disable react/destructuring-assignment */
export const RegularText = props => (
  <Text {...props} style={[props.style, { fontFamily: 'Roboto-Regular' }]} />
);

export const BoldText = props => (
  <Text {...props} style={[props.style, { fontFamily: 'Roboto-Bold' }]} />
);
