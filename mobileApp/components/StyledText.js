import React from 'react';
import { Text } from 'react-native';

/* eslint-disable react/destructuring-assignment */
export const RegularText = props => (
  <Text {...props} style={[props.style, { fontFamily: 'roboto-reg' }]} />
);

export const BoldText = props => (
  <Text {...props} style={[props.style, { fontFamily: 'roboto-bold' }]} />
);
