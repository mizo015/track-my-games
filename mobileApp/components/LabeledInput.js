import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

import { BoldText } from './StyledText';
import { styles } from '../styles/Inputs';

const LabeledInput = props => {
  const { label, extraStyles, containerStyles } = props;

  return (
    <View style={containerStyles}>
      <BoldText>{label}</BoldText>
      <TextInput {...props} style={StyleSheet.flatten([styles.input, extraStyles])} />
    </View>
  );
};

LabeledInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
};

LabeledInput.defaultProps = {
  placeholder: null,
  multiline: false,
};

export default LabeledInput;
