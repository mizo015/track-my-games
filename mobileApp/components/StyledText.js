import React from 'react';
import { Text } from 'react-native';
import { primaryFontColor } from '../styles/Constants';

/* eslint-disable react/destructuring-assignment */
export const RegularText = props => (
  <Text
    {...props}
    style={[{ color: primaryFontColor, fontFamily: 'Roboto-Regular' }, props.style]}
  />
);

export const BoldText = props => (
  <Text {...props} style={[props.style, { color: primaryFontColor, fontFamily: 'Roboto-Bold' }]} />
);

export const MutedSmallText = props => (
  <Text
    {...props}
    style={[props.style, { fontSize: 10, opacity: 0.7, fontFamily: 'Roboto-Bold' }]}
  />
);
