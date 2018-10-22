import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';

const Error = ({ message }) => (
  <View>
    <Text>{message}</Text>
  </View>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
